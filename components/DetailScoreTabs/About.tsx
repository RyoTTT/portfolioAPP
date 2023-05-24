import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Heading textAlign="center">符計算の概要</Heading>
      <Box margin="3% 0%" width="100%">
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
          margin="0 auto"
          padding="3%"
          alignItems="center"
          gap="10px"
          maxWidth="500px"
          width="100%"
        >
          <Box
            bg="red.400"
            fontSize="30px"
            padding="3% 3%"

            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="100%"
          >
            符
          </Box>
          <Text fontSize="25px">×</Text>
          <Box
            bg="red.400"
            fontSize="30px"
            padding="3% 3%"
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="100%"
          >
            飜数
          </Box>
          <Text fontSize="30px">=</Text>
          <Box
            bg="red.400"
            fontSize="30px"
            padding="3% 3%"
            width="100px"
            height="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="100%"
          >
            点数
          </Box>
        </Box>
        <Box>
          <Box textAlign="center" margin="3%">
          <Heading>符</Heading>
          <Text marginTop="0.5%" fontSize="20px">
            符計算は以下の項目ごとに算出され、そこから合計符を算出。合計符は以下の５つの要素を合計したものになる。</Text>
            </Box>
            <Box textAlign="center" flexDirection="column" >
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="red.200" marginRight="0.5%">1:基本符</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="purple.200" marginRight="0.5%">2:アガり方</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="blue.200" marginRight="0.5%">3:面子の種類</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="green.200" marginRight="0.5%">4:雀頭の種類</Text>
              <Text border="solid" display="inline-block" textAlign="center" padding="1%" fontSize="30px" fontWeight="bold" bg="yellow.200">5:待ちの形</Text>
            </Box>
            <Box marginTop="3%">
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="red.200">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">1:基本符</Text>
                <Text fontSize="25px" fontWeight="bold">20符</Text>
                <Text fontSize="20px">フーテイ</Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="purple.200" marginTop="1%">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">2:アガり方</Text>
                <Text fontSize="25px" fontWeight="bold">0符、2符、10符</Text>
                <Text fontSize="20px">鳴きありロンまたは門前ツモまたは門前ロン</Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="blue.200" marginTop="1%" >
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">3:面子の種類</Text>
                <Text fontSize="25px" fontWeight="bold">0〜32符</Text>
                <Text fontSize="20px">
                  2~8の数字牌とそれ以外で分け、それぞれ明刻、暗刻、明槓、暗槓毎に点数が異なる
                </Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="green.200" marginTop="1%">
                <Text fontSize="30px" border="2px dotted black" fontWeight="bold">4:雀頭の種類</Text>
                <Text fontSize="25px" fontWeight="bold">0符、2符</Text>
                <Text fontSize="20px">三元牌、風牌をアタマにすると2符の加点</Text>
              </Box>
              <Box margin="0 auto" border="solid" width="fit-content" textAlign="center" padding="2%" bg="yellow.200" marginTop="1%">
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
