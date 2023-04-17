import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    ankoCount:number;
    setfuCount:(arg0:number) => void;
    setAnkoCount:(arg0:number) => void;
};
export const Anko8Button = (props: Props) => {
  const { fuCount, ankoCount,setfuCount,setAnkoCount} = props;

  // 自分の役が選択されているかどうかを判定する
    const anko8Selected = () => {
        setfuCount(fuCount + 8);
        setAnkoCount(ankoCount + 1);
    }

  return (
  <Button onClick={anko8Selected}>暗刻(1,9,字牌)</Button>
  );
};