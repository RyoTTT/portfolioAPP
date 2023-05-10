import { name1Atom, name2Atom, name3Atom, name4Atom, player1, player2, player3, player4 } from '@/atoms/atomsForSeisan'
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
    const playerPoint1 = useRecoilValue(player1);
    const playerName1 = useRecoilValue(name1Atom);
    const playerPoint2 = useRecoilValue(player2);
    const playerName2 = useRecoilValue(name2Atom);
    const playerPoint3 = useRecoilValue(player3);
    const playerName3 = useRecoilValue(name3Atom);
    const playerPoint4 = useRecoilValue(player4);
    const playerName4 = useRecoilValue(name4Atom);
    const [points,setPoints] = useState<any[]>([]);

    const graphSet = () => {
    playerPoint1.map((point1)=>{
        playerPoint2.map((point2) => {
            playerPoint3.map((point3) => {
                playerPoint4.map((point4) => {
                    const pointsObject = {point1:point1, point2:point2, point3:point3, point4:point4};
                    setPoints([...points,pointsObject])
//TODO sortのように並び替えずに大小比較して処理したい
                    const pointsList = [point1.points,point2.points,point3.points,point4.points];
                    const pointsListSort:any = pointsList.sort((a,b) => (a > b ? -1 : 1));
                    const num2 = ((pointsListSort[1] - 30000) / 1000 ) + 5;
                    const num3 = ((pointsListSort[2] - 30000) / 1000 ) - 5;
                    const num4 = ((pointsListSort[3] - 30000) / 1000 ) - 10;
                    const num1 = -(num2 + num3 + num4);
                    console.log(num1,num2,num3,num4);
                })
            })
        })
    })
    }

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
    <TableContainer>
        <Table>
            <Thead>
                <Tr>
                    <Th>{playerName1}</Th>
                    <Th>{playerName2}</Th>
                    <Th>{playerName3}</Th>
                    <Th>{playerName4}</Th>
                </Tr>
            </Thead>
            <Tbody>
                {points.map((point) =>(
                    
                    <Tr>
                        <Td>{point.point1.points}</Td>
                        <Td>{point.point2.points}</Td>
                        <Td>{point.point3.points}</Td>
                        <Td>{point.point4.points}</Td>
                    </Tr>
                    
                ))}
            </Tbody>
        </Table>
    </TableContainer>
    </>
  )
}

export default Seisan