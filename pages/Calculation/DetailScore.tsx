import React from "react";
import CalculationHome from "./calhome";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

//next/Imageを使って画像を使いたい
const DetailScore = () => {
  return (
    <>
      <CalculationHome />
      <Box>
        <Image src="/images/pinzu/p1.gif"  alt="m1" width="20" height="20"/>
      </Box>
    </>
  );
};

export default DetailScore;
