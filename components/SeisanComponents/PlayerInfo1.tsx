import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { player, playerType } from '@/atoms/atomsForSeisan'

const PlayerInfo = () => {
  const [player1,setPlayer1] = useRecoilState<playerType[]>(player);
  const [playerName,setPlayerName] = useState("");
  const [points,setPoints] = useState(0);

  const playerInfoSet = () => {
    const newInfo = {name: playerName,points: points}
    setPlayer1([...player1,newInfo]);
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

export default PlayerInfo