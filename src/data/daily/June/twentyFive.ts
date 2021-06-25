import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.June, date.TwentyFifth],
  type: IType.Js,
  title: "echarts",
  note: `
type IGetChartImage = (
  chart: HTMLCanvasElement
) => void;

const getChartImage: IGetChartImage = (
  chart,
) => {
  //生成新canvas
  const baseChart: HTMLCanvasElement = document.createElement("canvas");
  //获取画布
  const baseCanvas = baseChart.getContext("2d");
  
  //原canvas宽高
  console.log(chart.width, chart.height, "WH");
  console.log(chart.style.width, chart.style.height, "Style");
  const height = parseInt(chart.style.height);
  const width = parseInt(chart.style.width);

  if(baseCanvas){
    //设置新画布宽高
    baseChart.width = width + 60;
    baseChart.height = height + 60;
    //设置背景色
    baseCanvas.fillStyle = "#0045d1";
    baseCanvas.fillRect(0,0, baseChart.width, baseChart.height);

    // 将echarts复制到新画布上(原画布, 初始x, 初始y, 宽度, 长度)
    baseCanvas.drawImage(chart, 30, 30 , width, height);
    //在新画布上操作,添加标题,图例之类
    baseCanvas.fillStyle = "#ffffff";
    baseCanvas.font = "24px 楷体";  //不设置字体不生效
    baseCanvas.fillText("title", width / 2 - title.length * 12 + 30, 40);
    baseCanvas.font = "20px 楷体";
    baseCanvas.fillText("unit", 40, 110);

    //生成图片并下载
    // downChart(baseChart, name);
  }
}
    `,
  pre: true
}

const second: IDaily = {
  date: [month.June, date.TwentyFifth],
  type: IType.Js,
  title: "echarts",
  note: `
type IDownChart = (chart: HTMLCanvasElement, name?: string) => void;
const downChart: IDownChart = (chart, name) => {
  name = name || "echarts";
  //生成图片并下载
  const image = chart.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = name;// 设置下载的文件名，默认'echarts'
  link.href = image;
  document.body.appendChild(link);
  link.click();
  link.remove(); // 下载之后把创建的元素删除
}
    `,
  pre: true
}

const third: IDaily = {
  date: [month.June, date.TwentyFifth],
  type: IType.Js,
  title: "时间处理",
  note: [
`
const list = {
  yyyy: "getFullYear",
  mm: "getMonth",
  dd: "getDate",
  hh: "getHours",
  mi: "getMinutes",
  ss: "getSeconds"
};
type ITime = (date?: Date | number | null, format?: string) => string;`,
`
const dealTime: ITime = (date, format) => {
  //设置默认初始值
  if (date) {
    date = typeof date === "number" ? new Date(date) : date;
  } else {
    date = new Date();
  }
  format = format || "yyyy-mm-dd";  //format yyyy mm dd hh mi ss
  Object.keys(list).forEach((elem) => {
    let reg = new RegExp(elem);
    if (reg.test(<string>format)) { //判断是否需要
      let time = (((date as Date)[list[elem as keyof typeof list] as keyof typeof date]) as Function)();  // 执行对应方法获取时间
      if (elem === "mm") time++;
      format = (<string>format).replace(reg, digitTwo(time));  //在对应位置替换
    }
  })
  return format;
}
`
  ],
  pre: true
}

const JuneTwentyFive: Array<IDaily> = [first, second, third];

export default JuneTwentyFive;