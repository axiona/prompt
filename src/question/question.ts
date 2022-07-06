import {PromptObject} from "prompts";
import StrictOmit from "@alirya/object/strict-omit";

type Question = StrictOmit<PromptObject, 'name'>;
export default Question;
