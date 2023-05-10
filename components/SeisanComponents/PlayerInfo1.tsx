import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { name1Atom, player1, playerType1 } from '@/atoms/atomsForSeisan'

const PlayerInfo = () => {
  const [playerPoint1,setPlayerPoint1] = useRecoilState<playerType1[]>(player1);
  const [playerName1,setPlayerName1] = useRecoilState<string>(name1Atom);
  const [playerName,setPlayerName] = useState("");
  const [points,setPoints] = useState(0);

  const playerInfoSet = () => {
    const newInfo = {points: points}
    setPlayerPoint1([...playerPoint1,newInfo]);
    setPlayerName1(playerName);
    setPoints(0);
  }
  return (
    <Box width="45%" margin="2% auto">
        <Text textAlign="center" fontSize="20px">1人目</Text>
        <Input placeholder="名前を入力" onChange={(e)=>setPlayerName(e.target.value)}></Input>
        <Input placeholder="点数を入力" onChange={(e)=>setPoints(Number(e.target.value))}></Input>
        <Button onClick={playerInfoSet}>完了</Button>
    </Box>
    
  )
}

export default PlayerInfo