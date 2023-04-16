import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    minkoCount:number;
    setfuCount:(arg0:number) => void;
    setMinkoCount:(arg0:number) => void;
};
// 得点計算に使用する役のボタン
export const Minko4Button = (props: Props) => {
  const { fuCount, minkoCount,setfuCount,setMinkoCount} = props;

  // 自分の役が選択されているかどうかを判定する
    const minko4Selected = () => {
        setfuCount(fuCount + 4);
        setMinkoCount(minkoCount + 1);
    }

  return (
  <Button onClick={minko4Selected}>明刻(1,9,字牌)</Button>
  );
};