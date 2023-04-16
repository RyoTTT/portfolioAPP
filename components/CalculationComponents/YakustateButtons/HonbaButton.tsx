import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    honbaCount: number;
    honbaClick: boolean;
    setHonbaCount:(arg0:number) => void;
    setHonbaClick:(arg0:boolean) => void;
};
// 得点計算に使用する役のボタン
export const HonbaButton = (props: Props) => {
  const { honbaCount, honbaClick,setHonbaCount,setHonbaClick} = props;

  // 自分の役が選択されているかどうかを判定する
    const honbaselected = () => {
        setHonbaCount(honbaCount + 1);
        setHonbaClick(!honbaClick);
    }

  return (
  <Button onClick={honbaselected} bg={honbaClick ? "red.400" : "blue.200"} _active={{bg:"red.400"}}>本場変更</Button>
  );
};