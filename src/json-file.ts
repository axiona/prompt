import Questions from './questions/questions';
import Callable from '../../function/dist/callable';
import Union from '../../promise/dist/union';
import Identity from '../../function/dist/identity';
import ReadJsonAsync from '../../filesystem/dist/read/json-async';
import WriteJsonAsync from '../../filesystem/dist/write/json-async';
import {PromptParameters} from './prompt';


export async function JsonFileParameters<Type extends object>(
    question: Questions<Type>,
    file: string,
    ensure : Callable<[Type], Type> = Identity
) : Promise<Type> {

    const result = await PromptParameters(question, ReadJsonAsync.Parameters(file, () => ({})), ensure);

    await WriteJsonAsync.Parameters(file, result, 2);

    return result;
}


export type JsonFileArgument<Type extends object> = {
    question: Questions<Type>,
    path: string,
    ensure ?: Callable<[Type], Type>
};

export function JsonFileParameter<Type extends object>(
    {
        question,
        path,
        ensure = Identity,
    } : JsonFileArgument<Type>
) {
    return JsonFileParameters(question, path, ensure);
}


namespace JsonFile {
    export const Parameters = JsonFileParameters;
    export const Parameter = JsonFileParameter;
    export type Argument<Type extends object> = JsonFileArgument<Type>;
}
export default JsonFile;
