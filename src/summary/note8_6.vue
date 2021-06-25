<template>
    <div class="note">
        <p class="center">8月6日</p>
        <p class="center">全屏</p>
        <m-code :code="one"></m-code>
        <pre ref="one" v-show="false">
进入全屏
//W3C的建议
Element.requestFullscreen()
//Chrome、safari
Element.webkitRequestFullscreen()
//Firefox
Element.mozRequestFullScreen()
//Internet Explorer
Eelement.msRequestFullscreen()
​
退出全屏
//W3C的建议
document.exitFullscreen()
//Chrome、safari
document.webkitExitFullscreen()
//Firefox
document.mozCancelFullScreen()
//Internet Explorer
document.msExitFullscreen()
​
获取全屏元素
//W3C的建议
document.fullscreenElement
        </pre>
        <p class="center">canvas</p>
        <m-code :code=two></m-code>
        <pre ref="two" v-show="false">
<canvas></canvas>
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

        </pre>
    </div>
</template>
<script>
export default {
    name:"NoteAugSix",
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