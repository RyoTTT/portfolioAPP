import { player1, player2, player3, player4,playerType1,playerType2,playerType3,playerType4 } from '@/atoms/atomsForSeisan'
import Labels from '@/components/Labels'
import LinkTabs from '@/components/LinkTabs'
import PlayerInfo1 from '@/components/SeisanComponents/PlayerInfo1'
import PlayerInfo2 from '@/components/SeisanComponents/PlayerInfo2'
import PlayerInfo3 from '@/components/SeisanComponents/PlayerInfo3'
import PlayerInfo4 from '@/components/SeisanComponents/PlayerInfo4'
import { Box, Button, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

type uma = {
    Top:number,
    second:number,
}

const Seisan = () => {
    const [player1Data,setPlayer1Data] = useRecoilState<playerType1>(player1);
    const [player2Data,setPlayer2Data] = useRecoilState<playerType2>(player2);
    const [player3Data,setPlayer3Data] = useRecoilState<playerType3>(player3);
    const [player4Data,setPlayer4Data] = useRecoilState<playerType4>(player4);
    const [playersData,setPlayersData] = useState<any[]>([]);
    const umaDefault = {Top:10,second:5}
    const [uma,setUma]= useState<uma>(umaDefault);
    const [total1,setTotal1] = useState<number>(0);
    const [total2,setTotal2] = useState<number>(0);
    const [total3,setTotal3] = useState<number>(0);
    const [total4,setTotal4] = useState<number>(0);
    const [rate,setRate] = useState(0);

    const graphSet = () => {
        const x = [player1Data,player2Data,player3Data,player4Data];
        x.sort((a,b) => (a.points > b.points ? -1 : 1));
        const placement2Seisan = ((x[1].points - 30000) / 1000) + uma.second;
        const placement2 = {id:x[1].id, name:x[1].name,points:x[1].points,seisan:placement2Seisan}
        x.splice(1,1,placement2);
        const placement3Seisan = ((x[2].points - 30000) / 1000) - uma.second;
        const placement3 = {id:x[2].id, name:x[2].name,points:x[2].points,seisan:placement3Seisan}
        x.splice(2,1,placement3);
        const placement4Seisan = ((x[3].points - 30000) / 1000) - uma.Top;
        const placement4 = {id:x[3].id, name:x[3].name,points:x[3].points,seisan:placement4Seisan}
        x.splice(3,1,placement4);
        const placement1Seisan = -(placement2Seisan+placement3Seisan+placement4Seisan);
        const placement1 = {id:x[0].id, name:x[0].name,points:x[0].points,seisan:placement1Seisan}
        x.splice(0,1,placement1);
        x.sort((a,b) => (a.points > b.points ? -1 : 1));
        setPlayersData([...playersData,x]);
    }
const calcTotal = () => {
        playersData.map((element) => {
            element.map((player:any) => {
                switch(player.id) {
                    case 1:
                        const totala = total1 + player.seisan;
                        setTotal1(totala);
                        break;
                    case 2:
                        const totalb = total2 + player.seisan;
                        setTotal2(totalb);
                        break;
                    case 3:
                        const totalc = total3 + player.seisan;
                        setTotal3(totalc);
                        break;
                    case 4:
                        const totald = total4 + player.seisan;
                        setTotal4(totald);
                        break;
                }
            })
        })
}
const umaChange = (e:any) => {
    const selectedOption = Number(e.target.value);
    if (selectedOption === 1) {
        const selectedUma = {Top:10,second:5}
        setUma(selectedUma);
    } else if (selectedOption === 2) {
        const selectedUma = {Top:20,second:10}
        setUma(selectedUma);      
    } else if (selectedOption === 3) {
        const selectedUma = {Top:30,second:10}
        setUma(selectedUma);
    } else if (selectedOption === 4) {
        const selectedUma = {Top:30,second:20}
        setUma(selectedUma);        
    }
}

return (
    <>
    <Labels />
    <LinkTabs />
    <Box width="400px" margin="1% auto">
        <Text>ウマを選択</Text>
    <Select onChange={(e)=>umaChange(e)}>
        <option value="1">5-10</option>
        <option value="2">10-20</option>
        <option value="3">10-30</option>
        <option value="4">20-30</option>
    </Select>
        <Text>レートを入力</Text>
        <Input placeholder='レート' onChange={(e) => setRate(Number(e.target.value))}></Input> 
        <Text fontSize="18px" marginTop="1%">25000点、30000点返しです</Text>
    </Box>
    <Box border="solid 3px red" width="1000px"margin="0 auto">
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
    <Box width="600px" justifyContent="center" margin="0 auto" border="ridge 2mm blue" >
        <Box fontSize="18px" display="flex" justifyContent="center" textAlign="center" flexWrap="wrap" borderBottom=" solid 2px">
            <Text margin="1% 3%" flexGrow="1">1位</Text>
            <Text margin="1% 3%" flexGrow="1">2位</Text>
            <Text margin="1% 3%" flexGrow="1">3位</Text>
            <Text margin="1% 3%" flexGrow="1">4位</Text>
        </Box>
        {playersData.map((element)=>(
        <Box display="flex" flexWrap="wrap">
            <Box key={element[0].id} fontSize="18px" margin="0.5% 2%" flexGrow="1" textAlign="center">
            <Text borderBottom="dashed 0.5px">{element[0].name}</Text>
            <Text borderBottom="dashed 0.5px">{element[0].points}</Text>
            <Text  borderBottom="dashed 0.5px">{element[0].seisan}</Text>
            </Box>
            <Box key={element[1].id}  fontSize="18px"margin="0.5% 2%" flexGrow="1" textAlign="center">
            <Text borderBottom="dashed 0.5px">{element[1].name}</Text>
            <Text borderBottom="dashed 0.5px">{element[1].points}</Text>
            <Text borderBottom="dashed 0.5px" >{element[1].seisan}</Text>
            </Box>
            <Box key={element[2].id} fontSize="18px"margin="0.5% 2%" flexGrow="1" textAlign="center">
            <Text borderBottom="dashed 0.5px">{element[2].name}</Text>
            <Text borderBottom="dashed 0.5px">{element[2].points}</Text>
            <Text borderBottom="dashed 0.5px">{element[2].seisan}</Text>
            </Box>
            <Box key={element[3].id}fontSize="18px" margin="0.5% 2%" flexGrow="1" textAlign="center">
            <Text borderBottom="dashed 0.5px">{element[3].name}</Text>
            <Text borderBottom="dashed 0.5px">{element[3].points}</Text>
            <Text borderBottom="dashed 0.5px">{element[3].seisan}</Text>
            </Box>
            </Box>
        ))}
        </Box>
        <Box width="1000px" margin="2% auto" textAlign="center">
        <Button onClick={calcTotal} >集計する</Button>
        </Box>
        <Box display="flex" width="1000px" justifyContent="center" margin="0 auto" fontSize="20px" fontWeight="800">
            <Text margin="2%">{player1Data.name}:{total1}({total1 * rate}円)</Text>
            <Text margin="2%">{player2Data.name}:{total2}({total2 * rate}円)</Text>
            <Text margin="2%">{player3Data.name}:{total3}({total3 * rate}円)</Text>
            <Text margin="2%">{player4Data.name}:{total4}({total4 * rate}円)</Text>
        </Box>

    </>
)
}
export default Seisan