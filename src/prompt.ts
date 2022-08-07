import Prompts from "prompts";
import FilterMissing from "./prompt-object/array/filter-missing";
import Questions from "./questions/questions";
import FromQuestion from './prompt-object/array/from-question';
import Union from '../../promise/dist/union';
import Callable from '../../function/dist/callable';
import Identity from '../../function/dist/identity';

export async function PromptParameters<Type extends object>(
    question: Questions<Type>,
    initial : Union<Partial<Type>>,
    ensure : Callable<[Type], Type> = Identity
) : Promise<Type> {

    initial = await initial;

    const missing = FilterMissing(FromQuestion(question), initial);

    const complete = Object.assign(
        await Prompts(missing),
        initial
    ) as Type;

    return ensure(complete);
}

export type PromptArgument<Type extends object> = {
    question: Questions<Type>,
    initial?: Union<Partial<Type>>,
    ensure?: Callable<[Type], Type>
};

export function PromptParameter<Type extends object>(
    {
        question,
        initial = {},
        ensure = Identity,
    } : PromptArgument<Type>
) {
    return PromptParameters(question, initial, ensure);
}


namespace Prompt {
    export const Parameters = PromptParameters;
    export const Parameter = PromptParameter;
    export type Argument<Type extends object> = PromptArgument<Type>;
}
export default Prompt;
