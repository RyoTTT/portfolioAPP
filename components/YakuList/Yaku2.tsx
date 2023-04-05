import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Yaku2 = () => {
  return (
    <>
      <Box border="solid" margin="2% 0">
        <Box bg="blue.100" marginBottom="1.5%">
          <Heading fontSize="25px">イーペーコー(一盃口)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="blue.300" border="solid" margin="0 1%">
              1翻
            </Text>
            <Text bg="blue.300" border="solid" marginRight="1%">
              鳴きNG
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          同じ種類の数牌で同じ順子を2面子揃えると成立する役。七対子とは複合しない。
        </Text>
      </Box>
    </>
  );
};

export default Yaku2;
