import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    oyaCheck: boolean;
    oyaClick: boolean;
    setOyaCheck:(arg0:boolean) => void;
    setOyaClick:(arg0:boolean) => void;
};
// 得点計算に使用する役のボタン
export const OyaButton = (props: Props) => {
  const { oyaCheck, oyaClick,setOyaCheck,setOyaClick} = props;

  // 自分の役が選択されているかどうかを判定する
    const oyaselected = () => {
        setOyaCheck(!oyaCheck);
        setOyaClick(!oyaClick);
    }

  return (
  <Button onClick={oyaselected} bg={oyaClick ? "red.400" : "blue.200"} _active={{bg:"red.400"}}>親</Button>
  );
};