import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  fuCount: number;
  ankoCount: number;
  setfuCount: (arg0: number) => void;
  setAnkoCount: (arg0: number) => void;
};
export const Anko4Button = (props: Props) => {
  const { fuCount, ankoCount, setfuCount, setAnkoCount } = props;

  // 自分の役が選択されているかどうかを判定する
  const anko4Selected = () => {
    setfuCount(fuCount + 4);
    setAnkoCount(ankoCount + 1);
  };

  return <Button onClick={anko4Selected}>暗刻(2~8の数牌)</Button>;
};
