import Questions from './questions';
import { DifferenceParameters } from '@alirya/object/difference';
import Undefined from '@alirya/undefined/boolean/undefined';

export default function FilterMissing<Type extends Questions>(questions: Type, config) : Partial<Type> {

    return DifferenceParameters(questions, config, (question, value, key)=>{

        return Undefined(value);
    });
}