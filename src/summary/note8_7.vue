<template>
    <div class="note">
        <p class="center">8月7日</p>
        <p class="center">canvas</p>
        <m-code :code="one"></m-code>
        <pre ref="one" v-show="false">
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
        </pre>
        <p class="center">window对象</p>
        <m-code :code="two"></m-code>
        <pre ref="two" v-show="false">
在浏览器中定时循环一个操作或任务,返回一个requestId
-充分利用显示器的刷新频率，不会出现丢帧或卡顿的现象
-如果当前选项卡没有被激活的话，动画将自动停止，以节省计算机资源
.requestAnimationFrame()
清理指定requestID的requestAnimationFrame的执行
.cancelAnimationFrame(requestId)
        </pre>
    </div>
</template>
<script>
export default {
    name:"NoteAugSev",
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