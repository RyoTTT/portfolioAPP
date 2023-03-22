import React from "react";
import { Box, Heading, Text, Highlight } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Heading>符計算の概要</Heading>
      <Box>
        <Heading>麻雀の点数計算</Heading>
        <Text>
          麻雀の点数は役の数だけでなくアガった時の手牌の形と掛け合わせて決まる。役によって決まるのが飜で、アガった形によって決まるのが符。
        </Text>
        <Box display="flex">
          <Text>符</Text>
          <Text>×</Text>
          <Text>飜数</Text>
          <Text>=</Text>
          <Text>点数</Text>
        </Box>
        <Box>
          <Heading>符</Heading>
          <Text>符計算に合計符を算出します。合計符は以下の５つの要素を合計したものになる。
            <Box>
                <Text>1:基本符</Text>
                <Text>2:アガり方</Text>
                <Text>3:面子の種類</Text>
                <Text>4:雀頭の種類</Text>
                <Text>5:待ちの形</Text>
            </Box>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default About;
