import {date, IDaily, IType, month} from "@/data/daily/base";

const Exp: Array<IDaily> = [
  {
    date: [month.August, date.First],
    type: IType.Js,
    title: "var let const",
    note: `
var存在变量提升,可以在声明之前调用,为undefined,let和const不存在,须在声明后使用,否则报错~
let和const有块级作用域,var没有~
var允许重复声明变量,let和const在同一作用域不允许重复声明变量~
var和let声明变量后可以修改,const声明一个只读的常量,不可修改~
    `,
    pre: false
  },

  {
    date: [month.August, date.Second],
    type: IType.Js,
    title: "es6 数组方法",
    note: `
var存在变量提升,可以在声明之前调用,为undefined,let和const不存在,须在声明后使用,否则报错~
let和const有块级作用域,var没有~
var允许重复声明变量,let和const在同一作用域不允许重复声明变量~
var和let声明变量后可以修改,const声明一个只读的常量,不可修改~
    `,
    pre: false
  }
];

export default Exp;