<template>
    <div class="note">
        <p class="center">8月3日</p>
        <p class="center">视频与音频</p>
        <m-code :code="one"></m-code>
        <pre ref="one" v-show="false">
浏览器支持的视频格式 mp4 webm ogg   音频格式  mp3       wav     ogg
浏览器   mp4     webm    ogg                mp3       wav     ogg
IE9+    yes     no      no                 yes        no      no

Chrome  yes     yes     yes                yes        yes     yes

Firefox no      yes     yes                no         yes     yes

Safari  yes     no      no                 yes        yes     no

Opera   no      yes     yes                no         yes     yes
        </pre>
        <p class="center">视频标签、音频标签</p>
        <m-code :code="two"></m-code>
        <pre ref="two" v-show="false">
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
        </pre>
        <p class="center">视频属性、音频属性</p>
        <m-code :code="three"></m-code>
        <pre ref="three" v-show="false">
controls:Boolean属性，控制是否显示视频播放控件
autoplay:Boolean属性，控制是否自动播放视频(需与muted属性组合使用)
muted:Boolean属性，控制视频是否静音播放
loop:Boolean属性，控制是否循环播放视频
poster:海报帧的url地址
preload:控制视频的预载入方式，auto(默认)-浏览器尽可能下载视频文件(播放流畅,浪费流量),none-不缓存视频，尽可能减少流量浪费,metadata-只加载视频的时长、宽度、高度等信息

音频属性没有poster,其余与视频属性基本相同
        </pre>
        <p class="center">js 视频与音频</p>
        <m-code :code="four"></m-code>
        <pre ref="four" v-show="false">
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
        </pre>

    </div>
</template>
<script>
export default {
    name:"NoteAugThr",
    data(){
        return {
            one:"",
            two:"",
            three:"",
            four:"",
            five:""
        }
    },
    mounted(){
        this.one=this.$refs.one.innerHTML;
        this.two=this.$refs.two.innerHTML;
        this.three=this.$refs.three.innerHTML;
        this.four=this.$refs.four.innerHTML.replace(/&gt;/g,">");
    }
}
</script>