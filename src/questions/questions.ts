import RecordMap from "@alirya/object/map";
import Question from '../question/question';

type Questions<Type extends Record<string, any> = Record<string, any>> = RecordMap<Type, Question>;
export default Questions;
