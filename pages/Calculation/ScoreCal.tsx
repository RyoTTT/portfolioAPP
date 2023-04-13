import React, { useState } from "react";
import CalculationHome from "./calhome";
import { Box, Text, Button, ButtonGroup, Center } from "@chakra-ui/react";
import { convertCompilerOptionsFromJson } from "typescript";
//役のボタンは一回しか押せないようにする+ボタンを押すと色が変わる機能が必要。
//ツモ、ピンフツモ、七対子、親版の点数計算実装が必要。
//複合しないパターンにエラー実装が必要。
//Switchで〜以上という条件分岐させたい
const ScoreCal = () => {
  type tsumoScoreType = {
    name:string,
    score:number
  }
//点数計算に必要な数値を管理
  const [hanCount, setHanCount] = useState<number>(0);
  const [doraCount, setDoraCount] = useState<number>(0);
  const [fuCount, setFuCount] = useState<number>(20);
  const [Yakunames, setYakunames] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [tsumoScore, setTsumoScore] = useState<tsumoScoreType[]>([]);
//特殊計算になる役を管理
  const [tsumoCheck, setTsumoCheck] = useState<boolean>(false);
  const [pinhuCheck, setPinhuCheck] = useState<boolean>(false);
  const [chitoitsuCheck, setChitoitsuCheck] = useState<boolean>(false);
  const [oyaCheck, setOyaCheck] = useState<boolean>(false);
//役数カウント
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
  const tsumo= () => { 
    setYakunames([...Yakunames,"ツモ"]);
    setTsumoCheck(!tsumoCheck);
  }
  const pinhu = () => {
    setYakunames([...Yakunames,"平和"]);
    setPinhuCheck(!pinhuCheck);
  }
  const chitoitsu = () => {
    setYakunames([...Yakunames,"七対子"])
    setChitoitsuCheck(true);
  }

//計算リセット
  const resetScore = () => {
    setYakunames([]);
    setHanCount(20);
    setHanCount(0);
    setScore(0);
    setDoraCount(0);
    setTsumoCheck(false);
    setPinhuCheck(false);
    setChitoitsuCheck(false);
  }

//計算機
const calculation = () => {
if (oyaCheck === false) {
  if (pinhuCheck === false && tsumoCheck === true && chitoitsuCheck === false) {
    switch(hanCount+doraCount) {
      case 1:
      switch(Math.ceil(fuCount/10)) {
        case 3:
          setTsumoScore([{name:"親",score:500},{name:"子",score:300}])
          break;
        case 4:
          setTsumoScore([{name:"親",score:700},{name:"子",score:400}])
          break;
        case 5:
          setTsumoScore([{name:"親",score:800},{name:"子",score:400}])
          break;
        case 6:
          setTsumoScore([{name:"親",score:1000},{name:"子",score:500}])
          break;
        case 7:
          setTsumoScore([{name:"親",score:1200},{name:"子",score:600}])
            break;
        case 8:
          setTsumoScore([{name:"親",score:1300},{name:"子",score:700}])
          break;
        case 9:
          setTsumoScore([{name:"親",score:1500},{name:"子",score:800}])
          break;
        case 10:
          setTsumoScore([{name:"親",score:1600},{name:"子",score:800}])
          break;
        case 11:
          setTsumoScore([{name:"親",score:1800},{name:"子",score:900}])
          break;
        default:
          alert("点数計算できません");
          break;
      };
      break;
      case 2:
      switch(Math.ceil(fuCount/10)) {
        case 3:
          setTsumoScore([{name:"親",score:1000},{name:"子",score:500}])
          break;
        case 4:
          setTsumoScore([{name:"親",score:1300},{name:"子",score:700}])
          break;
        case 5:
          setTsumoScore([{name:"親",score:1600},{name:"子",score:800}])
          break;
        case 6:
          setTsumoScore([{name:"親",score:2000},{name:"子",score:1000}])
          break;
        case 7:
          setTsumoScore([{name:"親",score:2300},{name:"子",score:1200}])
            break;
        case 8:
          setTsumoScore([{name:"親",score:2600},{name:"子",score:1300}])
          break;
        case 9:
          setTsumoScore([{name:"親",score:2900},{name:"子",score:1500}])
          break;
        case 10:
          setTsumoScore([{name:"親",score:3200},{name:"子",score:1600}])
          break;
        case 11:
          setTsumoScore([{name:"親",score:3600},{name:"子",score:1800}])
          break;
        default:
          alert("符計算が間違ってます");
          break;
      }
      break;
      case 3:
        switch(Math.ceil(fuCount/10)) {
          case 3:
            setTsumoScore([{name:"親",score:2000},{name:"子",score:400}])
            break;
          case 4:
            setTsumoScore([{name:"親",score:2600},{name:"子",score:400}])
            break;
          case 5:
            setTsumoScore([{name:"親",score:3200},{name:"子",score:400}])
            break;
          case 6:
            setTsumoScore([{name:"親",score:3900},{name:"子",score:400}])
            break;
          case 7:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 8:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 9:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 10:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 11:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          default:
            alert("符計算が間違ってます");
            break;
        }
        break;
      case 4:
        switch(Math.ceil(fuCount/10)) {
          case 3:
            setTsumoScore([{name:"親",score:3900},{name:"子",score:2000}])
            break;
          default:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
        }
        break;
      case 5:
        setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
        break;
      case 6:
        setTsumoScore([{name:"親",score:6000},{name:"子",score:3000}])
        break;
      case 7:
        setTsumoScore([{name:"親",score:6000},{name:"子",score:3000}])
        break;
      case 8:
        setTsumoScore([{name:"親",score:8000},{name:"子",score:4000}])
        break;
      case 9:
        setTsumoScore([{name:"親",score:8000},{name:"子",score:4000}])
        break;      
      case 10:
        setTsumoScore([{name:"親",score:8000},{name:"子",score:4000}])
        break;
      case 11:
        setTsumoScore([{name:"親",score:1200},{name:"子",score:6000}])
        break;
      case 12:
        setTsumoScore([{name:"親",score:12000},{name:"子",score:6000}])
        break;
}
} //ツモの計算
  else if (pinhuCheck === true && tsumoCheck === true && chitoitsuCheck === false) {
  if (hanCount + doraCount === 2) {
    const han2PinhuTsmoScore = [{name:"親",score:700},{name:"子",score:400}]
    setTsumoScore(han2PinhuTsmoScore);
  } else if (hanCount + doraCount === 3) {
    const han3PinhuTsmoScore = [{name:"親",score:1300},{name:"子",score:700}]
    setTsumoScore(han3PinhuTsmoScore);
  } else if (hanCount + doraCount === 4) {
    const han4PinhuTsmoScore = [{name:"親",score:2600},{name:"子",score:1300}]
    setTsumoScore(han4PinhuTsmoScore);
  } else if (hanCount + doraCount === 5) {
    const han5PinhuTsmoScore = [{name:"親",score:4000},{name:"子",score:2000}]
    setTsumoScore(han5PinhuTsmoScore);
  } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
      const hanemanPinhuTsmoScore = [{name:"親",score:6000},{name:"子",score:3000}]
      setTsumoScore(hanemanPinhuTsmoScore);
  } else if (hanCount + doraCount === 8 || hanCount + doraCount === 9 || hanCount + doraCount === 10) {
    const baimanPinhuTsmoScore = [{name:"親",score:8000},{name:"子",score:4000}]
    setTsumoScore(baimanPinhuTsmoScore);
  } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
    const sanbaimanPinhuTsmoScore = [{name:"親",score:12000},{name:"子",score:6000}]
    setTsumoScore(sanbaimanPinhuTsmoScore);
  } else {
    const maxPinhuTsmoScore = [{name:"親",score:16000},{name:"子",score:8000}]
    setTsumoScore(maxPinhuTsmoScore);
  }
} //ピンフツモの計算
  else if (pinhuCheck === false && tsumoCheck === true && chitoitsuCheck === true) {
  if (hanCount + doraCount === 3) {
    const han3ChitoitsuTsmoScore = [{name:"親",score:1600},{name:"子",score:800}]
    setTsumoScore(han3ChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 4) {
    const han4ChitoitsuTsmoScore = [{name:"親",score:3200},{name:"子",score:1600}]
    setTsumoScore(han4ChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 5) {
    const han5ChitoitsuTsmoScore = [{name:"親",score:4000},{name:"子",score:2000}]
    setTsumoScore(han5ChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
      const hanemanChitoitsuTsmoScore = [{name:"親",score:6000},{name:"子",score:3000}]
      setTsumoScore(hanemanChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 8 || hanCount + doraCount === 9 || hanCount + doraCount === 10) {
    const baimanChitoitsuTsmoScore = [{name:"親",score:8000},{name:"子",score:4000}]
    setTsumoScore(baimanChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
    const sanbaimanChitoitsuTsmoScore = [{name:"親",score:12000},{name:"子",score:6000}]
    setTsumoScore(sanbaimanChitoitsuTsmoScore);
  } else {
    const maxChitoitsuTsmoScore = [{name:"親",score:16000},{name:"子",score:8000}]
    setTsumoScore(maxChitoitsuTsmoScore);
  }
} //七対子ツモの計算
  else if (pinhuCheck === false && tsumoCheck === false && chitoitsuCheck === true) {
  if (hanCount + doraCount === 2) {
    setScore(1600);
  } else if (hanCount + doraCount === 3) {
    setScore(3200);
  } else if (hanCount + doraCount === 4) {
    setScore(6400);
  } else if (hanCount + doraCount === 5) {
    setScore(8000);
  } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
    setScore(12000);
  } else if (hanCount + doraCount === 8 || hanCount + doraCount === 9 || hanCount + doraCount === 10) {
    setScore(16000);
  } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
    setScore(18000);
  } else {
    setScore(24000);
  }
} //七対子の計算
  else {
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
} //普通の計算
} // 子の計算終了

else {
  if (pinhuCheck === false && tsumoCheck === true && chitoitsuCheck === false) {
    switch(hanCount+doraCount) {
      case 1:
      switch(Math.ceil(fuCount/10)) {
        case 3:
          setTsumoScore([{name:"親",score:500},{name:"子",score:300}])
          break;
        case 4:
          setTsumoScore([{name:"親",score:700},{name:"子",score:400}])
          break;
        case 5:
          setTsumoScore([{name:"親",score:800},{name:"子",score:400}])
          break;
        case 6:
          setTsumoScore([{name:"親",score:1000},{name:"子",score:500}])
          break;
        case 7:
          setTsumoScore([{name:"親",score:1200},{name:"子",score:600}])
            break;
        case 8:
          setTsumoScore([{name:"親",score:1300},{name:"子",score:700}])
          break;
        case 9:
          setTsumoScore([{name:"親",score:1500},{name:"子",score:800}])
          break;
        case 10:
          setTsumoScore([{name:"親",score:1600},{name:"子",score:800}])
          break;
        case 11:
          setTsumoScore([{name:"親",score:1800},{name:"子",score:900}])
          break;
        default:
          alert("点数計算できません");
          break;
      };
      break;
      case 2:
      switch(Math.ceil(fuCount/10)) {
        case 3:
          setTsumoScore([{name:"親",score:1000},{name:"子",score:500}])
          break;
        case 4:
          setTsumoScore([{name:"親",score:1300},{name:"子",score:700}])
          break;
        case 5:
          setTsumoScore([{name:"親",score:1600},{name:"子",score:800}])
          break;
        case 6:
          setTsumoScore([{name:"親",score:2000},{name:"子",score:1000}])
          break;
        case 7:
          setTsumoScore([{name:"親",score:2300},{name:"子",score:1200}])
            break;
        case 8:
          setTsumoScore([{name:"親",score:2600},{name:"子",score:1300}])
          break;
        case 9:
          setTsumoScore([{name:"親",score:2900},{name:"子",score:1500}])
          break;
        case 10:
          setTsumoScore([{name:"親",score:3200},{name:"子",score:1600}])
          break;
        case 11:
          setTsumoScore([{name:"親",score:3600},{name:"子",score:1800}])
          break;
        default:
          alert("符計算が間違ってます");
          break;
      }
      break;
      case 3:
        switch(Math.ceil(fuCount/10)) {
          case 3:
            setTsumoScore([{name:"親",score:2000},{name:"子",score:400}])
            break;
          case 4:
            setTsumoScore([{name:"親",score:2600},{name:"子",score:400}])
            break;
          case 5:
            setTsumoScore([{name:"親",score:3200},{name:"子",score:400}])
            break;
          case 6:
            setTsumoScore([{name:"親",score:3900},{name:"子",score:400}])
            break;
          case 7:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 8:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 9:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 10:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          case 11:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
          default:
            alert("符計算が間違ってます");
            break;
        }
        break;
      case 4:
        switch(Math.ceil(fuCount/10)) {
          case 3:
            setTsumoScore([{name:"親",score:3900},{name:"子",score:2000}])
            break;
          default:
            setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
            break;
        }
        break;
      case 5:
        setTsumoScore([{name:"親",score:4000},{name:"子",score:2000}])
        break;
      case 6:
        setTsumoScore([{name:"親",score:6000},{name:"子",score:3000}])
        break;
      case 7:
        setTsumoScore([{name:"親",score:6000},{name:"子",score:3000}])
        break;
      case 8:
        setTsumoScore([{name:"親",score:8000},{name:"子",score:4000}])
        break;
      case 9:
        setTsumoScore([{name:"親",score:8000},{name:"子",score:4000}])
        break;      
      case 10:
        setTsumoScore([{name:"親",score:8000},{name:"子",score:4000}])
        break;
      case 11:
        setTsumoScore([{name:"親",score:1200},{name:"子",score:6000}])
        break;
      case 12:
        setTsumoScore([{name:"親",score:12000},{name:"子",score:6000}])
        break;
}
} //ツモの計算
  else if (pinhuCheck === true && tsumoCheck === true && chitoitsuCheck === false) {
  if (hanCount + doraCount === 2) {
    const han2PinhuTsmoScore = [{name:"親",score:700},{name:"子",score:400}]
    setTsumoScore(han2PinhuTsmoScore);
  } else if (hanCount + doraCount === 3) {
    const han3PinhuTsmoScore = [{name:"親",score:1300},{name:"子",score:700}]
    setTsumoScore(han3PinhuTsmoScore);
  } else if (hanCount + doraCount === 4) {
    const han4PinhuTsmoScore = [{name:"親",score:2600},{name:"子",score:1300}]
    setTsumoScore(han4PinhuTsmoScore);
  } else if (hanCount + doraCount === 5) {
    const han5PinhuTsmoScore = [{name:"親",score:4000},{name:"子",score:2000}]
    setTsumoScore(han5PinhuTsmoScore);
  } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
      const hanemanPinhuTsmoScore = [{name:"親",score:6000},{name:"子",score:3000}]
      setTsumoScore(hanemanPinhuTsmoScore);
  } else if (hanCount + doraCount === 8 || hanCount + doraCount === 9 || hanCount + doraCount === 10) {
    const baimanPinhuTsmoScore = [{name:"親",score:8000},{name:"子",score:4000}]
    setTsumoScore(baimanPinhuTsmoScore);
  } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
    const sanbaimanPinhuTsmoScore = [{name:"親",score:12000},{name:"子",score:6000}]
    setTsumoScore(sanbaimanPinhuTsmoScore);
  } else {
    const maxPinhuTsmoScore = [{name:"親",score:16000},{name:"子",score:8000}]
    setTsumoScore(maxPinhuTsmoScore);
  }
} //ピンフツモの計算
  else if (pinhuCheck === false && tsumoCheck === true && chitoitsuCheck === true) {
  if (hanCount + doraCount === 3) {
    const han3ChitoitsuTsmoScore = [{name:"親",score:1600},{name:"子",score:800}]
    setTsumoScore(han3ChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 4) {
    const han4ChitoitsuTsmoScore = [{name:"親",score:3200},{name:"子",score:1600}]
    setTsumoScore(han4ChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 5) {
    const han5ChitoitsuTsmoScore = [{name:"親",score:4000},{name:"子",score:2000}]
    setTsumoScore(han5ChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
      const hanemanChitoitsuTsmoScore = [{name:"親",score:6000},{name:"子",score:3000}]
      setTsumoScore(hanemanChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 8 || hanCount + doraCount === 9 || hanCount + doraCount === 10) {
    const baimanChitoitsuTsmoScore = [{name:"親",score:8000},{name:"子",score:4000}]
    setTsumoScore(baimanChitoitsuTsmoScore);
  } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
    const sanbaimanChitoitsuTsmoScore = [{name:"親",score:12000},{name:"子",score:6000}]
    setTsumoScore(sanbaimanChitoitsuTsmoScore);
  } else {
    const maxChitoitsuTsmoScore = [{name:"親",score:16000},{name:"子",score:8000}]
    setTsumoScore(maxChitoitsuTsmoScore);
  }
} //七対子ツモの計算
  else if (pinhuCheck === false && tsumoCheck === false && chitoitsuCheck === true) {
  if (hanCount + doraCount === 2) {
    setScore(1600);
  } else if (hanCount + doraCount === 3) {
    setScore(3200);
  } else if (hanCount + doraCount === 4) {
    setScore(6400);
  } else if (hanCount + doraCount === 5) {
    setScore(8000);
  } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
    setScore(12000);
  } else if (hanCount + doraCount === 8 || hanCount + doraCount === 9 || hanCount + doraCount === 10) {
    setScore(16000);
  } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
    setScore(18000);
  } else {
    setScore(24000);
  }
} //七対子の計算
  else {
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
} //普通の計算
  } //親の計算終了
} // calculation end


  return (
    <>
      <CalculationHome />
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          卓の状況
        </Text>
        <ButtonGroup>
          <Button onClick={()=>setOyaCheck(true)}>親</Button>
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
            <Button onClick={tsumo}>ツモ</Button>
            <Button onClick={pinhu}>平和</Button>
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
            <Button onClick={chitoitsu}>七対子</Button>
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