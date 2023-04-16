import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    minkoCount:number;
    setfuCount:(arg0:number) => void;
    setMinkoCount:(arg0:number) => void;
};
// 得点計算に使用する役のボタン
export const Minko2Button = (props: Props) => {
  const { fuCount, minkoCount,setfuCount,setMinkoCount} = props;

  // 自分の役が選択されているかどうかを判定する
    const minko2Selected = () => {
        setfuCount(fuCount + 2);
        setMinkoCount(minkoCount + 1);
    }

  return (
  <Button onClick={minko2Selected}>明刻(2~8の数牌)</Button>
  );
};