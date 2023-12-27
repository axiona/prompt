import {PromptObject} from 'prompts';
import Undefined from '@axiona/undefined/boolean/undefined.js';

export default function FilterMissing<Type extends Record<string, any>>(
    question: PromptObject[],
    settings: Type
) : PromptObject[] {

    return question.filter(value=>Undefined(settings[<any>value.name]));
}
