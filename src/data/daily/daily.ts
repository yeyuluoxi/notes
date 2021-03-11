import { IDaily } from "@/data/daily/base";

import MarchNinth from "@/data/daily/March/ninth";
import MarchTenth from "@/data/daily/March/tenth";
import MarchEleventh from "@/data/daily/March/eleventh";

const daily:Array<IDaily> = [ ...MarchNinth, ...MarchTenth, ...MarchEleventh ];

daily.forEach( elem => {
    if(typeof elem.note === "string") elem.note = elem.note.split("~");
})

export default daily;
