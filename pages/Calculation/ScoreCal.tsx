import React, { useEffect, useState } from "react";
import CalculationHome from "./calhome";
import { Box, Text, Button, ButtonGroup, Center } from "@chakra-ui/react";
import YakuStateButton from "@/components/CalculationComponents/YakustateButtons/YakuStateButton";
import YakuStateButtonForTsumo from "@/components/CalculationComponents/YakustateButtons/YakuStateButtonForTsumo";
import YakuStateButtonForPinhu from "@/components/CalculationComponents/YakustateButtons/YakuStateButtonForPinhu";
import YakuStateButtonForChitoitsu from "@/components/CalculationComponents/YakustateButtons/YakuStateButtonForChitoitsu";
import YakuStateButtonForChinitsu5 from "@/components/CalculationComponents/YakustateButtons/YakuStateButtonForChinitsu5";
import YakuStateButtonForChinitsu6 from "@/components/CalculationComponents/YakustateButtons/YakuStateButtonForChinitsu6";
import ScorePreview from "@/components/CalculationComponents/ScorePreview";
import { OyaButton } from "@/components/CalculationComponents/YakustateButtons/OyaButton";
import { HonbaButton } from "@/components/CalculationComponents/YakustateButtons/HonbaButton";
import { Minko2Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Minko2Button";
import { Minko4Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Minko4Button";
import { Anko4Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Anko4Button";
import { Anko8Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Anko8Button";
import { Minkan8Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Minkan8Button";
import { Minkan16Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Minkan16Button";
import { Ankan16Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Ankan16Button";
import { Ankan32Button } from "@/components/CalculationComponents/YakustateButtons/MentsuButtons/Ankan32Button";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";

//Switchで〜以上という条件分岐させたい
const ScoreCal = () => {
  type tsumoScoreType = {
    name: string;
    score: number;
  };
  //点数計算に必要な数値を管理
  const [hanCount, setHanCount] = useState<number>(0);
  const [doraCount, setDoraCount] = useState<number>(0);
  const [fuCount, setFuCount] = useState<number>(20);
  const [yakuStateList, setYakuStateList] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [tsumoScore, setTsumoScore] = useState<tsumoScoreType[]>([]);
  const [oyaTsumoScore, setOyaTsumoScore] = useState<number>(0);
  const [honbaCount, setHonbaCount] =useState<number>(0);
  const [minkoCount, setMinkoCount] = useState<number>(0);
  const [ankoCount, setAnkoCount] = useState<number>(0);
  const [minkanCount, setMinkanCount] = useState<number>(0);
  const [ankanCount,setAnkanCount] = useState<number>(0);
  //特殊計算になる役を管理
  const [tsumoCheck, setTsumoCheck] = useState<boolean>(false);
  const [pinhuCheck, setPinhuCheck] = useState<boolean>(false);
  const [chitoitsuCheck, setChitoitsuCheck] = useState<boolean>(false);
  const [oyaCheck, setOyaCheck] = useState<boolean>(false);
  //ボタンクリック管理
  const [oyaClick, setOyaClick] = useState<boolean>(false);
  const [honbaClick, setHonbaClick] = useState<boolean>(false);
  //firebase用
  const [yakurecord,setYakurecord] = useState<string[]>([]);

  //役数カウント
  const han1Add = () => {
    setHanCount(hanCount + 1);
  };
  const han2Add = () => {
    setHanCount(hanCount + 2);
  };
  const han3Add = () => {
    setHanCount(hanCount + 3);
  };

  //計算リセット
  const resetScore = () => {
    setYakuStateList([]);
    setFuCount(20);
    setHanCount(0);
    setScore(0);
    setDoraCount(0);
    setTsumoCheck(false);
    setPinhuCheck(false);
    setChitoitsuCheck(false);
    setHonbaCount(0);
    setOyaCheck(false);
    setMinkoCount(0);
    setAnkoCount(0);
    setMinkanCount(0);
    setAnkanCount(0);
  };

  //計算機
  const calculation = () => {
    if (oyaCheck === false) {
      if (
        pinhuCheck === false &&
        tsumoCheck === true &&
        chitoitsuCheck === false
      ) {
        switch (hanCount + doraCount) {
          case 1:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setTsumoScore([
                  { name: "親", score: 500 },
                  { name: "子", score: 300 },
                ]);
                break;
              case 4:
                setTsumoScore([
                  { name: "親", score: 700 },
                  { name: "子", score: 400 },
                ]);
                break;
              case 5:
                setTsumoScore([
                  { name: "親", score: 800 },
                  { name: "子", score: 400 },
                ]);
                break;
              case 6:
                setTsumoScore([
                  { name: "親", score: 1000 },
                  { name: "子", score: 500 },
                ]);
                break;
              case 7:
                setTsumoScore([
                  { name: "親", score: 1200 },
                  { name: "子", score: 600 },
                ]);
                break;
              case 8:
                setTsumoScore([
                  { name: "親", score: 1300 },
                  { name: "子", score: 700 },
                ]);
                break;
              case 9:
                setTsumoScore([
                  { name: "親", score: 1500 },
                  { name: "子", score: 800 },
                ]);
                break;
              case 10:
                setTsumoScore([
                  { name: "親", score: 1600 },
                  { name: "子", score: 800 },
                ]);
                break;
              case 11:
                setTsumoScore([
                  { name: "親", score: 1800 },
                  { name: "子", score: 900 },
                ]);
                break;
              default:
                alert("点数計算できません");
                break;
            }
            break;
          case 2:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setTsumoScore([
                  { name: "親", score: 1000 },
                  { name: "子", score: 500 },
                ]);
                break;
              case 4:
                setTsumoScore([
                  { name: "親", score: 1300 },
                  { name: "子", score: 700 },
                ]);
                break;
              case 5:
                setTsumoScore([
                  { name: "親", score: 1600 },
                  { name: "子", score: 800 },
                ]);
                break;
              case 6:
                setTsumoScore([
                  { name: "親", score: 2000 },
                  { name: "子", score: 1000 },
                ]);
                break;
              case 7:
                setTsumoScore([
                  { name: "親", score: 2300 },
                  { name: "子", score: 1200 },
                ]);
                break;
              case 8:
                setTsumoScore([
                  { name: "親", score: 2600 },
                  { name: "子", score: 1300 },
                ]);
                break;
              case 9:
                setTsumoScore([
                  { name: "親", score: 2900 },
                  { name: "子", score: 1500 },
                ]);
                break;
              case 10:
                setTsumoScore([
                  { name: "親", score: 3200 },
                  { name: "子", score: 1600 },
                ]);
                break;
              case 11:
                setTsumoScore([
                  { name: "親", score: 3600 },
                  { name: "子", score: 1800 },
                ]);
                break;
              default:
                alert("符計算が間違ってます");
                break;
            }
            break;
          case 3:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setTsumoScore([
                  { name: "親", score: 2000 },
                  { name: "子", score: 1000 },
                ]);
                break;
              case 4:
                setTsumoScore([
                  { name: "親", score: 2600 },
                  { name: "子", score: 1300 },
                ]);
                break;
              case 5:
                setTsumoScore([
                  { name: "親", score: 3200 },
                  { name: "子", score: 1600 },
                ]);
                break;
              case 6:
                setTsumoScore([
                  { name: "親", score: 3900 },
                  { name: "子", score: 2000 },
                ]);
                break;
              case 7:
                setTsumoScore([
                  { name: "親", score: 4000 },
                  { name: "子", score: 2000 },
                ]);
                break;
              case 8:
                setTsumoScore([
                  { name: "親", score: 4000 },
                  { name: "子", score: 2000 },
                ]);
                break;
              case 9:
                setTsumoScore([
                  { name: "親", score: 4000 },
                  { name: "子", score: 2000 },
                ]);
                break;
              case 10:
                setTsumoScore([
                  { name: "親", score: 4000 },
                  { name: "子", score: 2000 },
                ]);
                break;
              case 11:
                setTsumoScore([
                  { name: "親", score: 4000 },
                  { name: "子", score: 2000 },
                ]);
                break;
              default:
                alert("符計算が間違ってます");
                break;
            }
            break;
          case 4:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setTsumoScore([
                  { name: "親", score: 3900 },
                  { name: "子", score: 2000 },
                ]);
                break;
              default:
                setTsumoScore([
                  { name: "親", score: 4000 },
                  { name: "子", score: 2000 },
                ]);
                break;
            }
            break;
          case 5:
            setTsumoScore([
              { name: "親", score: 4000 },
              { name: "子", score: 2000 },
            ]);
            break;
          case 6:
            setTsumoScore([
              { name: "親", score: 6000 },
              { name: "子", score: 3000 },
            ]);
            break;
          case 7:
            setTsumoScore([
              { name: "親", score: 6000 },
              { name: "子", score: 3000 },
            ]);
            break;
          case 8:
            setTsumoScore([
              { name: "親", score: 8000 },
              { name: "子", score: 4000 },
            ]);
            break;
          case 9:
            setTsumoScore([
              { name: "親", score: 8000 },
              { name: "子", score: 4000 },
            ]);
            break;
          case 10:
            setTsumoScore([
              { name: "親", score: 8000 },
              { name: "子", score: 4000 },
            ]);
            break;
          case 11:
            setTsumoScore([
              { name: "親", score: 12000 },
              { name: "子", score: 6000 },
            ]);
            break;
          case 12:
            setTsumoScore([
              { name: "親", score: 12000 },
              { name: "子", score: 6000 },
            ]);
            break;
        }
      } //ツモの計算
      else if (
        pinhuCheck === true &&
        tsumoCheck === true &&
        chitoitsuCheck === false
      ) {
        if (hanCount + doraCount === 2) {
          const han2PinhuTsmoScore = [
            { name: "親", score: 700 },
            { name: "子", score: 400 },
          ];
          setTsumoScore(han2PinhuTsmoScore);
        } else if (hanCount + doraCount === 3) {
          const han3PinhuTsmoScore = [
            { name: "親", score: 1300 },
            { name: "子", score: 700 },
          ];
          setTsumoScore(han3PinhuTsmoScore);
        } else if (hanCount + doraCount === 4) {
          const han4PinhuTsmoScore = [
            { name: "親", score: 2600 },
            { name: "子", score: 1300 },
          ];
          setTsumoScore(han4PinhuTsmoScore);
        } else if (hanCount + doraCount === 5) {
          const han5PinhuTsmoScore = [
            { name: "親", score: 4000 },
            { name: "子", score: 2000 },
          ];
          setTsumoScore(han5PinhuTsmoScore);
        } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
          const hanemanPinhuTsmoScore = [
            { name: "親", score: 6000 },
            { name: "子", score: 3000 },
          ];
          setTsumoScore(hanemanPinhuTsmoScore);
        } else if (
          hanCount + doraCount === 8 ||
          hanCount + doraCount === 9 ||
          hanCount + doraCount === 10
        ) {
          const baimanPinhuTsmoScore = [
            { name: "親", score: 8000 },
            { name: "子", score: 4000 },
          ];
          setTsumoScore(baimanPinhuTsmoScore);
        } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
          const sanbaimanPinhuTsmoScore = [
            { name: "親", score: 12000 },
            { name: "子", score: 6000 },
          ];
          setTsumoScore(sanbaimanPinhuTsmoScore);
        } else {
          const maxPinhuTsmoScore = [
            { name: "親", score: 16000 },
            { name: "子", score: 8000 },
          ];
          setTsumoScore(maxPinhuTsmoScore);
        }
      } //ピンフツモの計算
      else if (
        pinhuCheck === false &&
        tsumoCheck === true &&
        chitoitsuCheck === true
      ) {
        if (hanCount + doraCount === 3) {
          const han3ChitoitsuTsmoScore = [
            { name: "親", score: 1600 },
            { name: "子", score: 800 },
          ];
          setTsumoScore(han3ChitoitsuTsmoScore);
        } else if (hanCount + doraCount === 4) {
          const han4ChitoitsuTsmoScore = [
            { name: "親", score: 3200 },
            { name: "子", score: 1600 },
          ];
          setTsumoScore(han4ChitoitsuTsmoScore);
        } else if (hanCount + doraCount === 5) {
          const han5ChitoitsuTsmoScore = [
            { name: "親", score: 4000 },
            { name: "子", score: 2000 },
          ];
          setTsumoScore(han5ChitoitsuTsmoScore);
        } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
          const hanemanChitoitsuTsmoScore = [
            { name: "親", score: 6000 },
            { name: "子", score: 3000 },
          ];
          setTsumoScore(hanemanChitoitsuTsmoScore);
        } else if (
          hanCount + doraCount === 8 ||
          hanCount + doraCount === 9 ||
          hanCount + doraCount === 10
        ) {
          const baimanChitoitsuTsmoScore = [
            { name: "親", score: 8000 },
            { name: "子", score: 4000 },
          ];
          setTsumoScore(baimanChitoitsuTsmoScore);
        } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
          const sanbaimanChitoitsuTsmoScore = [
            { name: "親", score: 12000 },
            { name: "子", score: 6000 },
          ];
          setTsumoScore(sanbaimanChitoitsuTsmoScore);
        } else {
          const maxChitoitsuTsmoScore = [
            { name: "親", score: 16000 },
            { name: "子", score: 8000 },
          ];
          setTsumoScore(maxChitoitsuTsmoScore);
        }
      } //七対子ツモの計算
      else if (
        pinhuCheck === false &&
        tsumoCheck === false &&
        chitoitsuCheck === true
      ) {
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
        } else if (
          hanCount + doraCount === 8 ||
          hanCount + doraCount === 9 ||
          hanCount + doraCount === 10
        ) {
          setScore(16000);
        } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
          setScore(18000);
        } else {
          setScore(24000);
        }
      } //七対子の計算
      else {
        switch (hanCount + doraCount) {
          case 1:
            switch (Math.ceil(fuCount / 10)) {
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
            }
            break;
          case 2:
            switch (Math.ceil(fuCount / 10)) {
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
            switch (Math.ceil(fuCount / 10)) {
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
            switch (Math.ceil(fuCount / 10)) {
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
      if (
        pinhuCheck === false &&
        tsumoCheck === true &&
        chitoitsuCheck === false
      ) {
        switch (hanCount + doraCount) {
          case 1:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setOyaTsumoScore(500);
                setScore(1500);
                break;
              case 4:
                setOyaTsumoScore(700);
                setScore(2100);
                break;
              case 5:
                setOyaTsumoScore(800);
                setScore(2400);
                break;
              case 6:
                setOyaTsumoScore(1000);
                setScore(3000);
                break;
              case 7:
                setOyaTsumoScore(1200);
                setScore(3600);
                break;
              case 8:
                setOyaTsumoScore(1300);
                setScore(3900);
                break;
              case 9:
                setOyaTsumoScore(1500);
                setScore(4500);
                break;
              case 10:
                setOyaTsumoScore(1600);
                setScore(4800);
                break;
              case 11:
                setOyaTsumoScore(1800);
                setScore(5400);
                break;
              default:
                alert("点数計算できません");
                break;
            }
            break;
          case 2:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setOyaTsumoScore(1000);
                setScore(3000);
                break;
              case 4:
                setOyaTsumoScore(1300);
                setScore(3900);
                break;
              case 5:
                setOyaTsumoScore(1600);
                setScore(4800);
                break;
              case 6:
                setOyaTsumoScore(2000);
                setScore(6000);
                break;
              case 7:
                setOyaTsumoScore(2300);
                setScore(6900);
                break;
              case 8:
                setOyaTsumoScore(2600);
                setScore(7800);
                break;
              case 9:
                setOyaTsumoScore(2900);
                setScore(8700);
                break;
              case 10:
                setOyaTsumoScore(3200);
                setScore(9600);
                break;
              case 11:
                setOyaTsumoScore(3600);
                setScore(11800);
                break;
              default:
                alert("符計算が間違ってます");
                break;
            }
            break;
          case 3:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setOyaTsumoScore(2000);
                setScore(6000);
                break;
              case 4:
                setOyaTsumoScore(2600);
                setScore(7800);
                break;
              case 5:
                setOyaTsumoScore(3200);
                setScore(9600);
                break;
              case 6:
                setOyaTsumoScore(3900);
                setScore(11700);
                break;
              case 7:
                setOyaTsumoScore(4000);
                setScore(12000);
                break;
              case 8:
                setOyaTsumoScore(4000);
                setScore(12000);
                break;
              case 9:
                setOyaTsumoScore(4000);
                setScore(12000);
                break;
              case 10:
                setOyaTsumoScore(4000);
                setScore(12000);
                break;
              case 11:
                setOyaTsumoScore(4000);
                setScore(12000);
                break;
              default:
                alert("符計算が間違ってます");
                break;
            }
            break;
          case 4:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setOyaTsumoScore(3900);
                setScore(11700);
                break;
              default:
                setOyaTsumoScore(4000);
                setScore(12000);
                break;
            }
            break;
          case 5:
            setOyaTsumoScore(4000);
            setScore(12000);
            break;
          case 6:
            setOyaTsumoScore(6000);
            setScore(18000);
            break;
          case 7:
            setOyaTsumoScore(6000);
            setScore(18000);
            break;
          case 8:
            setOyaTsumoScore(8000);
            setScore(24000);
            break;
          case 9:
            setOyaTsumoScore(8000);
            setScore(24000);
            break;
          case 10:
            setOyaTsumoScore(8000);
            setScore(24000);
            break;
          case 11:
            setOyaTsumoScore(12000);
            setScore(36000);
            break;
          case 12:
            setOyaTsumoScore(12000);
            setScore(36000);
            break;
          default:
            setOyaTsumoScore(16000);
            setScore(48000);
            alert("数え役満");
            break;
        }
      } //ツモの計算
      else if (
        pinhuCheck === true &&
        tsumoCheck === true &&
        chitoitsuCheck === false
      ) {
        if (hanCount + doraCount === 2) {
          setOyaTsumoScore(700);
          setScore(2100);
        } else if (hanCount + doraCount === 3) {
          setOyaTsumoScore(1300);
          setScore(3900);
        } else if (hanCount + doraCount === 4) {
          setOyaTsumoScore(2600);
          setScore(7200);
        } else if (hanCount + doraCount === 5) {
          setOyaTsumoScore(12000);
          setScore(4000);
        } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
          setOyaTsumoScore(6000);
          setScore(18000);
        } else if (
          hanCount + doraCount === 8 ||
          hanCount + doraCount === 9 ||
          hanCount + doraCount === 10
        ) {
          setOyaTsumoScore(8000);
          setScore(24000);
        } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
          setOyaTsumoScore(12000);
          setScore(36000);
        } else {
          setOyaTsumoScore(16000);
          setScore(48000);
        }
      } //ピンフツモの計算
      else if (
        pinhuCheck === false &&
        tsumoCheck === true &&
        chitoitsuCheck === true
      ) {
        if (hanCount + doraCount === 3) {
          setOyaTsumoScore(1600);
          setScore(4800);
        } else if (hanCount + doraCount === 4) {
          setOyaTsumoScore(3200);
          setScore(9600);
        } else if (hanCount + doraCount === 5) {
          setOyaTsumoScore(4000);
          setScore(12000);
        } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
          setOyaTsumoScore(6000);
          setScore(18000);
        } else if (
          hanCount + doraCount === 8 ||
          hanCount + doraCount === 9 ||
          hanCount + doraCount === 10
        ) {
          setOyaTsumoScore(8000);
          setScore(24000);
        } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
          setOyaTsumoScore(12000);
          setScore(36000);
        } else {
          setOyaTsumoScore(16000);
          setScore(48000);
        }
      } //七対子ツモの計算
      else if (
        pinhuCheck === false &&
        tsumoCheck === false &&
        chitoitsuCheck === true
      ) {
        if (hanCount + doraCount === 2) {
          setScore(1600);
        } else if (hanCount + doraCount === 3) {
          setScore(2400);
        } else if (hanCount + doraCount === 4) {
          setScore(4800);
        } else if (hanCount + doraCount === 5) {
          setScore(12000);
        } else if (hanCount + doraCount === 6 || hanCount + doraCount === 7) {
          setScore(18000);
        } else if (
          hanCount + doraCount === 8 ||
          hanCount + doraCount === 9 ||
          hanCount + doraCount === 10
        ) {
          setScore(24000);
        } else if (hanCount + doraCount === 11 || hanCount + doraCount === 12) {
          setScore(36000);
        } else {
          setScore(48000);
        }
      } //七対子の計算
      else {
        switch (hanCount + doraCount) {
          case 1:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setScore(1500);
                break;
              case 4:
                setScore(2000);
                break;
              case 5:
                setScore(2400);
                break;
              case 6:
                setScore(2900);
                break;
              case 7:
                setScore(3400);
                break;
              case 8:
                setScore(3900);
                break;
              case 9:
                setScore(4400);
                break;
              case 10:
                setScore(4800);
                break;
              case 11:
                setScore(5300);
                break;
              default:
                alert("点数計算できません");
                break;
            }
            break;
          case 2:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setScore(2900);
                break;
              case 4:
                setScore(3900);
                break;
              case 5:
                setScore(4800);
                break;
              case 6:
                setScore(5800);
                break;
              case 7:
                setScore(6800);
                break;
              case 8:
                setScore(7700);
                break;
              case 9:
                setScore(8700);
                break;
              case 10:
                setScore(9600);
                break;
              case 11:
                setScore(10600);
                break;
              default:
                alert("符計算が間違ってます");
                break;
            }
            break;
          case 3:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setScore(5800);
                break;
              case 4:
                setScore(7700);
                break;
              case 5:
                setScore(9600);
                break;
              case 6:
                setScore(11600);
                break;
              case 7:
                setScore(12000);
                break;
              case 8:
                setScore(12000);
                break;
              case 9:
                setScore(12000);
                break;
              case 10:
                setScore(12000);
                break;
              case 11:
                setScore(12000);
                break;
              default:
                alert("符計算が間違ってます");
                break;
            }
            break;
          case 4:
            switch (Math.ceil(fuCount / 10)) {
              case 3:
                setScore(11600);
                break;
              default:
                setScore(12000);
                break;
            }
            break;
          case 5:
            setScore(12000);
            break;
          case 6:
            setScore(18000);
            break;
          case 7:
            setScore(18000);
            break;
          case 8:
            setScore(24000);
            break;
          case 9:
            setScore(24000);
            break;
          case 10:
            setScore(24000);
            break;
          case 11:
            setScore(36000);
            break;
          case 12:
            setScore(36000);
            break;
          default:
            setScore(48000);
            alert("役満");
            break;
        }
      } //普通の計算
    } //親の計算終了
  }; // calculation関数  終了

  const changeYakuState = (name: string) => {
    setYakuStateList([...yakuStateList, name]);
  };

  useEffect(() => {
    const shuntsuNumber = 4-(minkoCount+ankoCount+minkanCount+ankanCount);
    if (shuntsuNumber < 0) {
      alert("面子の数が間違っています、符計算をリセットしてください");
    }
  },[minkoCount,minkanCount,ankoCount,ankanCount]);

  const fuReset = () => {
    setFuCount(20);
    setMinkoCount(0);
    setAnkoCount(0);
    setMinkanCount(0);
    setAnkanCount(0);
  }

  const hanReset = () => {
    setDoraCount(0);
    setTsumoCheck(false);
    setPinhuCheck(false);
    setChitoitsuCheck(false);
    setHanCount(0);
    setYakuStateList([]);
  }

  const yakuUpload = () => {
    const auth = getAuth(app);
    const user = auth.currentUser?.uid;
    addDoc(collection(db,"yakuList"),{
      userId:user,
      yaku:yakuStateList
    });
  }

  
  return (
    <>
      <CalculationHome />
      <Box border="solid" margin="2% 2%">
        <Text fontSize="25px" fontWeight="bold">
          卓の状況
        </Text>
        <ButtonGroup>
          <OyaButton oyaCheck={oyaCheck} oyaClick={oyaClick} setOyaCheck={setOyaCheck} setOyaClick={setOyaClick}/>
          <HonbaButton  honbaCount={honbaCount} honbaClick={honbaClick} setHonbaCount={setHonbaCount} setHonbaClick={setHonbaClick}/>
        </ButtonGroup>
        <Box textAlign="center">
          <Text fontSize="25px" fontWeight="bold">{oyaCheck ? "親です": "子です"}</Text>
          <Text fontSize="25px" fontWeight="bold">{honbaCount}本場です</Text>
        </Box>
      </Box>
      <Box border="solid" margin="2%">
        <Text fontSize="25px" fontWeight="bold">
          役を選択
        </Text>
        <Box >
          <Text fontSize="20px" textAlign="center" margin="1%">1翻役</Text>
          <ButtonGroup onClick={han1Add} width="1000px" maxWidth="100%" marginBottom="1.5%">
            <YakuStateButton
              name="立直"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="一発"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButtonForTsumo
              name="ツモ"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
              setTsumoCheck={setTsumoCheck}
            />
            <YakuStateButtonForPinhu
              name="平和"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
              setPinhuCheck={setPinhuCheck}
            />
            <YakuStateButton
              name="断么"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="一盃口"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="白"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="發"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="中"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
          </ButtonGroup>
          <ButtonGroup onClick={han1Add}>
            <YakuStateButton
              name="自風牌"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="場風牌"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="ハイテイ"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="嶺上開花"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="三色同順(鳴き)"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="チャンタ(鳴き)"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="一気通貫(鳴き)"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
          </ButtonGroup>
        </Box>
        <Box>
          <Text fontSize="20px" textAlign="center" margin="2% auto">2翻役</Text>
          <ButtonGroup onClick={han2Add} marginBottom="1.5%">            
          <YakuStateButton
              name="ダブル立直"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="三色同順"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="三色同刻"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="三暗刻"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="一気通貫"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButtonForChitoitsu
              name="七対子"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
              setChitoitsuCheck={setChitoitsuCheck}
            /></ButtonGroup>
          <ButtonGroup onClick={han2Add}>
            <YakuStateButton
              name="トイトイ"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="チャンタ"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="三槓子"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="小三元"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="混老頭"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="混一色(鳴き)"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="ジュンチャン(鳴き)"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
          </ButtonGroup>
        </Box>
        <Box onClick={han3Add}>
          <Text fontSize="20px" textAlign="center" margin="2% auto">3翻役</Text>
          <ButtonGroup>
            <YakuStateButton
              name="混一色"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="ジュンチャン"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
            <YakuStateButton
              name="二盃口"
              yakuStateList={yakuStateList}
              changeYakuState={changeYakuState}
            />
          </ButtonGroup>
        </Box>
        <Box marginBottom="2%">
          <Text fontSize="20px" textAlign="center" margin="2% auto">その他</Text>
          <ButtonGroup>
          <YakuStateButtonForChinitsu5
            name="チンイツ(鳴き)"
            yakuStateList={yakuStateList}
            changeYakuState={changeYakuState}
            setHanCount={setHanCount}
            hanCount={hanCount}
          />
          <YakuStateButtonForChinitsu6
            name="チンイツ"
            yakuStateList={yakuStateList}
            changeYakuState={changeYakuState}
            setHanCount={setHanCount}
            hanCount={hanCount}
          />
          </ButtonGroup>
        </Box>
        <Box display="flex" margin="2%">
          <Button onClick={() => setDoraCount(doraCount + 1)}>ドラ+1</Button>
          <Text fontSize="20px" paddingTop="5px" color="red" fontWeight="bold">ドラ:{doraCount}</Text>
        </Box>
        <Box textAlign="center" fontSize="35px" fontWeight="bold">合計:{hanCount}翻</Box>
        <Box>
          <Button onClick={hanReset}>役をリセット</Button>
        </Box>
      </Box>
      <Box border="solid" margin="2%">
        <Text fontSize="20px" fontWeight="bold" >
          符計算
        </Text>
        <Box margin="1% auto">
          <Text>アガリ方</Text>
          <ButtonGroup>
            <Button onClick={() => setFuCount(fuCount + 10)}>門前ロン</Button>
            <Button onClick={() => setFuCount(fuCount + 2)}>ツモ</Button>
            <Button>鳴いてロン</Button>
          </ButtonGroup>
        </Box>
        <Box margin="1% auto">
          <Text>面子</Text>
          <ButtonGroup>
            <Minko2Button  fuCount={fuCount} minkoCount={minkoCount} setfuCount={setFuCount} setMinkoCount={setMinkoCount}/>
            <Minko4Button  fuCount={fuCount} minkoCount={minkoCount} setfuCount={setFuCount} setMinkoCount={setMinkoCount}/>
            <Anko4Button fuCount={fuCount} ankoCount={ankoCount} setfuCount={setFuCount} setAnkoCount={setAnkoCount}/>
            <Anko8Button fuCount={fuCount} ankoCount={ankoCount} setfuCount={setFuCount} setAnkoCount={setAnkoCount}/>
            <Minkan8Button fuCount={fuCount} minkanCount={minkanCount} setfuCount={setFuCount} setMinkanCount={setMinkanCount}/>
            <Minkan16Button fuCount={fuCount} minkanCount={minkanCount} setfuCount={setFuCount} setMinkanCount={setMinkanCount}/>
            <Ankan16Button fuCount={fuCount} ankanCount={ankanCount} setfuCount={setFuCount} setAnkanCount={setAnkanCount}/>
            <Ankan32Button fuCount={fuCount} ankanCount={ankanCount} setfuCount={setFuCount} setAnkanCount={setAnkanCount}/>          
            </ButtonGroup>
          <Text fontSize="25px" fontWeight="bold">順子:{4-(minkoCount+ankoCount+minkanCount+ankanCount)}、明刻:{minkoCount}、暗刻:{ankoCount}、明カン:{minkanCount}、暗カン:{ankanCount}</Text>
        </Box>
        <Box margin="1% auto">
          <Text>アタマが役牌であれば押す</Text>
          <Button onClick={() => setFuCount(fuCount + 2)}>アタマ</Button>
        </Box>
        <Box margin="1% auto">
          <Text>待ち(ペンチャン・カンチャン・タンキ・ノベタン)のみ</Text>
          <Button onClick={() => setFuCount(fuCount + 2)}>待ち</Button>
        </Box>
        <Text textAlign="center" fontSize="35px" fontWeight="bold">合計:{fuCount}符</Text>
        <Box>
          <Button onClick={fuReset}>符をリセット</Button>
        </Box>
      </Box>
      <Box>
        <Button float="right" onClick={calculation}>
          計算する
        </Button>
      </Box>
      
        <ScorePreview
          score={score}
          oyaTsumoScore={oyaTsumoScore}
          tsumoScore={tsumoScore}
          oyaCheck={oyaCheck}
          tsumoCheck={tsumoCheck}
          honbaCount={honbaCount}
        />
        {yakuStateList.map((yaku, index) => (
          <Box key={index} fontSize="25px" flexDirection="column" borderBottom="solid" width="200px" maxWidth="100%" margin="0 auto" textAlign="center">★{yaku}</Box>
        ))}
        <Box>
        <Button onClick={yakuUpload}>記録する</Button>
        <Button onClick={resetScore}>リセットする</Button>
        </Box>
    </>
  );
};
//TODO 親、本場機能確認、実装
export default ScoreCal;
