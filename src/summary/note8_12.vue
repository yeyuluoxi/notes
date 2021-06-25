<template>
    <div class="note">
        <p class="center">8月12日</p>
        <p class="center">SVG</p>
        <m-code :code="one"></m-code>
        <pre ref="one" v-show="false">
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
        </pre>
        <p class="center"></p>
        <m-code :code="two">ECharts</m-code>
        <pre ref="two" v-show="false">
百度推出的开源数据可视化工具--基于
http://echarts.apache.org/zh/index.html
npm install --save echarts

https://github.com/apache/incubator-echarts/blob/4.8.0/dist/echarts.min.js
在浏览器引入js文件后，会自动暴露出一个object对象
一个网页中可以存在多个实例，一个实例中可以有多个图表类型

1.在html中创建div元素，作为图表渲染容器(该容器必须设置宽度和高度)
2.书写script标签,调用echarts对象的init()方法以完成实例的创建
let a=echarts.init("容器");
3.通过setOption()配置实例
a.setOption({
    标题title组件,控制标题信息
    title:{
        show:true/false,
        text:"内容",
        link:"链接url",
        target:"打开链接方式blank/self",
        textStyle:{
            color:"",
            fontSize:N+,
            fontFamily:字体,
            fontWeight:加粗normal/bold,
            fontStyle:倾斜normal/italic
        },
        subtext:"",副标题
        sublink:"",
        subtarget:"",
        top:"",
        left:"",
        bottom:"",
        right:""
    },
    x轴
    xAxis:{
        show:"",
        type:"类型category/time",
        data:"",//在type属性为category时,为数组
    },
    y轴
    yAxis:{},
    图表系列
    series:{
        {
            type:"系列名称bar(柱形图)",
            data:"系列数据(Array)"
        },
        ...
    },
});
        </pre>
    </div>
</template>
<script>
export default {
    name:"NoteAugTwe",
    data(){
        return {
            one:"",
            two:""
        }
    },
    mounted(){
        this.one=this.$refs.one.innerHTML;
        this.two=this.$refs.two.innerHTML;
        let a=new Date('2020-04-26 17:33:32');
        let b=a.getTime();
        console.log(b);
        b=new Date(b);
        console.log(b.toLocaleString());
        
    }
}
</script>