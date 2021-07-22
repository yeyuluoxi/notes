import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.March, date.Ninth],
  type: IType.Css,
  title: "换行",
  note: `word-break:break-all; 只对英文起作用，以字母作为换行依据~
        word-wrap:break-word; 只对英文起作用，以单词作为换行依据~
        white-space:pre-wrap; 只对中文起作用，强制换行~
        white-space:nowrap; 强制不换行，都起作用~
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; 不换行，超出部分隐藏且以省略号形式出现`
};

const second: IDaily = {
  date: [month.March, date.Ninth],
  type: IType.Css,
  title: "字体",
  note: `font:style variant weight size family;~
        style:normal italic(斜体) oblique(倾斜)~
        variant:normal small-caps(小型大写字母)~
        weight:normal(400) bold(600) bolder(700) lighter~
        size:px pt rem em`
};

const third: IDaily = {
  date: [month.March, date.Ninth],
  type: IType.Css,
  title: "背景边框",
  note: `background:color img repeat attachment position;~
        border:width style color;~
        width:px %;~
        style:solid(实线) dotted(点虚线) dashed(短虚线) double(双实线)`
};

const forth: IDaily = {
  date: [month.March, date.Tenth],
  type: IType.Html,
  title: "特殊标记",
  note: `&amp; ——> &~
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
};

const fifth: IDaily = {
  date: [month.March, date.Tenth],
  type: IType.Html,
  title: "标签属性",
  note: `td:~
        cellpadding 单元格内边距 cellspacing 单元格边框间距~
        colspan同行合并列 rowspan 同列合并行~
        ol: type~
        1 阿拉伯数字  a小写字母 A 大写字母~
        start 设置列表起始编号~
        ul: type~
        disc 实心圆点 circle 空心圆 square 实心方块 none~
        form: enctype~
        application/x-www-form-urlencoded 允许提交任意字符 text/plain 允许提交普通文本 multipart/form-data 允许提交文件`
};

const sixth: IDaily = {
  date: [month.March, date.Eleventh],
  type: IType.Js,
  title: "数组对象方法",
  note: `filter,reduce forEach some,every均会跳过数组空位~
        map跳过空位但会保留元素位置~
        遍历空位数组方法:Array.from(new Array(num), callback ); callback类似map~
        Object.keys();返回包含对象属性的数组`
};

const seventh: IDaily = {
  date: [month.March, date.Eleventh],
  type: IType.Js,
  title: "==时Boolean取值",
  note: `true:~
        undefined == null | false == 0 | "" == 0 | "" == false | " " == 0 | " " == false | "[object Object]" == {} | [] == 0 | [] == false~
        false:~
        undefined == false | undefined == 0 | null == 0 | "" == undefined | "" == null | false == null | " " == ""~
        {} == {} | [] == []~
        NaN与任何值~
        结语:对象(.valueOf()/.toString)-->字符串(Number)-->数字<--(Number)布尔型`
};

const eighth: IDaily = {
  date: [month.March, date.Eleventh],
  type: IType.Vue,
  title: "vuex",
  note: `mutations: this.$store.commit("方法名",参数)/this.$store.commit({ commit:"方法名",amount:参数})~
            actions: this.$store.dispatch("方法名",参数)/this.$store.dispatch({ type:"方法名",amount:参数})`
};

const tenth: IDaily = {
  date: [month.March, date.Twelfth],
  type: IType.Css,
  title: "特护样式",
  note: `/deep/ : 样式穿透~
        pointer-events: none; 点击穿透~
        ::-webkit-scrollbar { display:none; } 消除scroll滚动条(chrome)~
        scrollbar-width: 0; (Firefox)`
};

const eleventh: IDaily = {
  date: [month.March, date.Thirteenth],
  type: IType.Css,
  title: "scrollbar",
  note: `::-webkit-scrollbar 滚动条整体部分~
        ::-webkit-scrollbar-button 滚动条两端的按钮~
        ::-webkit-scrollbar-track 外层轨道~
        ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）~
        ::-webkit-scrollbar-thumb 滚动条里面可以拖动的那个~
        ::-webkit-scrollbar-corner 边角~
        ::-webkit-resizer 定义右下角拖动块的样式`
};

const twelfth: IDaily = {
  date: [month.March, date.Fifteenth],
  type: IType.Css,
  title: "边距",
  note: `第一个元素margin-top有尺寸时,屏幕不满也会出现滑轮`
};

const thirteenth: IDaily = {
  date: [month.March, date.Sixteenth],
  type: IType.Css,
  title: "透明度",
  note: `rgba 设置背景颜色透明度,不影响文字,不会继承~
        opacity 影响背景及文字,会被子元素继承(相当于改变子元素透明度的基础值)`
};

const fourteenth: IDaily = {
  date: [month.March, date.TwentyFirst],
  type: IType.Vue,
  title: "env文件",
  note: `例: .env.dev 在package.json的scripts内可以--mode dev调用~
        process.env通过变量名获取文件中的参数`
};

const March: Array<IDaily> = [
  first, second, third,
  forth, fifth,
  sixth, seventh, eighth,
  tenth, eleventh,
  twelfth,
  thirteenth,
  fourteenth
];

export default March;
