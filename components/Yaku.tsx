import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Yaku = () => {
  return (
    <Box border="solid">
      <Box bg="red.100" marginBottom="1.5%">
        <Heading fontSize="25px" color="red.400">リャンペーコー(二盃口)</Heading>
        <Box display="flex" fontSize="18px">
          <Text bg="red.300" border="solid" margin="0 1%">3飜</Text>
          <Text bg="red.300" border="solid" marginRight="1%">門前のみ</Text>
          <Text bg="red.300" border="solid" marginRight="1%">喰い下がりなし</Text>
        </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">同じ牌かつ同じ順序の順子の２セットからなる役。イーペーコー２つ分。七対子とは複合しない。</Text>
      
    </Box>
  );
};

export default Yaku;
