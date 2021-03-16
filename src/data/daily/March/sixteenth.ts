import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Sixteenth ],
    type: IType.Vue,
    title: "env文件",
    note: `例: .env.dev 在package.json的scripts内可以--mode dev调用~
        process.env通过变量名获取文件中的参数`
}

const MarchSixteenth: Array<IDaily> = [ first ];

export default MarchSixteenth;
