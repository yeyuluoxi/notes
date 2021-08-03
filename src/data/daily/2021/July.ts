import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.July, date.First],
  type: IType.Vue,
  title: "",
  note: ["获取事件参数时,$event可获取传递的第一个参数,如果没有,则获取事件",
    "注: 绑定事件上没有$event时,用true和false作为参数时,false不能省略,否则会默认传入事件,被判断为true",
    "arguments可获取所有传递的参数,数组形式"
  ]
};

const second: IDaily = {
  date: [month.July, date.Eighth],
  type: IType.React,
  title: "antd table column",
  note: ["配置column时,render方法参数有三个",
    "第一个为当前单元格元素值,第二个为当前行元素值,第三个为当前行index"
  ]
};

const third: IDaily = {
  date: [month.July, date.Twentieth],
  type: IType.React,
  title: "antd中文配置",
  note: [`
在原有的文档配置基础上加上下面三行代码
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
  `],
  pre: true
};

const forth: IDaily = {
  date: [month.July, date.TwentySecond],
  type: IType.React,
  title: "react @配置",
  note: [`
config/webpack.config.js  alias
alias:{
  ...,
  '@': path.resolve('src'),
}
tsconfig.json(注意文件所在位置)
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
  `,
    "注意: 使用babel-plugin-react-css-modules时,样式文件须以相对路径引入"
  ],
  pre: true
};

const fifth: IDaily = {
  date: [month.July, date.TwentyThird],
  type: IType.Js,
  title: "vant dialog",
  note: `
在使用this.$dialog方法时,如果页面存在一个由该方法生成的元素,则方法不会触发
若已存在弹窗,需先清除
const dialogElem = document.querySelector("body>.van-dialog");
if(dialogElem) document.body.removeChild(dialogElem);
  `,
  pre: true
};

const sixth: IDaily = {
  date: [month.July, date.TwentyFourth],
  type: IType.Js,
  title: "echarts 阴影缩放",
  note: `
可由两层geo叠放,一层给阴影,然后错位
需关闭动画效果,否则缩放时两者有偏差
mapChart.off("georoam");
mapChart.on('georoam', (params) => {
  const zoomOption = mapChart?.getOption();//获得option对象
  if(zoomOption){
    if (params.zoom) { //缩放
      // @ts-ignore
      zoomOption.geo[0].zoom = zoomOption.geo[1].zoom;//下层geo的缩放等级跟着上层的geo一起改变
      // @ts-ignore
      zoomOption.geo[0].center = zoomOption.geo[1].center;//下层的geo的中心位置随着上层geo一起改变
    } else {//拖曳
      // @ts-ignore
      zoomOption.geo[0].center = zoomOption.geo[1].center;//下层的geo的中心位置随着上层geo一起改变
    }
    mapChart?.setOption(zoomOption);//设置option
  }
});
  `,
  pre: true
};

const seventh: IDaily = {
  date: [month.July, date.TwentySixth],
  type: IType.Js,
  title: "element-plus table",
  note: `
vue3 + ts + element-plus
使用table固定高度时,单元格内有图片时,第一次加载无法滚动,筛选或切换页码后可以
查看两者区别后,解决问题
.el-table__body-wrapper{
  overflow: auto;
}
  `,
  pre: true
};

const eighth: IDaily = {
  date: [month.July, date.TwentySeventh],
  type: IType.Js,
  title: "element-plus table",
  note: `
vue3 + ts + element-plus
使用table固定高度时,滚动条无法消去
查看源码后,找到滚动条宽度来源和所在
colgroup>col[name=gutter]{
  width: 0 !important;
  display: none !important;
}
  `,
  pre: true
};

const ninth: IDaily = {
  date: [month.July, date.TwentyEighth],
  type: IType.Js,
  title: "vue3 img",
  note: `
vue3图片引入方式
html
  <img
    :src="require('@/assets/image/office/' + picture)"
    alt=""
  >
js
  img = require("@/assets/image/menu/" + imgName);
`,
  pre: true
};

const July: Array<IDaily> = [
  first,
  second,
  third,
  forth,
  fifth,
  sixth,
  seventh, eighth,
  ninth
];

export default July;