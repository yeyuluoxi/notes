import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.January, date.Fifth],
  type: IType.Js,
  title: "全屏",
  note: `
进入全屏
//W3C的建议
Element.requestFullscreen()
//Chrome、safari
Element.webkitRequestFullscreen()
//Firefox
Element.mozRequestFullScreen()
//Internet Explorer
Eelement.msRequestFullscreen()
退出全屏
//W3C的建议
document.exitFullscreen()
//Chrome、safari
document.webkitExitFullscreen()
//Firefox
document.mozCancelFullScreen()
//Internet Explorer
document.msExitFullscreen()
获取全屏元素
//W3C的建议
document.fullscreenElement
  `,
  pre: true
};

const second: IDaily = {
  date: [month.January, date.Seventh],
  type: IType.Js,
  title: "canvas",
  note: `
获取/设置宽度、高度
.width  .height
返回CanvasRenderingContext2D的二维上下文渲染对象
.getContext('2d');
返回WebGLRenderingContext三维上下文渲染对象
.getContext('webgl');
let ctx = canvasEle.getContext('2d');   
//绘制描边矩形(x,y)为起始点坐标,(width,height)为矩形的宽度与高度
ctx.strokeRect(x,y,width,height);   
//绘制填充矩形    未设置颜色时，默认为黑色
ctx.fillRect(x,y,width,height);
//设置描边颜色
ctx.strokeStyle = 'color';    
//设置填充颜色
ctx.fillStyle = 'color';
//设置文本样式
ctx.font = 'size 字体';
//绘制文本,从x,y位置开始绘制文本
ctx.fillText(内容,x,y) ;
//绘制描边文本
ctx.strokeText(内容,x,y);
描边与文本的区别:描边中文字中空
.font 设置所有文本的字体样式
  `,
  pre: true
};

const third: IDaily = {
  date: [month.January, date.Fourteenth],
  type: IType.Js,
  title: "拖拽",
  note: `
将源对象从一个位置拖动到另一个位置,在html5中任何元素都可以实现拖放，但为保障浏览器兼容性，建议为被拖放的对象添加draggable="true"属性
源对象事件
dragstart事件
在源对象被拖拽时触发
.addEventListener("dragstart",()=>{})       .ondragstart=()=>{}
drag事件
拖放中触发(只要拖动未停止就不断触发)
.addEventListener("drag",()=>{})       .ondrag=()=>{}
dragend事件
源对象被释放时触发
.addEventListener("dragend",()=>{})       .ondragend=()=>{}
dragenter事件
源对象进入目标对象区域范围内时触发
.addEventListener("dragenter",()=>{})       .ondragenter=()=>{}
dragover事件
源对象在目标对象区域范围内悬停时(持续)触发
.addEventListener("dragover",()=>{})       .ondragover=()=>{}
dragleave事件
源对象离开目标对象区域范围内时触发
.addEventListener("dragleave",()=>{})       .ondragleave=()=>{}
drop事件
将源对象在目标对象区域范围内释放时触发
需要添加悬停事件才能触发
.addEventListener("dragover",event=>event.preventDefault()) .ondragover=event=>event.preventDefault()
.addEventListener("draop",()=>{})       .ondrop=()=>{}
dataTransfer属性
返回DataTransfer对象，用于保存拖放数据
DataTransfer            DragEvent.dataTransfer
DataTransfer对象
给指定的类型设置数据，如果类型不存在则自动添加到末尾;存在则替换原来的值
.setData(type,value);
.getData(type)
  `,
  pre: true
};

const January: Array<IDaily> = [
  first,
  second,
  third
];

export default January;