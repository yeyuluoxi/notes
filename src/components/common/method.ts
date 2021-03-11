
interface Ran{
    (a?:number,b?:number): number
}
const mRandom:Ran = (a, b) => {
    if(a === undefined) a = 1;
    if(b === undefined) b = 0;
    return Math.floor(Math.random()*a+b);
}

export interface IText {
    text: string;
    value: string;
    status: boolean;
}

export {
    mRandom
}
