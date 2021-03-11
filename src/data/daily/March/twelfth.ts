import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Twelfth ],
    type: IType.Js,
    note: ``
}

const MarchTwelfth: Array<IDaily> = [ first ];

export default MarchTwelfth;
