import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Hosoku = () => {
  return (
    <>
      <Box  width="1000px" maxWidth="100%" margin="0 auto">
        <Heading textAlign="center" marginBottom="2%" color="red">符計算に関する補足</Heading>
        <Box margin="2%">
            <Heading fontSize="25px" borderBottom="1px" marginBottom="0.5%" color="blue.400">★ピンフツモと七対子の符計算</Heading>
            <Text fontSize="17px">ピンフツモは一律20符、七対子は一律25符となる。</Text>
        </Box>
        <Box margin="2%">
            <Heading fontSize="25px" borderBottom="1px" marginBottom="0.5%" color="blue.400">★シャンポン待ちのロンアガリとツモアガリ</Heading>
            <Text fontSize="17px">シャンポン待ちの性質上、アガった際に必ず明子または暗子ができます。ロンアガリの場合は明子、ツモアガリの場合は暗子として符計算する。</Text>
        </Box>
        <Box margin="2%">
        <Heading fontSize="25px" borderBottom="1px" marginBottom="0.5%" color="blue.400">★符計算の繰り上がり</Heading>
            <Text fontSize="17px">符計算は1の位を全て繰り上げて計算する。例えば32符は40符として点数計算を行う。</Text>
        </Box>
      </Box>
    </>
  );
};

export default Hosoku;
