import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { name3Atom, player3, playerType3 } from '@/atoms/atomsForSeisan'

const PlayerInfo3 = () => {
  const [playerPoint3,setPlayerPoint3] = useRecoilState<playerType3[]>(player3);
  const [playerName3,setPlayerName3] = useRecoilState<string>(name3Atom);
  const [playerName,setPlayerName] = useState("");
  const [points,setPoints] = useState(0);

  const playerInfoSet = () => {
    const newInfo = {points: points}
    setPlayerPoint3([...playerPoint3,newInfo]);
    setPlayerName3(playerName);
    setPoints(0);
  }
  return (
    <>
    <Box width="45%" margin="2% auto">
        <Text textAlign="center" fontSize="20px">3人目</Text>
        <Input placeholder="名前を入力" onChange={(e)=>setPlayerName(e.target.value)}></Input>
        <Input placeholder="点数を入力" onChange={(e)=>setPoints(Number(e.target.value))}></Input>
        <Button onClick={playerInfoSet}>完了</Button>
        
    </Box>
    </>
  )
}

export default PlayerInfo3