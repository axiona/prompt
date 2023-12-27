import Questions from './questions/questions.js';
import Callable from '@axiona/function/callable.js';
import Union from '@axiona/promise/union.js';
import Identity from '@axiona/function/identity.js';
import ReadJsonAsync from '@axiona/filesystem/read/json-async.js';
import WriteJsonAsync from '@axiona/filesystem/write/json-async.js';
import {PromptParameters} from './prompt.js';


export async function JsonFileParameters<Type extends object>(
    question: Questions<Type>,
    file: string,
    ensure : Callable<[Type], Type> = Identity
) : Promise<Required<Type>> {

    const result = await PromptParameters(question, ReadJsonAsync.Parameters(file, () => ({})), ensure);

    await WriteJsonAsync.Parameters(file, result, 2);

    return result as Required<Type>;
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
) : Promise<Required<Type>> {
    return JsonFileParameters(question, path, ensure);
}


namespace JsonFile {
    export const Parameters = JsonFileParameters;
    export const Parameter = JsonFileParameter;
    export type Argument<Type extends object> = JsonFileArgument<Type>;
}
export default JsonFile;
