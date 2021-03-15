import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Fifteenth ],
    type: IType.Js,
    note: ``
}

const MarchFifteenth: Array<IDaily> = [ first ];

export default MarchFifteenth;
