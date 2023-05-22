import Labels from '@/components/Labels'
import React, { useEffect, useState } from 'react'
import { Box, Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import LinkTabs from "../../components/LinkTabs";
import  db  from '../../firebase';
import { collection, getDocs, where, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";



const handsresult = () => {
  const [yakuData,setYakuData] = useState<string[][]>([]);
  const [errorCheck,setErrorCheck] = useState(false);

  const auth = getAuth(app);
  const user = auth.currentUser?.uid;
  useEffect(() => {
  try {
  const postData = query(collection(db,"yakuList"), where("userId","==", user));
  getDocs(postData).then((element) => {
  setYakuData(element.docs.map((doc)=> doc.data().yaku));
  setErrorCheck(false);
  })
  } catch (error) {
    console.log(error)
  }
  },[]);
  const arrayNumCount = (array:string[],value:string) => {
    if(!array
    || typeof array !== "object"
    || typeof array.length === "undefined"
    || typeof value === "undefined"){return null;}
    let count = 0;
    for(let i=0; i < array.length; i++){
      if(array[i] === value){
        count++;
      }
    }
    return count;
  }
  const yakuAgariArr = [
    {name:"立直",num:arrayNumCount(yakuData.flat(),'立直')},
    {name:"平和",num:arrayNumCount(yakuData.flat(),'平和')},
    {name:"ツモ",num:arrayNumCount(yakuData.flat(),'ツモ')},
    {name:"一発",num:arrayNumCount(yakuData.flat(),'一発')},
    {name:"断么",num:arrayNumCount(yakuData.flat(),'断么')},
    {name:"一盃口",num:arrayNumCount(yakuData.flat(),'一盃口')},
    {name:"三元牌(白、中、發)",num:arrayNumCount(yakuData.flat(),'白')! + arrayNumCount(yakuData.flat(),'中')! + arrayNumCount(yakuData.flat(),'發')!},
    {name:"風牌",num:arrayNumCount(yakuData.flat(),'自風牌')! + arrayNumCount(yakuData.flat(),'場風牌')!},
    {name:"ハイテイ",num:arrayNumCount(yakuData.flat(),'ハイテイ')},
    {name:"嶺上開花",num:arrayNumCount(yakuData.flat(),'嶺上開花')},
    {name:"ダブル立直",num:arrayNumCount(yakuData.flat(),'ダブル立直')},
    {name:"三色同順",num:arrayNumCount(yakuData.flat(),'三色同順')! + arrayNumCount(yakuData.flat(),'三色同順(鳴き)')!},
    {name:"三色同刻",num:arrayNumCount(yakuData.flat(),'三色同刻')},
    {name:"三暗刻",num:arrayNumCount(yakuData.flat(),'三暗刻')},
    {name:"一気通貫",num:arrayNumCount(yakuData.flat(),'一気通貫')! + arrayNumCount(yakuData.flat(),'一気通貫(鳴き)')!},
    {name:"七対子",num:arrayNumCount(yakuData.flat(),'七対子')},
    {name:"トイトイ",num:arrayNumCount(yakuData.flat(),'トイトイ')},
    {name:"チャンタ",num:arrayNumCount(yakuData.flat(),'チャンタ')! + arrayNumCount(yakuData.flat(),'チャンタ')!},
    {name:"三槓子",num:arrayNumCount(yakuData.flat(),'三槓子')},
    {name:"小三元",num:arrayNumCount(yakuData.flat(),'小三元')},
    {name:"混老頭",num:arrayNumCount(yakuData.flat(),'混老頭')},
    {name:"混一色",num:arrayNumCount(yakuData.flat(),'混一色')! + arrayNumCount(yakuData.flat(),'混一色(鳴き)')!},
    {name:"ジュンチャン",num:arrayNumCount(yakuData.flat(),'ジュンチャン')! + arrayNumCount(yakuData.flat(),'ジュンチャン(鳴き)')!},
    {name:"二盃口",num:arrayNumCount(yakuData.flat(),'二盃口')},
    {name:"チンイツ",num:arrayNumCount(yakuData.flat(),'チンイツ')! + arrayNumCount(yakuData.flat(),'チンイツ(鳴き)')!}
  ];
  return (
    <>
    <Labels />
    <LinkTabs />
    {errorCheck ? 
    <Box>ログインしてください</Box>
        :
    <Box margin="0 10%">
    <Box>
    </Box>
    <TableContainer width="600px" margin="0 auto">
          <Table variant="simple">
            <TableCaption>アガリ役履歴</TableCaption>
            <Thead>
              <Tr>
                <Th textAlign="center">役</Th>
                <Th>回数</Th>
                <Th>全体における割合</Th>
              </Tr>
            </Thead>
            <Tbody>
              {yakuAgariArr.map((yaku)=> (
                <Tr key={yaku.name}>
                  <Td fontSize="20px" textAlign="center">{yaku.name}</Td>
                  <Td fontSize="20px">{yaku.num}回</Td>
                  <Td fontSize="20px">{yaku.num ? Math.floor( yaku.num! / yakuData.flat().length * 100 * Math.pow(10,1) ) / Math.pow(10,1) : 0}%</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        </Box> 
        }

    </>
  )
}

export default handsresult