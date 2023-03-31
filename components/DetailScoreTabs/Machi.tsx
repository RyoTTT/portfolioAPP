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
import Image from "next/image";

const Machi = () => {
  return (
    <>
      <Box textAlign="center" marginBottom="3%">
        <Heading color="red">聴牌時の待ちによる加符点</Heading>
        <Text>
          テンパイした時、待ちの種類によって毎に決められた加符点が与えられる。アガリ牌が1枚の時は2点、2枚以上の時は0点となる。
        </Text>
      </Box>
      <Box margin="0 auto" width="100%" maxWidth="500px">
        <Table
          border="solid"
          borderColor="red.200"
          colorScheme="red"
          fontSize="15px"
          justifyContent="center"
          
        >
          <TableContainer>
            <Tbody>
              <Tr>
                <Td colSpan={3} fontSize="30px" textAlign="center">
                  待ちの種類
                </Td>
              </Tr>
              <Tr height="">
                <Td
                  colSpan={3}
                  fontSize="30px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  両面(リャンメン)待ち
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">手牌</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/sozu/s2.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/sozu/s3.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">当たり牌(待ち牌)</Box>
                  <Box display="flex" justifyContent="space-between">
                    <Image
                      src="/sozu/s1.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/sozu/s4.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize="40px">
                    0点
                  </Text>
                </Td>
              </Tr>
              <Tr height="">
                <Td
                  colSpan={3}
                  fontSize="30px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  双碰(シャンポン)待ち
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">手牌</Box>
                  <Box display="flex">
                    <Box
                      display="flex"
                      marginRight="30%"
                      justifyContent="center"
                    >
                      <Image
                        src="/pinzu/p2.gif"
                        alt="test"
                        width={40}
                        height={40}
                      ></Image>
                      <Image
                        src="/pinzu/p2.gif"
                        alt="test"
                        width={40}
                        height={40}
                      ></Image>
                    </Box>
                    <Box display="flex">
                      <Image
                        src="/manzu/m4.gif"
                        alt="test"
                        width={40}
                        height={40}
                      ></Image>
                      <Image
                        src="/manzu/m4.gif"
                        alt="test"
                        width={40}
                        height={40}
                      ></Image>
                    </Box>
                  </Box>
                </Td>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">当たり牌(待ち牌)</Box>
                  <Box display="flex" justifyContent="space-between">
                    <Image
                      src="/pinzu/p2.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/manzu/m4.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize="40px">
                    0点
                  </Text>
                </Td>
              </Tr>
              <Tr height="">
                <Td
                  colSpan={3}
                  fontSize="30px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  嵌張(カンチャン)待ち
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">手牌</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/manzu/m6.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/manzu/m8.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">当たり牌(待ち牌)</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/manzu/m7.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize="40px">
                    2点
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td
                  colSpan={3}
                  fontSize="30px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  辺張(ぺンチャン)待ち
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">手牌</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/pinzu/p8.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/pinzu/p9.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">当たり牌(待ち牌)</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/pinzu/p7.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize="40px">
                    2点
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td
                  colSpan={3}
                  fontSize="30px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  単騎(タンキ)待ち
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">手牌</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/tupai/jatsu.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">当たり牌(待ち牌)</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/tupai/jatsu.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize="40px">
                    2点
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td
                  colSpan={3}
                  fontSize="30px"
                  fontWeight="bold"
                  textAlign="center"
                >
                  ノベタン待ち
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">手牌</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/sozu/s4.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/sozu/s5.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/sozu/s6.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                    <Image
                      src="/sozu/s7.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Box textAlign="center" fontSize="15px" marginBottom="5%">当たり牌(待ち牌)</Box>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/sozu/s4.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>{" "}
                    <Image
                      src="/sozu/s7.gif"
                      alt="test"
                      width={40}
                      height={40}
                    ></Image>
                  </Box>
                </Td>
                <Td>
                  <Text fontWeight="bold" fontSize="40px">
                    2点
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </TableContainer>
        </Table>
      </Box>
    </>
  );
};

export default Machi;
