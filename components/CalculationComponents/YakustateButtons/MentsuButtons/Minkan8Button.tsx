import React from 'react'
import { Button } from '@chakra-ui/react';



type Props = {
    fuCount: number;
    minkanCount:number;
    setfuCount:(arg0:number) => void;
    setMinkanCount:(arg0:number) => void;
};
export const Minkan8Button = (props: Props) => {
  const { fuCount, minkanCount,setfuCount,setMinkanCount} = props;

    const Minkan8Selected = () => {
        setfuCount(fuCount + 8);
        setMinkanCount(minkanCount + 1);
    }

  return (
  <Button onClick={Minkan8Selected}>明カン(2~8の数牌)</Button>
  );
};