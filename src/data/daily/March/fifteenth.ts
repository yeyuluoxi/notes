import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Fifteenth ],
    type: IType.Css,
    title: "透明度",
    note: `rgba 设置背景颜色透明度,不影响文字,不会继承~
        opacity 影响背景及文字,会被子元素继承(相当于改变子元素透明度的基础值)`
}

const MarchFifteenth: Array<IDaily> = [ first ];

export default MarchFifteenth;
