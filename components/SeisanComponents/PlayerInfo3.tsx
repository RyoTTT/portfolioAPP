import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { player3, playerType3 } from '@/atoms/atomsForSeisan'

const PlayerInfo = () => {
  const [player3Data,setPlayer3Data] = useRecoilState<playerType3>(player3);
  const [playerName,setPlayerName] = useState("");
  const [points,setPoints] = useState(0);

  const playerInfoSet = () => {
    const newData = {id:3,name:playerName,points:points,seisan:null}
    setPlayer3Data(newData);
//    setPoints(0);
  }
  return (
    <Box width="45%" margin="2% auto">
        <Text textAlign="center" fontSize="20px">3人目</Text>
        <Input placeholder="名前を入力" onChange={(e)=>setPlayerName(e.target.value)}></Input>
        <Input placeholder="点数を入力" onChange={(e)=>setPoints(Number(e.target.value))}></Input>
        <Button onClick={playerInfoSet}>完了</Button>
    </Box>
    
  )
}

export default PlayerInfo