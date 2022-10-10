import Prompts from "prompts";
import FilterMissing from "./prompt-object/array/filter-missing";
import Questions from "./questions/questions";
import FromQuestion from './prompt-object/array/from-question';
import Union from '@alirya/promise/union';
import Callable from '@alirya/function/callable';
import Identity from '@alirya/function/identity';

export async function PromptParameters<Type extends object>(
    question: Questions<Type>,
    initial : Union<Partial<Type>> = {},
    ensure : Callable<[Type], Type> = Identity
) : Promise<Required<Type>> {

    initial = await initial;

    const missing = FilterMissing(FromQuestion(question), initial);

    const complete = Object.assign(
        await Prompts(missing),
        initial
    ) as Type;

    return ensure(complete) as Promise<Required<Type>>;
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
) : Promise<Required<Type>> {
    return PromptParameters(question, initial, ensure);
}


namespace Prompt {
    export const Parameters = PromptParameters;
    export const Parameter = PromptParameter;
    export type Argument<Type extends object> = PromptArgument<Type>;
}
export default Prompt;
