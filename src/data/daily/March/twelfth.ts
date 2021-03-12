import {IDaily, IType, month, date } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Twelfth ],
    type: IType.Css,
    title: "特护样式",
    note: `/deep/ : 样式穿透~
        pointer-events: none; 点击穿透~
        ::-webkit-scrollbar { display:none; } 消除scroll滚动条(chrome)~
        scrollbar-width: 0; (Firefox)`
}

const second: IDaily = {
    date: [ month.March, date.Twelfth ],
    type: IType.Css,
    title: "scrollbar",
    note: `::-webkit-scrollbar 滚动条整体部分~
        ::-webkit-scrollbar-button 滚动条两端的按钮~
        ::-webkit-scrollbar-track 外层轨道~
        ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）~
        ::-webkit-scrollbar-thumb 滚动条里面可以拖动的那个~
        ::-webkit-scrollbar-corner 边角~
        ::-webkit-resizer 定义右下角拖动块的样式`
}



const MarchTwelfth: Array<IDaily> = [ first, second ];

export default MarchTwelfth;
