<template>
    <div class="note">
        <p class="center">8月14日</p>
        <p class="center">微信公众平台</p>
        <m-code :code="one"></m-code>
        <pre ref="one" v-show="false">
基于腾讯提供的服务器与客户端app,由更多的第三方提供者加入,为广大微信用户提供信息服务平台
微信公众平台官网:https://mp.weixin.qq.com
服务类型:
服务号      为客户提供一对一服务
订阅号      为所有订阅者提供免费的咨询服务
小程序      在微信客户端提供类似app的功能，到达用完即走的目的
企业微信        为企业内部员工提供日常办公支持,与微信、支付等互通

历史
2010年微信自带webview组件(本质为html/css/javascript的解释器)成为微信网页的内部标准,但未公开
2015年微信推出JS-SDK,开放了支付、录音等功能
2017年推出微信小程序
2019年支付宝、百度等推出小程序

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
        </pre>
        <p class="center"></p>
        <m-code :code="two">小程序</m-code>
        <pre ref="two" v-show="false">
JSON(javascript object notation)
一种轻量级的数据交换格式
json和xml都可以作为数据的交换格式使用。xml是一种与平台无关的技术。
只支持数组和对象
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
></view>视图组件容器,类似于html中的div
<image src="url"></image>

        </pre>
    </div>
</template>
<script>
export default {
    name:"NoteAugFot",
    data(){
        return {
            one:"",
            two:""
        }
    },
    mounted(){
        this.one=this.$refs.one.innerHTML;
        this.two=this.$refs.two.innerHTML;
    }
}
</script>