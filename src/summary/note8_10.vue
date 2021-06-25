<template>
    <div class="note">
        <p class="center">8月10日</p>
        <p class="center">拖拽</p>
        <m-code :code="one" draggable="true" @dragstart.native="st" @dragend.native="sev"></m-code>
        <pre ref="one" v-show="false">
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
        </pre>
        <div style="height:100px;border:1px solid #0aa1ed;" @dragover.prevent @dragenter="thi" @dragleave="fif" @drop="six"></div>

    </div>
</template>
<script>
export default {
    name:"NoteAugTen",
    data(){
        return {
            one:"",
            two:""
        }
    },
    mounted(){
        this.one=this.$refs.one.innerHTML.replace(/&gt;/g,">");
        // this.two=this.$refs.two.innerHTML;
    },
    methods:{
        st(e){
            console.log(1);
            let dt=e.dataTransfer;
            console.dir(e.dataTransfer);
            dt.setData("uname","aaabb");
            console.log(dt.getData("uname"));
        },
        sec(){
            console.log(2);
        },
        thi(){
            console.log(3);
        },
        fort(){
            console.log(4);
        },
        fif(){
            console.log(5);
        },
        six(){
            console.log(6);
        },
        sev(e){
            console.log(7);
            console.log(e);
            let dt=e.dataTransfer;
            console.dir(e.dataTransfer);
            console.log(dt.getData("uname"));
        }
    }
}
</script>