
import { date, IDaily, IType, month } from "@/data/daily/base";

const first:IDaily = {
    date: [ month.March, date.Ninth ],
    type: IType.Css,
    title: "换行",
    note: `word-break:break-all; 只对英文起作用，以字母作为换行依据~
        word-wrap:break-word; 只对英文起作用，以单词作为换行依据~
        white-space:pre-wrap; 只对中文起作用，强制换行~
        white-space:nowrap; 强制不换行，都起作用~
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; 不换行，超出部分隐藏且以省略号形式出现`
};

const second:IDaily = {
    date: [ month.March, date.Ninth ],
    type: IType.Css,
    title: "字体",
    note: `font:style variant weight size family;~
        style:normal italic(斜体) oblique(倾斜)~
        variant:normal small-caps(小型大写字母)~
        weight:normal(400) bold(600) bolder(700) lighter~
        size:px pt rem em`
};

const third:IDaily = {
    date: [ month.March, date.Ninth ],
    type: IType.Css,
    title: "背景边框",
    note: `background:color img repeat attachment position;~
        border:width style color;~
        width:px %;~
        style:solid(实线) dotted(点虚线) dashed(短虚线) double(双实线)`
};

const MarchNinth:Array<IDaily> = [ first, second, third ];

export default MarchNinth;
