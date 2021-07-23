import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.February, date.Fifth],
  type: IType.Js,
  title: "微信公众平台",
  note: `
基于腾讯提供的服务器与客户端app,由更多的第三方提供者加入,为广大微信用户提供信息服务平台
微信公众平台官网:https://mp.weixin.qq.com
服务类型:
服务号      为客户提供一对一服务
订阅号      为所有订阅者提供免费的咨询服务
小程序      在微信客户端提供类似app的功能，到达用完即走的目的
企业微信        为企业内部员工提供日常办公支持,与微信、支付等互通

微信小程序与网页的区别
微信小程序                              普通网页
WXML，表示小程序的结构                html,表示网页结构
WXSS，表示小程序的外观                css表示网页元素的外观
WXS,表示小程序的行为                 javascript表示网页元素的行为
渲染线程和脚本线程是两个独立的线程     渲染线程和脚本线程是同一个线程
不可以进行任何DOM、BOM操作            可以进行DOM、BOM操作

微信小程序开发环境搭建
1.注册一个新邮箱(未被微信公众平台注册，未被微信开放平台注册，未被个人微信号绑定的邮箱)
2.在微信公众平台注册开发者账号

项目目录名称中严禁出现中文
目录结构
.json       静态配置文件
app.json    全局配置文件
page.json   各页面专有配置文件
.js/ts      脚本文件        js/事件、数据绑定   .wxs/只针对页面中数据的修饰工作
app.js      整个项目的入口脚本文件
page.js     各页面的脚本文件
.wxml       页面的模板文件(不能使用任何html标签,只能使用小程序专有标签)
wxss        页面的样式文件
app.wxss    整个项目的样式文件
page.wxss   各页面专有的样式文件
(app.json,app.wxss,app.js必须位于小程序的根目录下)
  `,
  pre: true
};

const second: IDaily = {
  date: [month.February, date.Seventeenth],
  type: IType.Js,
  title: "小程序",
  note: `
app.json
{
  "pages":[
    "pages/index1/index2"   --页面,写在最前面的为首页,若没有，则会自动在pages目录下创建index1文件夹,在其内创建index2相关文件
  ],
  "window":{          --用于实现窗口的配置
    "navigationBarTitleText":"标题信息",
    "navigationBarBackgroundColor":"标题背景色",
    "navigationBarTextStyle":"标题文本颜色(black/white)",
    "backgroundTextStyle":"控制下拉刷新的loading样式(light/dark)",
    "backgroundColor":"下拉样式的背景色",
    "enablePullDownRefresh": true   是否启用下拉刷新(boolean)
  },
  "tabBar":{          --设置小程序底部选项卡
    "color":"底部选项卡正常显示颜色",
    "selectedColor":"底部选项卡激活时的颜色",
    "backgroundColor":"底部背景颜色",
    "borderStyle":"底部边框颜色(black)"
    "list":[        Array,每个选项卡为object类型
      {
        "text":"底部选项卡正常显示文本",
        "pagePath":"底部选项卡链接页面路径"
      }
    ]
  },
  "sitemapLocation": "sitemap.json"
}
sitemap.json   --设置微信爬虫的读取规则,默认情况下,所有的情况下都可以被搜索到
设置project.config.json中setting中"checkSiteMap"为false
{
  "desc": "",
  "rules": [
    {
      "action": "allow",
      "page": "*"
    }
  ]
}
<view hover-class="按下去的css样式" hover-start-time="按下后多长时间出现点击状态(50ms)" hover-stay-time="松开后多长时间退出点击状态(50ms)"
></view>
  `,
  pre: true
};

