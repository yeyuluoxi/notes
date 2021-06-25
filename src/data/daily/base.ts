
export enum month {
    January= "01",
    February = "02",
    March = "03",
    April = "04",
    May = "05",
    June = "06",
    July = "07",
    August = "08",
    September = "09",
    October = "10",
    November = "11",
    December = "12"
}

export enum date {
    First = "01",
    Second = "02",
    Third = "03",
    Fourth = "04",
    Fifth = "05",
    Sixth = "06",
    Seventh = "07",
    Eighth = "08",
    Ninth = "09",
    Tenth = "10",
    Eleventh = "11",
    Twelfth = "12",
    Thirteenth = "13",
    Fourteenth = "14",
    Fifteenth = "15",
    Sixteenth = "16",
    Seventeenth = "17",
    Eighteenth = "18",
    Nineteenth = "19",
    Twentieth = "20",
    TwentyFirst = "21",
    TwentySecond = "22",
    TwentyThird = "23",
    TwentyFourth = "24",
    TwentyFifth = "25",
    TwentySixth = "26",
    TwentySeventh = "27",
    TwentyEighth = "28",
    TwentyNinth = "29",
    Thirtieth = "30",
    ThirtyFirst = "31"
}

export enum IType{
    Html = "html",
    Css = "css",
    Js = "js",
    React = "react",
    Vue = "vue",
    TypeScript = "typeScript",
    Daily = "log",
    Cmd = "cmd",
    Mysql = "mysql"
}

export interface IDaily{
    date: [ month, date ];
    type: IType;
    title?: string;
    note: string | Array<string>;
}
