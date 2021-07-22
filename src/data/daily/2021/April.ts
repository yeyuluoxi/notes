import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.April, date.Tenth],
  type: IType.Cmd,
  title: "查进程",
  note: `netstat -ano|findstr "端口号"`
}

const second: IDaily = {
  date: [month.April, date.Tenth],
  type: IType.Js,
  title: "正则",
  note: `\\w——数字、大小写字母、_([0-9a-zA-Z_])~
        \\s——空格、回车~
        \\d——数字~
        {}——{a}:a个字符;{a,}:至少a个字符;{a,b}:至少a个，至多b个;~
        ?——至多一个 ~
        *——可有可无，无限制~
        +——至少一个~
        ^——开头~
        $——结尾~
        \\b——边界"`
}
const third: IDaily = {
  date: [month.April, date.Tenth],
  type: IType.Js,
  title: "正则",
  note: `reg = /正则/ig reg = new RegExp("正则",ig)~
        while(arr = reg.exec(str)){内容(arr[0])和位置(arr.index)}~
        .match()——可用正则，+g返回所有查找内容的数组，否则返回["0":"内容","index":"下标"],没有返回null~
        变量 = str.replace(reg,(key,index) => {key为获得的关键词,index开始位置}) 正则有g则回调循环执行~
        切割 str.split(reg)`
}


const April: Array<IDaily> = [
  first,
  second,
  third
];

export default April;