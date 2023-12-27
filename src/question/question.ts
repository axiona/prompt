import {PromptObject} from 'prompts';
import StrictOmit from '@axiona/object/strict-omit.js';

type Question = StrictOmit<PromptObject, 'name'>;
export default Question;
