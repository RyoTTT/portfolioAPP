import { player1, player2, player3, player4 } from '@/atoms/atomsForSeisan'
import Labels from '@/components/Labels'
import PlayerInfo1 from '@/components/SeisanComponents/PlayerInfo1'
import PlayerInfo2 from '@/components/SeisanComponents/PlayerInfo2'
import PlayerInfo3 from '@/components/SeisanComponents/PlayerInfo3'
import PlayerInfo4 from '@/components/SeisanComponents/PlayerInfo4'
import { Box, Button, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const Seisan = () => {
    const player1Data = useRecoilValue(player1);
    const player2Data = useRecoilValue(player2);
    const player3Data = useRecoilValue(player3);
    const player4Data = useRecoilValue(player4);
    const [playersData,setPlayerData] = useState([])
    const [points,setPoints] = useState<any[]>([]);
    const [pointsForPreview,setPointsForPreview] = useState<number[]>([]);

    const graphSet = () => {
        const x = [player1Data,player2Data,player3Data,player4Data];
        x.sort((a,b) => (a.points > b.points ? -1 : 1))
    }
//TODO sortのように並び替えずに大小比較して処理したい
//                    [{name:あ,point:1234,seisanpoint:null},{name:あ,point:1234},{name:あ,point:1234},{name:あ,point:1234}]
//                    const pointsListSort:any = pointsList.sort((a,b) => (a > b ? -1 : 1));
//                    const num2 = ((pointsListSort[1] - 30000) / 1000 ) + 5;
//                    const num3 = ((pointsListSort[2] - 30000) / 1000 ) - 5;
//                    const num4 = ((pointsListSort[3] - 30000) / 1000 ) - 10;
//                    const num1 = -(num2 + num3 + num4);
//                    console.log(num1,num2,num3,num4);
return (
    <>
    <Labels />
    <Box width="400px" margin="1% auto">
        <Text>ウマを選択</Text>
    <Select>
        <option>5-10</option>
        <option>10-20</option>
        <option>10-30</option>
        <option>20-30</option>
    </Select>
        <Text fontSize="18px" marginTop="1%">25000点、30000点返しです</Text>
    </Box>
    <Box border="solid 3px red" width="1000px" margin="0 auto">
    <Box width="1000px" display="flex">
    <PlayerInfo1 />
    <PlayerInfo2 />
    </Box>
    <Box width="1000px" display="flex">
    <PlayerInfo3 />
    <PlayerInfo4 />
    </Box>
    </Box>
    <Box width="1000px" textAlign="center" margin="2% auto">
    <Button onClick={graphSet}>セットする</Button>
    </Box>

    <Box>
        {}
    </Box>
    </>
)
}

export default Seisan