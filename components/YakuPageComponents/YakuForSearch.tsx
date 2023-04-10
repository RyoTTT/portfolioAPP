import React from 'react';
import { Ippatsu } from './YakuList/YakuBox1/Ippatsu';
import { Reach } from './YakuList/YakuBox1/Reach';
import { Tsumo } from './YakuList/YakuBox1/Tsumo';


const YakuForSearch = () => {
type YakuObject = {
    name:string;
    situation?:number,
    HTML:any,
}
const YakuSearchList:YakuObject[] = [
    {name:"ri-chi",situation:0,HTML:<Reach />},
    {name:"ippatu",situation:0,HTML:<Ippatsu />},
    {name:"tumo",situation:0,HTML:<Tsumo />},

];

}

export default YakuForSearch;