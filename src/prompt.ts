import Prompts from "prompts";
import FilterMissing from "./prompt-object/array/filter-missing";
import Questions from "./questions/questions";
import FromQuestion from './prompt-object/array/from-question';

export default function Prompt<Data extends object>(
    mapper: Questions<Data>,
    initial ?: ()=>Partial<Data>|Promise<Partial<Data>>,
) : Promise<Data> {

    return Promise.resolve(initial ? initial() : {}).then(async (config : Partial<Data>)=>{

        const missing = FilterMissing(FromQuestion(mapper), config);

        const data = await Prompts(missing);

        return Object.assign(data, config) as Data ;
    });
}
