import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    ankanCount:number;
    setfuCount:(arg0:number) => void;
    setAnkanCount:(arg0:number) => void;
};
export const Ankan32Button = (props: Props) => {
  const { fuCount, ankanCount,setfuCount,setAnkanCount} = props;

    const Ankan32Selected = () => {
        setfuCount(fuCount + 32);
        setAnkanCount(ankanCount + 1);
    }

  return (
  <Button onClick={Ankan32Selected}>暗カン(1,9,字牌)</Button>
  );
};