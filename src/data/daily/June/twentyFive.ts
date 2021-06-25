import {date, IDaily, IType, month} from "@/data/daily/base";

const first:IDaily = {
    date: [month.June, date.TwentyFifth],
    type: IType.Cmd,
    title: "查进程",
    note:`netstat -ano|findstr "端口号"`
}

const JuneTwentyFive:Array<IDaily> = [first];

export default JuneTwentyFive;
