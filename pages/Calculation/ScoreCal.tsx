import React, { useState } from "react";
import CalculationHome from "./calhome";
import { Box, Text, Button, ButtonGroup, Center } from "@chakra-ui/react";
//役のボタンは一回しか押せないようにする。ボタンを押すと色が変わる。
const ScoreCal = () => {
  const [hanCount, setHanCount] = useState<number>(0);
  const [clickCheck, setClickCheck] = useState<boolean>(false);
  const [doraCount, setDoraCount] = useState<number>(0);
  const [fuCount, setFuCount] = useState<number>(20);
  const [Yakunames, setYakunames] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const han1Add = () => {
    setHanCount(hanCount + 1); 
  }
  const han2Add = () => {
    setHanCount(hanCount + 2);
  }
  const han3Add = () => {
    setHanCount(hanCount + 3);
  }
  const han5Add = () => {
    setHanCount(hanCount + 5);
    setYakunames([...Yakunames,"チンイツ"])
  }
  const han6Add = () => {
    setHanCount(hanCount + 6);
    setYakunames([...Yakunames,"チンイツ"])
  }
  const resetScore = () => {
    setYakunames([]);
    setHanCount(20);
    setHanCount(0);
    setScore(0);
    setDoraCount(0);
  }
const calculation = () => {
  switch(hanCount+doraCount) {
    case 1:
      switch(Math.ceil(fuCount/10)) {
        case 3:
          setScore(1000);
          break;
        case 4:
          setScore(1300);
          break;
        case 5:
          setScore(1600);
          break;
        case 6:
          setScore(2000);
          break;
        case 7:
            setScore(2300);
            break;
        case 8:
          setScore(2600);
          break;
        case 9:
          setScore(2900);
          break;
        case 10:
          setScore(3200);
          break;
        case 11:
          setScore(3600);
          break;
        default:
          alert("点数計算できません");
          break;
      };
      break;
    case 2:
      switch(Math.ceil(fuCount/10)) {
        case 3:
          setScore(2000);
          break;
        case 4:
          setScore(2600);
          break;
        case 5:
          setScore(3200);
          break;
        case 6:
          setScore(3900);
          break;
        case 7:
            setScore(4500);
            break;
        case 8:
          setScore(5200);
          break;
        case 9:
          setScore(5800);
          break;
        case 10:
          setScore(6400);
          break;
        case 11:
          setScore(7100);
          break;
        default:
          alert("符計算が間違ってます");
          break;
      }
      break;
      case 3:
        switch(Math.ceil(fuCount/10)) {
          case 3:
            setScore(3200);
            break;
          case 4:
            setScore(3900);
            break;
          case 5:
            setScore(5200);
            break;
          case 6:
            setScore(6400);
            break;
          case 7:
              setScore(7700);
              break;
          case 8:
            setScore(8000);
            break;
          case 9:
            setScore(8000);
            break;
          case 10:
            setScore(8000);
            break;
          case 11:
            setScore(8000);
            break;
          default:
            alert("符計算が間違ってます");
            break;
        }
        break;
      case 4:
        switch(Math.ceil(fuCount/10)) {
          case 3:
            setScore(7700);
            break;
          default:
            setScore(8000);
            break;
        }
        break;
      case 5:
        setScore(8000);
        break;
      case 6:
        setScore(12000);
        break;
      case 7:
        setScore(12000);
        break;
      case 8:
        setScore(16000);
        break;
      case 9:
        setScore(16000);
        break;      
      case 10:
        setScore(16000);
        break;
      case 11:
        setScore(24000);
        break;
      case 12:
        setScore(24000);
        break;
  }
}
  return (
    <>
      <CalculationHome />
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          卓の状況
        </Text>
        <ButtonGroup>
          <Button>親</Button>
          <Button>x本場</Button>
        </ButtonGroup>
      </Box>
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          役を選択
        </Text>
        <Box>
          <Text>1翻役</Text>
          <ButtonGroup onClick={han1Add}>
            <Button onClick={()=>setYakunames([...Yakunames,"立直"])}>立直</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"一発"])}>一発</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"ツモ"])}>ツモ</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"平和"])}>平和</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"断么"])}>断么</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"白"])}>白</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"發"])}>發</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"中"])}>中</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"自風"])}>自風</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"場風"])}>場風</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"一盃口"])}>一盃口</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"ハイテイ"])}>ハイテイ</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"嶺上開花"])}>嶺上開花</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"チャンカン"])}>チャンカン</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"三色同順"])}>三色同順(鳴き)</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"一気通貫"])}>一気通貫(鳴き)</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"チャンタ"])}>チャンタ(鳴き)</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>2翻役</Text>
          <ButtonGroup onClick={han2Add}>
            <Button onClick={()=>setYakunames([...Yakunames,"ダブル立直"])}>ダブル立直</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"三色同順"])}>三色同順</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"三色同刻"])}>三色同刻</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"三暗刻"])}>三暗刻</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"一気通貫"])}>一気通貫</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"七対子"])}>七対子</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"トイトイ"])}>トイトイ</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"チャンタ"])}>チャンタ</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"三槓子"])}>三槓子</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"小三元"])}>小三元</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"混老頭"])}>混老頭</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"混一色"])}>混一色(鳴き)</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"ジュンチャン"])}>ジュンチャン(鳴き)</Button>
          </ButtonGroup>
        </Box>
        <Box onClick={han3Add}>
          <Text>3翻役</Text>
          <ButtonGroup>
            <Button onClick={()=>setYakunames([...Yakunames,"混一色"])}>混一色</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"ジュンチャン"])}>ジュンチャン</Button>
            <Button onClick={()=>setYakunames([...Yakunames,"二盃口"])}>二盃口</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>その他</Text>
          <Button onClick={han5Add}>チンイツ(鳴き)(5翻)</Button>
          <Button onClick={han6Add}>チンイツ(6翻)</Button>
        </Box>
        <Box display="flex">
          <Button onClick={()=>setDoraCount(doraCount + 1)}>ドラ+1</Button>
          <Text>ドラ:{doraCount}</Text>
        </Box>
      </Box>
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          符計算
        </Text>
        <Box>
          <Text>アガリ方</Text>
          <ButtonGroup>
          <Button onClick={()=>setFuCount(fuCount + 10)}>門前ロン</Button>
          <Button onClick={()=>setFuCount(fuCount + 2)}>ツモ</Button>
          <Button>鳴いてロン</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>面子</Text>
          <ButtonGroup>
            <Button onClick={()=>setFuCount(fuCount + 2)}>明刻(2~8の数字牌)</Button>
            <Button onClick={()=>setFuCount(fuCount + 4)}>明刻</Button>
            <Button onClick={()=>setFuCount(fuCount + 4)}>暗刻(2~8の数字牌)</Button>
            <Button onClick={()=>setFuCount(fuCount + 8)}>暗刻</Button>
            <Button onClick={()=>setFuCount(fuCount + 8)}>明カン(2~8の数字牌)</Button>
            <Button onClick={()=>setFuCount(fuCount + 16)}>明カン</Button>
            <Button onClick={()=>setFuCount(fuCount + 16)}>暗カン(2~8の数字牌)</Button>
            <Button onClick={()=>setFuCount(fuCount + 32)}>暗カン</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>アタマが役牌であれば押す</Text>
          <Button onClick={()=>setFuCount(fuCount + 2)}>アタマ</Button>
        </Box>
        <Box>
          <Text>待ち(ペンチャン・カンチャン・タンキ・ノベタン)のみ</Text>
          <Button onClick={()=>setFuCount(fuCount + 2)}>待ち</Button>
        </Box>
        <Text>{fuCount}符</Text>
      </Box>
      <Box>
        <Button float="right" onClick={calculation}>計算する</Button>
      </Box>
      <Center>
        <Text fontSize="30px">{score}点</Text>
        {Yakunames.map((yaku,index)=>(
          <Box key={index}>{yaku}</Box>
        ))}
        <Button>記録する</Button>
        <Button onClick={resetScore}>リセットする</Button>
      </Center>
    </>
  );
};

export default ScoreCal;