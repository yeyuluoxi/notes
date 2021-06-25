<template>
    <div class="note">
        <p class="center">8月19日</p>
        <p class="center">webstocket</p>
        <m-code :code="one"></m-code>
        <pre ref="one" v-show="false">
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

        </pre>
        <p class="center">8月21日</p>
        <m-code :code="two"></m-code>
        <pre ref="two" v-show="false">
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
coolection.orderBy({  'key','asc/desc'  })      按照key(升/降序),返回collection对象
coolection.limit( n )      返回n条数据,返回collection对象
coolection.skip( n )      从第n条数据开始返回,返回collection对象
coolection.where({key:数据库运算符对象(command)})      指定查询条件,返回collection对象
    command对象
gt(value) >   lt(value) 小于   eq(value) =   neq(value) !=     gte(value) >=  lte(value) 小于=
inc(value) 递增或递减
        </pre>
        <p class="center">8月22日</p>
        <m-code :code="three"></m-code>
        <pre ref="three" v-show="false">
unsigned    无符号,正数
云数据库
更新
coolection.update({key:数据库运算符对象(command)})      必须带有有where,修改数据库记录
coolection.set({key:数据库运算符对象(command)})      必须带有有where,修改数据库记录(如果没有则创建)
删除
coolection.remove({      必须带有有where,删除数据库记录,返回collection对象
    success:res=>{
        //res.stats.removed   返回被删除的记录数量
    }
})
云函数
云函数实质就是在腾讯云服务器上运行的,针对微信小程序的自定义函数
exports.main = async (params, context) => {
    params,形参,代表所有参数形成的对象


}
        </pre>
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return {
            one:"",
            two:"",
            three:""
        }
    },
    mounted(){
        this.one=this.$refs.one.innerHTML;
        this.two=this.$refs.two.innerHTML.replace(/&gt;/g,">");
        this.three=this.$refs.three.innerHTML.replace(/&gt;/g,">");
    }
}
</script>