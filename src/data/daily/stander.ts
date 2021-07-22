import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.January, date.Fifth],
  type: IType.Js,
  title: "",
  note: ``,
  pre: false
};

const second: IDaily = {
  date: [month.January, date.Fifth],
  type: IType.Js,
  title: "",
  note: ``,
  pre: false
};

const Exp: Array<IDaily> = [
  first,
  second
];

export default Exp;