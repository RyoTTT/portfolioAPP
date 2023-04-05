import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const Yaku6 = () => {
  return (
    <>
    <Box border="solid">
      <Box bg="yellow.100" marginBottom="1.5%">
        <Heading fontSize="25px">チンイツ(清一色)</Heading>
        <Box display="flex" fontSize="18px">
          <Text bg="yellow.300" border="solid" margin="0 1%">5翻</Text>
          <Text bg="yellow.300" border="solid" marginRight="1%">鳴きOK</Text>
          <Text bg="yellow.300" border="solid" marginRight="1%">喰い下がり5翻</Text>
        </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">1種類の数牌のみで面子と雀頭を揃えることからなる役。</Text>   
    </Box></>
  )
}

export default Yaku6