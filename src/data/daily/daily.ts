import {IDaily} from "@/data/daily/base";

import MarchNinth from "@/data/daily/March/ninth";
import MarchTenth from "@/data/daily/March/tenth";
import MarchEleventh from "@/data/daily/March/eleventh";
import MarchTwelfth from "@/data/daily/March/twelfth";
import MarchThirteenth from "@/data/daily/March/thirteenth";
import MarchFifteenth from "@/data/daily/March/fifteenth";
import MarchSixteenth from "@/data/daily/March/sixteenth";

import AprilTenth from "@/data/daily/April/tenth";

import JuneTwentyFive from "@/data/daily/June/twentyFive";

const daily: Array<IDaily> = [
  ...MarchNinth,
  ...MarchTenth,
  ...MarchEleventh,
  ...MarchTwelfth,
  ...MarchThirteenth,
  ...MarchFifteenth,
  ...MarchSixteenth,

  ...AprilTenth,

  ...JuneTwentyFive
];

daily.forEach(elem => {
  if (typeof elem.note === "string") elem.note = elem.note.trim().split("~");
})

export default daily;
