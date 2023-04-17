import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    minkanCount:number;
    setfuCount:(arg0:number) => void;
    setMinkanCount:(arg0:number) => void;
};
export const Minkan16Button = (props: Props) => {
  const { fuCount, minkanCount,setfuCount,setMinkanCount} = props;

    const Minkan16Selected = () => {
        setfuCount(fuCount + 16);
        setMinkanCount(minkanCount + 1);
    }

  return (
  <Button onClick={Minkan16Selected}>明カン(1,9字牌)</Button>
  );
};