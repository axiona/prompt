import Questions from '../../questions/questions.js';
import {PromptObject} from 'prompts';

export default function FromQuestion<Type extends Record<string, any>>(
    prompt: Questions<Type>,
) : PromptObject[] {

    return [...Object.entries(prompt).entries()].map(value=>value[1]).map(value => Object.assign(value[1], {name:value[0]}));

}
