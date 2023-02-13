import {PromptObject} from 'prompts';
import StrictOmit from '@alirya/object/strict-omit.js';

type Question = StrictOmit<PromptObject, 'name'>;
export default Question;
