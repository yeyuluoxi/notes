import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.May, date.Second],
  type: IType.Js,
  title: "canvas",
  note: `
设置水平对齐方式
.textAlign='left|center|right'
擦除指定的矩形区域
.clearRect(x，y，width,height)
开始新的路径
.beginPath()
指定起点的坐标或者下一点坐标
.moveTo(x,y)
绘制线段(终点坐标,下一条线段的起点)
.lineTo(x,y)
绘制圆弧(x,y为圆心,radius为半径,其后为起始角度,弧度制,x轴正方向为0,逆时针为正)
弧度=角度*Math.PI/180
.arc(x,y,radius,start_angle,end_angle)
完成路径绘制
.strike()/.fill()
  `,
  pre: true
};

const second: IDaily = {
  date: [month.May, date.Third],
  type: IType.Js,
  title: "刷新",
  note: `
在浏览器中定时循环一个操作或任务,返回一个requestId~
-充分利用显示器的刷新频率，不会出现丢帧或卡顿的现象~
-如果当前选项卡没有被激活的话，动画将自动停止，以节省计算机资源~
.requestAnimationFrame()~
清理指定requestID的requestAnimationFrame的执行~
.cancelAnimationFrame(requestId)~
  `
};

const third: IDaily = {
  date: [month.May, date.Forth],
  type: IType.Js,
  title: "svg",
  note: `
scalable vector graphic 可缩放矢量图形,基于xml的2D图形
二进制文件:gif,jpg,jpeg,png,exe,rar,zip
文本文件:js css htm html json xml
MIME类型:image/svg+xml
<embed src="url地址" type="MIME类型" width="" height="">
<iframe src="url地址" width="" height="" scrolling="是否显示" frameborder="0"></iframe>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    绘制文本
    <text x="" y="" font-size="">内容</text>
    绘制线段(可将粗细和颜色属性放到svg标签上影响所有line)
    <line x1="" y1="" x2="" y2="" stroke-width="粗细" stroke="颜色"></line>
    绘制折线
    <polyline points="x1,y1,x2,y2,..."></polyline>
    绘制(圆角)矩形
    <rect x="" y="" width="" height="" rx="圆角" ry="圆角"></rect>
    链接
    <a xlink:href="目标文档url" xmlns:xlink="http://www.w3.org/1999/xlink" target=""></a>
</svg>
xmlns(XML Namespace):XML命名空间,解决标签名称冲突
document.createElementNS("命名空间","元素名")创建指定命名空间内的元素
svg元素属性获取与设置需要通过getAttribute,setAttribute
  `,
  pre: true
};

const forth: IDaily = {
  date: [month.May, date.Forth],
  type: IType.Js,
  title: "音视频",
  note: [`
浏览器支持的视频格式 mp4 webm ogg   音频格式  mp3       wav     ogg
浏览器   mp4     webm    ogg                mp3       wav     ogg
IE9+    yes     no      no                 yes        no      no
Chrome  yes     yes     yes                yes        yes     yes
Firefox no      yes     yes                no         yes     yes
Safari  yes     no      no                 yes        yes     no
Opera   no      yes     yes                no         yes     yes
  `,`
简写:
<video src="路径" width="宽度" height="高度"></video>
高度、宽度不写默认为px单位
<audio src="路径"></audio>

标准:
<video width="宽度" height="高度">
    <source src="path1" type="video/xxx">
    <source src="path2" type="video/xxx">
    ......
    浏览器不支持视频的提示文字,可以用链接
</video>
<audio>
    <source src="path">
</audio>
  `],
  pre: true
};

const fifth: IDaily = {
  date: [month.May, date.Sixth],
  type: IType.Js,
  title: "音视频属性方法",
  note: [`
controls: Boolean属性，控制是否显示视频播放控件
autoplay: Boolean属性，控制是否自动播放视频(需与muted属性组合使用)
muted:  Boolean属性，控制视频是否静音播放
loop: Boolean属性，控制是否循环播放视频
poster: 海报帧的url地址
音频属性没有poster,其余与视频属性基本相同
preload:  控制视频的预载入方式，
  auto(默认)-浏览器尽可能下载视频文件(播放流畅,浪费流量),
  none-不缓存视频，尽可能减少流量浪费,
  metadata-只加载视频的时长、宽度、高度等信息
  `,`
p——>HTMLParagraphElement
img——>HTMLImageElement
video——>HTMLVideoElement 提供用于操作视频对象的属性和方法，继承自HTMLMediaElement和HTMLElement
width:获取/设置视频对象宽度 value=HTMLVideoElement.width/HTMLVideoElement.width=value
获取时必须保证HTML video标签中存在width属性
videowidth:获取视频对象原始宽度,需要在事件中获取
video元素.addEvenListener("loadeddata",()=>{})

audio——>HTMLAudioElement 提供用于操作音频对象的属性和方法，继承自HTMLMediaElement和HTMLElement
new Audio("音频文件url地址")——>a=new Audio();a.src="音频文件url地址";

audio、video——>HTMLMediaElement 提供用于操作媒体(视频、音频)对象的属性和方法
获取/设置:bool=HTMLMediaElement.autoplay/HTMLMediaElement.autoplay=bool
volume 音量,取值[0,1]
playbackRate 播放速率,1.0为正常速率
.ended——bool,是否播放结束
.paused——bool,是否处于暂停状态
.currentTime——获取/设置当前播放时间(s)
.duration——获取播放总时长(s)  需通过事件获取 loadedmetadata,loadeddata
.pause()  暂停
.play()    播放

事件
.addEvenListener("play",()=>{})
.onplay=()=>{}              开始
.addEvenListener("pause",()=>{})
.onpause=()=>{}             暂停
.addEvenListener("ended",()=>{})
.onended=()=>{}             结束
.addEvenListener("timeupdate",()=>{})
.ontimeupdate=()=>{}        currentTime变化时触发
  `],
  pre: true
}

const May: Array<IDaily> = [
  first,
  second,
  third,
  forth,
  fifth
];

export default May;