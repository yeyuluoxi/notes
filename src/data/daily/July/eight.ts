import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.July, date.Eighth],
  type: IType.React,
  title: "antd table column",
  note: ["配置column时,render方法参数有三个",
    "第一个为当前单元格元素值,第二个为当前行元素值,第三个为当前行index"
  ]
}


const JulyEighth: Array<IDaily> = [first];

export default JulyEighth;