const third: IDaily = {
  date: [month.February, date.Eighteenth],
  type: IType.Js,
  title: "webSocket",
  note: `
https://socket.io/
没有同源策略的限制,客户端可以跟任何服务端进行通讯
数据格式轻量,通讯高效
协议为ws,加密为wss
event-based,基于事件    用户纯的自定义事件
客户端API
let client=io('ws://127.0.0.1:5000')   socket.io的服务器地址及端口号
emit()方法  客户端向服务器广播事件
client.emit("事件名称",[,数据])
服务器API
const app=require("http").createserver();
const server=require('socket.io')(app);
server.listen(5000);
on()方法    用于实现根据指定的事件来注册一个函数
server.on("事件名称",回调函数)
  `,
  pre: true
};

const forth: IDaily = {
  date: [month.February, date.Fifth],
  type: IType.Js,
  title: "微信云服务",
  note: `
云存储      类似于网盘,可以存储任意类型的文件,如图像,视频,音频
云数据库    专门为微信小程序提供的"JSON"类型的数据库
云函数      实现更为复杂的服务器拓展功能

开通云服务
每个小程序只能开通两个云服务,只能使用与自己关联的云服务
云服务前缀为cloud://

云存储
通过云开发控制台的图形化管理界面实现即可      
通过API
  wx.chooseImage({    从本地相册选择图片或使用相机拍照
    count:最多选择的图片数量(最多为9,默认9),
    sourceType:"图片源类型(['album','camera'])",
    success:res=>{
        成功时的回调函数
    },
    fail:()=>{},//失败
    complete:()=>{}//完成
  })    
  wx.cloud.uploadFile({   将文件上传到云存储空间
    filepath:"要上传文件的路径",
    cloudpath:"",
    success:res=>{},
    fail:()=>{},
    complete:()=>{}
  })
  wx.chooseVideo({})  拍摄视频或从手机相册中选择视频
  wx.chooseMedia({})  拍摄或从手机相册选择图片或视频
  `,
  pre: true
};

const fifth: IDaily = {
  date: [month.February, date.Nineteenth],
  type: IType.Js,
  title: "微信云数据库",
  note: `
云数据库
微信小程序提供的JSON类型数据库,基于MongoDB  非关系型数据库(NoSQL-->not only sql)
关系型
类型:   整型,浮点型,定点型,字符型等
核心概念:   数据库(database)->数据表(table)->列(column)->记录(row)
操作命令:   统一使用sql命令
关系的维护:     外键
非关系型
类型:   字符型,数值型,数组,对象等
核心概念:   数据库(database)->集合(collection)->字段(field)->记录(record)/文档(document)
操作命令:   不尽相同
关系的维护:     不存在关系的概念
wx.cloud.database()     连接数据库,返回数据库
collectio.add({})       插入数据
collection.get({        查询数据
  success:res=>{}
})
collection.get().then(res=>{})
collection.field({ key:true/false })    是否返回key属性,返回collection对象
collection.orderBy({  'key','asc/desc'  })      按照key(升/降序),返回collection对象
collection.limit( n )      返回n条数据,返回collection对象
collection.skip( n )      从第n条数据开始返回,返回collection对象
collection.where({key:数据库运算符对象(command)})      指定查询条件,返回collection对象
command对象
gt(value) >   lt(value) 小于   eq(value) =   neq(value) !=     gte(value) >=  lte(value) 小于=
inc(value) 递增或递减
unsigned    无符号,正数
更新
collection.update({key:数据库运算符对象(command)})      必须带有有where,修改数据库记录
collection.set({key:数据库运算符对象(command)})      必须带有有where,修改数据库记录(如果没有则创建)
删除
collection.remove({      必须带有有where,删除数据库记录,返回collection对象
  success:res=>{
    //res.stats.removed   返回被删除的记录数量
  }
})
云函数
云函数实质就是在腾讯云服务器上运行的,针对微信小程序的自定义函数
exports.main = async (params, context) => {
  params,形参,代表所有参数形成的对象
}
`,
  pre: true
};

const February: Array<IDaily> = [
  first,
  second,
  third,
  forth,
  fifth
];

export default February;