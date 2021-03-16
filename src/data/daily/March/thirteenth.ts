import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Thirteenth ],
    type: IType.Css,
    title: "边距",
    note: `第一个元素margin-top有尺寸时,屏幕不满也会出现滑轮`
}

const MarchThirteenth: Array<IDaily> = [ first ];

export default MarchThirteenth;
