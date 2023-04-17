import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    ankanCount:number;
    setfuCount:(arg0:number) => void;
    setAnkanCount:(arg0:number) => void;
};
export const Ankan16Button = (props: Props) => {
  const { fuCount, ankanCount,setfuCount,setAnkanCount} = props;

    const Ankan16Selected = () => {
        setfuCount(fuCount + 16);
        setAnkanCount(ankanCount + 1);
    }

  return (
  <Button onClick={Ankan16Selected}>暗カン(2~8の数牌)</Button>
  );
};