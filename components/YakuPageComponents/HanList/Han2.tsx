import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { DoubleReach } from "../YakuList/YakuBox2/DoubleReach";
import { Chitoitsu } from "../YakuList/YakuBox2/Chitoitsu";
import { SanshokuD } from "../YakuList/YakuBox2/SanshokuD";
import { Itsu } from "../YakuList/YakuBox2/Itsu";
import { Chanta } from "../YakuList/YakuBox2/Chanta";
import { SanshokuK } from "../YakuList/YakuBox2/SanshokuK";
import { Sananko } from "../YakuList/YakuBox2/Sananko";
import { Sankantsu } from "../YakuList/YakuBox2/Sankantsu";
import { Shosangen } from "../YakuList/YakuBox2/Shosangen";
import { Honroutou } from "../YakuList/YakuBox2/Honrourou";
import { ToiToi } from "../YakuList/YakuBox2/Toitoi";

const Yaku2 = () => {
  return (
    <>
      <DoubleReach />
      <Chitoitsu />
      <SanshokuD />
      <Itsu />
      <Chanta />
      <SanshokuK />
      <Sananko />
      <Sankantsu />
      <Shosangen />
      <Honroutou />
      <ToiToi />
    </>
  );
};

export default Yaku2;
