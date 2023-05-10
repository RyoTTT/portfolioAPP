import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { name2Atom, player2, playerType2 } from '@/atoms/atomsForSeisan'

const PlayerInfo2 = () => {
  const [playerPoint2,setPlayerPoint2] = useRecoilState<playerType2[]>(player2);
  const [playerName2,setPlayerName2] = useRecoilState<string>(name2Atom);
  const [playerName,setPlayerName] = useState("");
  const [points,setPoints] = useState(0);

  const playerInfoSet = () => {
    const newInfo = {points: points}
    setPlayerPoint2([...playerPoint2,newInfo]);
    setPlayerName2(playerName);
    setPoints(0);
  }
  return (
    
    <Box width="45%" margin="2% auto">
        <Text textAlign="center" fontSize="20px">2人目</Text>
        <Input placeholder="名前を入力" onChange={(e)=>setPlayerName(e.target.value)}></Input>
        <Input placeholder="点数を入力" onChange={(e)=>setPoints(Number(e.target.value))}></Input>
        <Button onClick={playerInfoSet}>完了</Button>
    </Box>
    
  )
}

export default PlayerInfo2