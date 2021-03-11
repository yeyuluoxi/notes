import { date, IDaily, IType, month } from "@/data/daily/base";

const first: IDaily = {
    date: [ month.March, date.Eleventh ],
    type: IType.Js,
    title: "数组对象方法",
    note: `filter,reduce forEach some,every均会跳过数组空位~
        map跳过空位但会保留元素位置~
        遍历空位数组方法:Array.from(new Array(num), callback ); callback类似map~
        Object.keys();返回包含对象属性的数组`
}

const second: IDaily = {
    date: [ month.March, date.Eleventh ],
    type: IType.Js,
    title: "==时Boolean取值",
    note: `true:~
        undefined == null | false == 0 | "" == 0 | "" == false~
        false:~
        undefined == false | undefined == 0 | null == 0 | "" == undefined | "" == null | false == null~
        {} == {} | [] == []~
        NaN与任何值`
}

const MarchEleventh: Array<IDaily> = [ first, second ];

export default MarchEleventh;
