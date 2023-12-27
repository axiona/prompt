import Questions from './questions.js';
import { DifferenceParameters } from '@axiona/object/difference.js';
import Undefined from '@axiona/undefined/boolean/undefined.js';

export default function FilterMissing<Type extends Questions>(questions: Type, config) : Partial<Type> {

    return DifferenceParameters(questions, config, (question, value, key)=>{

        return Undefined(value);
    });
}
