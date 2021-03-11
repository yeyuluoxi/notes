import {IDaily, IType} from "@/data/daily/base";

interface IOption{
    type?: IType;
    date?: string;
}
interface UseGetDaily{
    ( daily: Array<IDaily>, option?: IOption ): Array<IDaily>
}
const getDaily:UseGetDaily = ( daily, option ) => {
    if( !option ) option = { type: IType.Daily };

    if( option.date ){
        const date = option.date;
        return daily.filter( elem => elem.date.join("-") === date );
    }

    const type = option.type;

    return daily.filter( elem => elem.type === type );
}

export default getDaily;
