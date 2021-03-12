import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Twelfth ],
    type: IType.Css,
    note: `/deep/ : 样式穿透~
        pointer-events: none; 点击穿透`
}

const MarchTwelfth: Array<IDaily> = [ first ];

export default MarchTwelfth;
