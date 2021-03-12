import { IDaily } from "@/data/daily/base";

import MarchNinth from "@/data/daily/March/ninth";
import MarchTenth from "@/data/daily/March/tenth";
import MarchEleventh from "@/data/daily/March/eleventh";
import MarchTwelfth from "@/data/daily/March/twelfth";

const daily:Array<IDaily> = [ ...MarchNinth, ...MarchTenth, ...MarchEleventh, ...MarchTwelfth ];

daily.forEach( elem => {
    if(typeof elem.note === "string") elem.note = elem.note.split("~");
})

export default daily;
