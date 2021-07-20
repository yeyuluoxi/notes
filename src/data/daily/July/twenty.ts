import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.July, date.Twentieth],
  type: IType.React,
  title: "antd中文配置",
  note: [`
在原有的文档配置基础上加上下面三行代码
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
  `],
  pre: true
}

const JulyTwenty: Array<IDaily> = [first];

export default JulyTwenty;