import Questions from './questions.js';
import { DifferenceParameters } from '@alirya/object/difference.js';
import Undefined from '@alirya/undefined/boolean/undefined.js';

export default function FilterMissing<Type extends Questions>(questions: Type, config) : Partial<Type> {

    return DifferenceParameters(questions, config, (question, value, key)=>{

        return Undefined(value);
    });
}