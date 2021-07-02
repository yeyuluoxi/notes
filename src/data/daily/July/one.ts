import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.June, date.Thirtieth],
  type: IType.Vue,
  title: "",
  note: ["获取事件参数时,$event可获取传递的第一个参数,如果没有,则获取事件",
    "注: 绑定事件上没有$event时,用true和false作为参数时,false不能省略,否则会默认传入事件,被判断为true",
    "arguments可获取所有传递的参数,数组形式"
  ]
}


const JulyFirst: Array<IDaily> = [first];

export default JulyFirst;