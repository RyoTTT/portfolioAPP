import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { name2Atom, player2, playerType } from '@/atoms/atomsForSeisan'

const PlayerInfo2 = () => {
  const [playerPoint2,setPlayerPoint2] = useRecoilState<playerType[]>(player2);
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
    <>
    <Box>
        <Input placeholder="名前を入力" onChange={(e)=>setPlayerName(e.target.value)}></Input>
        <Input placeholder="点数を入力" onChange={(e)=>setPoints(Number(e.target.value))}></Input>
        <Button onClick={playerInfoSet}>完了</Button>
        
    </Box>
    </>
  )
}

export default PlayerInfo2