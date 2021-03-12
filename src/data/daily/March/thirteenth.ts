import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Thirteenth ],
    type: IType.Js,
    note: ``
}

const MarchThirteenth: Array<IDaily> = [ first ];

export default MarchThirteenth;
