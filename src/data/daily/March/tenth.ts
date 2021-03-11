import {date, IDaily, IType, month} from "@/data/daily/base";

const first:IDaily = {
    date: [ month.March, date.Tenth ],
    type: IType.Html,
    title: "特殊标记",
    note:`&amp; ——> &~
        &lt; ——> <~
        &gt; ——> >~
        &nbsp; ——> 空格~
        &copy; ——> ©~
        &reg; ——> ®~
        &yen; ——> ¥~
        &times; ——> ×~
        <sup></sup> ——> 上标~
        <sub></sub> ——> 下标~
        <a href="javascript:function()"></a> ——> 调用js函数~
        <a target="_blank"></a> ——> 在新标签页打开连接`
}

const second:IDaily = {
    date: [ month.March, date.Tenth ],
    type: IType.Html,
    title: "标签属性",
    note:`td:~
        cellpadding 单元格内边距 cellspacing 单元格边框间距~
        colspan同行合并列 rowspan 同列合并行~
        ol: type~
        1 阿拉伯数字  a小写字母 A 大写字母~
        start 设置列表起始编号~
        ul: type~
        disc 实心圆点 circle 空心圆 square 实心方块 none~
        form: enctype~
        application/x-www-form-urlencoded 允许提交任意字符 text/plain 允许提交普通文本 multipart/form-data 允许提交文件`
}

const MarchTenth:Array<IDaily> = [ first, second ];

export default MarchTenth;
