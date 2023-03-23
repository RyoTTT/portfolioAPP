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
//l.24~30文字を綺麗な横並びにしたい
const About = () => {
  return (
    <>
      <Heading textAlign="center">符計算の概要</Heading>
      <Box margin="3% 0%">
        <Box textAlign="center" margin="1% 1%">
          <Heading marginBottom="0.5%">麻雀の点数計算</Heading>
          <Text fontSize="20px">
            麻雀の点数は役の数だけでなくアガった時の手牌の形と掛け合わせて決まる。役によって決まるのが飜で、アガった形によって決まるのが符。
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          border="solid 2px"
          margin="0% 35%"
          padding="3%"
        >
          <Text
            bg="red.400"
            fontSize="30px"
            borderRadius="500px"
            padding="3% 3%"
          >
            符
          </Text>
          <Text fontSize="25px">×</Text>
          <Text
            bg="red.400"
            fontSize="30px"
            borderRadius="500px"
            padding="3% 3%"
          >
            飜数
          </Text>
          <Text fontSize="30px">=</Text>
          <Text
            bg="red.400"
            fontSize="30px"
            borderRadius="500px"
            padding="3% 3%"
          >
            点数
          </Text>
        </Box>
        <Box>
          <Box textAlign="center" margin="3%">
          <Heading>符</Heading>
          <Text marginTop="0.5%" fontSize="20px">
            符計算は以下の項目ごとに算出され、そこから合計符を算出。合計符は以下の５つの要素を合計したものになる。</Text>
            </Box>
            <Box textAlign="center" flexDirection="column" >
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="red.400" marginRight="0.5%">1:基本符</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="purple.400" marginRight="0.5%">2:アガり方</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="blue.400" marginRight="0.5%">3:面子の種類</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="green.400" marginRight="0.5%">4:雀頭の種類</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="yellow.400">5:待ちの形</Text>
            </Box>
            <Box marginTop="3%">
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="red.400">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">1:基本符</Text>
                <Text fontSize="25px" fontWeight="bold">20符</Text>
                <Text fontSize="20px">フーテイ</Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="purple.400" marginTop="1%">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">2:アガり方</Text>
                <Text fontSize="25px" fontWeight="bold">0符、2符、10符</Text>
                <Text fontSize="20px">鳴きありロンまたは門前ツモまたは門前ロン</Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="blue.400" marginTop="1%" >
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">3:面子の種類</Text>
                <Text fontSize="25px" fontWeight="bold">0〜32符</Text>
                <Text fontSize="20px">
                  2~8の数字牌とそれ以外で分け、それぞれ明刻、暗刻、明槓、暗槓毎に点数が異なる
                </Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="green.400" marginTop="1%">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">4:雀頭の種類</Text>
                <Text fontSize="25px" fontWeight="bold">0符、2符</Text>
                <Text fontSize="20px">三元牌、風牌をアタマにすると2符の加点</Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="yellow.400" marginTop="1%">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">5:待ちの種類</Text>
                <Text fontSize="25px" fontWeight="bold">0符、2符</Text>
                <Text fontSize="20px">
                  タンキ、ペンチャン、カンチャン、ノベタンを待ちすると2符の加点
                </Text>
              </Box>
              <Box margin="0 auto" width="fit-content" padding="2%" textAlign="center" marginTop="1%">
                <Text fontSize="40px">①＋②＋③＋④＋⑤</Text>
                <Text fontSize="30px">合計符</Text>
                <Text fontSize="30px" fontWeight="bold">この合計符と飜数で点数が決まる。</Text>
              </Box>
            </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default About;
