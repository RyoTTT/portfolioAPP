import { Input } from '@chakra-ui/react';
import React from 'react';
import { Chankan } from './YakuList/YakuBox1/Chankan';
import { Haitei } from './YakuList/YakuBox1/Haitei';
import { Ipeko } from './YakuList/YakuBox1/Ipeko';
import { Ippatsu } from './YakuList/YakuBox1/Ippatsu';
import { Pinhu } from './YakuList/YakuBox1/Pinhu';
import { Reach } from './YakuList/YakuBox1/Reach';
import { Rinshan } from './YakuList/YakuBox1/Rinshan';
import { Tanyao } from './YakuList/YakuBox1/Tanyao';
import { Tsumo } from './YakuList/YakuBox1/Tsumo';
import { Yakuhai } from './YakuList/YakuBox1/Yakuhai';
import { Chanta } from './YakuList/YakuBox2/Chanta';
import { Chitoitsu } from './YakuList/YakuBox2/Chitoitsu';
import { DoubleReach } from './YakuList/YakuBox2/DoubleReach';
import { Honroutou } from './YakuList/YakuBox2/Honrourou';
import { Itsu } from './YakuList/YakuBox2/Itsu';
import { Sananko } from './YakuList/YakuBox2/Sananko';
import { Sankantsu } from './YakuList/YakuBox2/Sankantsu';
import { SanshokuD } from './YakuList/YakuBox2/SanshokuD';
import { SanshokuK } from './YakuList/YakuBox2/SanshokuK';
import { Shosangen } from './YakuList/YakuBox2/Shosangen';
import { ToiToi } from './YakuList/YakuBox2/Toitoi';
import { Honitsu } from './YakuList/YakuBox3/Honitsu';
import { Junchan } from './YakuList/YakuBox3/Junchan';
import { Ryanpeko } from './YakuList/YakuBox3/Ryanpeko';
import { Chinitsu } from './YakuList/YakuBox6/Chinitsu';
import { Chinroutou } from './YakuList/YakuManBox/Chinroutou';
import { Churen } from './YakuList/YakuManBox/Churen';
import { Daisangen } from './YakuList/YakuManBox/Daisangen';
import { Daisushi } from './YakuList/YakuManBox/Daisushi';
import { Kokushi } from './YakuList/YakuManBox/Kokushi';
import { Ryuiso } from './YakuList/YakuManBox/Ryuiso';
import { Shosushi } from './YakuList/YakuManBox/Shosushi';
import { Suanko } from './YakuList/YakuManBox/Suanko';
import { Sukantsu } from './YakuList/YakuManBox/Sukantsu';
import { Tenho } from './YakuList/YakuManBox/Tenho';
import { Tsuiso } from './YakuList/YakuManBox/Tsuiso';



 export type YakuObject = {
    name:string;
    situation?:number,
    HTML:any,
}
 export const YakuSearchList:YakuObject[] = [
    {name:"りーち",situation:0,HTML:<Reach />},
    {name:"いっぱつ",situation:0,HTML:<Ippatsu />},
    {name:"つも",situation:0,HTML:<Tsumo/>},
    {name:"やくはい",situation:1,HTML:<Yakuhai />},
    {name:"たんやお",situation:1,HTML:<Tanyao />},
    {name:"ぴんふ",situation:0,HTML:<Pinhu />},
    {name:"いーぺーこー",situation:0,HTML:<Ipeko/>},
    {name:"はいてい",situation:1,HTML:<Haitei/>},
    {name:"ほうてい",situation:1,HTML:<Haitei />},
    {name:"りんしゃんかいほう",situation:1,HTML:<Rinshan/>},
    {name:"ちゃんかん",situation:1,HTML:<Chankan />},
    {name:"だぶるりーち",situation:0,HTML:<DoubleReach/>},
    {name:"さんしょくどうじゅん",situation:2,HTML:<SanshokuD/>},
    {name:"さんしょくどうこう",situation:1,HTML:<SanshokuK/>},
    {name:"さんあんこう",situation:1,HTML:<Sananko/>},
    {name:"いっきつうかん",situation:2,HTML:<Itsu/>},
    {name:"ちーといつ",situation:0,HTML:<Chitoitsu/>},
    {name:"といとい",situation:1,HTML:<ToiToi/>},
    {name:"ちゃんた",situation:2,HTML:<Chanta/>},
    {name:"さんかんつ",situation:1,HTML:<Sankantsu/>},
    {name:"しょうさんげん",situation:1,HTML:<Shosangen/>},
    {name:"ほんろうとう",situation:1,HTML:<Honroutou/>},
    {name:"りゃんぺーこー",situation:0,HTML:<Ryanpeko/>},
    {name:"ほんいつ",situation:2,HTML:<Honitsu/>},
    {name:"じゅんちゃん",situation:2,HTML:<Junchan/>},
    {name:"ちんいつ",situation:2,HTML:<Chinitsu/>},
    {name:"すーあんこう",situation:0,HTML:<Suanko/>},
    {name:"だいさんげん",situation:1,HTML:<Daisangen/>},
    {name:"こくしむそう",situation:0,HTML:<Kokushi/>},
    {name:"りゅーいーそー",situation:1,HTML:<Ryuiso/>},
    {name:"つーいーそー",situation:1,HTML:<Tsuiso/>},
    {name:"ちんろうとう",situation:1,HTML:<Chinroutou/>},
    {name:"すーかんつ",situation:1,HTML:<Sukantsu/>},
    {name:"しょうすーしー",situation:1,HTML:<Shosushi/>},
    {name:"だいすーしー",situation:1,HTML:<Daisushi/>},
    {name:"ちゅうれんぽうとう",situation:0,HTML:<Churen/>},
    {name:"ちーほう",situation:0,HTML:<Tenho/>},
    {name:"ちーほー",situation:0,HTML:<Tenho/>},
    {name:"てんほー",situation:0,HTML:<Tenho/>},
    {name:"てんほう",situation:0,HTML:<Tenho/>},
    {name:"てすと",situation:0,HTML:<Input placeholder='てすと'></Input>},
];