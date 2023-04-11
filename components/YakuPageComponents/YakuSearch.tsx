import React, { useState } from 'react'
import { Box, Heading, Text, Input, Select,Button } from '@chakra-ui/react';
import { YakuObject, YakuSearchList } from './YakuForSearch';

const YakuSearch = () => {
  const [searchWords, setsearchWords] = useState<string>("");
  const [situation, setSituation]  = useState<number | null>(4);
  const [selectedYaku , setSelectedYaku] = useState<YakuObject[]>([]);

  const getInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setsearchWords(e.target.value);
  }
//名前だけで検索したい時シチュエーションが邪魔で反映されない、シチュエーションで絞り込みをかけたくない時はどうすればいいか
  const yakusearch = () =>{
    const wordSelectedYakuSearchList = YakuSearchList.filter((yaku)=>(
      yaku.name.match(searchWords)
    ))
   if (situation === 4) {
    setSelectedYaku(wordSelectedYakuSearchList);
 } else {
    const situationSelectedYakuSearchList = wordSelectedYakuSearchList.filter((yaku)=>(
      yaku.situation === situation
    ))
    setSelectedYaku(situationSelectedYakuSearchList);
 }
  }
  return (
    <>
    <Box width="1000px" maxWidth="100%" margin="0 auto">
      <Heading color="red"  fontWeight="bold" textAlign="center">役を検索</Heading>
      <Box width="500px" maxWidth="100%" margin="5% auto">
        <Box margin="5%">
        <Input placeholder='名前を入力(ひらがなで入力)' type="text" pattern='[¥u3041-¥u3096]*' onChange={(e)=>getInput(e)} margin="3% auto" ></Input>
        <Select placeholder='鳴きの可否'  onChange={(e)=>setSituation(Number(e.target.value))}>
          <option value="1">鳴きOK</option>
          <option value="2">喰い下がりアリ</option>
          <option value="0">鳴きNG</option>
          <option value="4">鳴き条件をリセットして検索</option>
        </Select>
        <Button float="right" size="md" margin="2% auto" bg="blue.100" fontWeight="bold" onClick={yakusearch}>検索</Button>
        </Box>
      </Box>
        {selectedYaku.map((Yaku)=>(
          <Box key={Yaku.name} width="1000px" maxWidth="100%" margin="8% auto">{Yaku.HTML}</Box>
        ))}
    </Box>
    </>
  )
}

export default YakuSearch