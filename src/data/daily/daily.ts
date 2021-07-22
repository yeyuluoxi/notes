import {IDaily} from "@/data/daily/base";

import January from "@/data/daily/2021/January";
import February from "@/data/daily/2021/February";
import March from "@/data/daily/2021/March";
import April from "@/data/daily/2021/April";
import May from "@/data/daily/2021/May";
import June from "@/data/daily/2021/June";
import July from "@/data/daily/2021/July";

const daily: Array<IDaily> = [
  ...January,
  ...February,
  ...March,
  ...April,
  ...May,
  ...June,
  ...July
];

daily.forEach(elem => {
  if (typeof elem.note === "string") elem.note = elem.note.trim().split("~");
})

export default daily;
