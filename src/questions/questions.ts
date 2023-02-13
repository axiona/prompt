import RecordMap from '@alirya/object/map.js';
import Question from '../question/question.js';

type Questions<Type extends Record<string, any> = Record<string, any>> = RecordMap<Type, Question>;
export default Questions;
