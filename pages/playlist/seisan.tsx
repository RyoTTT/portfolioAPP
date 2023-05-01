import { player, playerType } from '@/atoms/atomsForSeisan'
import Labels from '@/components/Labels'
import PlayerInfo1 from '@/components/SeisanComponents/PlayerInfo1'
import { Box, Select } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

const seisan = () => {
    const playerName1 = useRecoilValue(player);
  return (
    <>
    <Labels />
    <Box>
        ルールを選択
    <Select>
        <option>5-10</option>
        <option>10-20</option>
        <option>10-30</option>
        <option>20-30</option>
    </Select>
    </Box>
    <PlayerInfo1 />
    <Box>
    </Box>
    </>
  )
}

export default seisan