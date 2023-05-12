import { player1, player2, player3, player4,playerType1,playerType2,playerType3,playerType4 } from '@/atoms/atomsForSeisan'
import Labels from '@/components/Labels'
import PlayerInfo1 from '@/components/SeisanComponents/PlayerInfo1'
import PlayerInfo2 from '@/components/SeisanComponents/PlayerInfo2'
import PlayerInfo3 from '@/components/SeisanComponents/PlayerInfo3'
import PlayerInfo4 from '@/components/SeisanComponents/PlayerInfo4'
import { Box, Button, Select, Text } from '@chakra-ui/react'
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
        setPlayersData(x);
    }
//            if (index === 1) {
//                const y = ((element.points- 30000) / 1000 ) + 5;
//                const data = {id:element.id,name: element.name,points: element.points,seisan:y};
//                
//                setx([data,...x]);
//            } else if (index === 2) {
//                const y = ((element.points- 30000) / 1000 ) - 5;
//                const data = {name: element.name,points: element.points,seisan:y};
//                setx([data,...x]);            
//            } else if (index === 3) {
//                const y = ((element.points- 30000) / 1000 ) - 10;
//                const data = {name: element.name,points: element.points,seisan:y};
//                setx([data,...x]);
//            } else if (index === 0) {
//                const y = ((element.points- 30000) / 1000 ) + 10;
//                const data = {name: element.name,points: element.points,seisan:y};
//                setx([data,...x]);
//            }
//TODO sortのように並び替えずに大小比較して処理したい
//                    [{name:あ,point:1234,seisanpoint:null},{name:あ,point:1234},{name:あ,point:1234},{name:あ,point:1234}]
//                    const pointsListSort:any = pointsList.sort((a,b) => (a > b ? -1 : 1));
//                    const num2 = ((pointsListSort[1] - 30000) / 1000 ) + 5;
//                    const num3 = ((pointsListSort[2] - 30000) / 1000 ) - 5;
//                    const num4 = ((pointsListSort[3] - 30000) / 1000 ) - 10;
//                    const num1 = -(num2 + num3 + num4);
//                    console.log(num1,num2,num3,num4);
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
    <Box width="400px" margin="1% auto">
        <Text>ウマを選択</Text>
    <Select onChange={(e)=>umaChange(e)}>
        <option value="1">5-10</option>
        <option value="2">10-20</option>
        <option value="3">10-30</option>
        <option value="4">20-30</option>
    </Select>
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
        {playersData.map((element)=>(
            <Box key={element.id}>
            <Text>名前:{element.name}</Text>
            <Text>{element.points}点</Text>
            <Text>{element.seisan}点</Text>
            </Box>
        ))}

    </>
)
}
//TODO　プレイヤー情報を表のようにCSS当てる。レートと最終順位集計欄作成
export default Seisan