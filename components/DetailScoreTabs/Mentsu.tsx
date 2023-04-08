import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td ,
  TableContainer,
} from "@chakra-ui/react";
import Image from "next/image";

const Mentsu = () => {
  return (
    <>
      <Box justifyContent="center" textAlign="center" marginBottom="3%">
        <Heading color="red" fontWeight="bold">面子の種類による加符点</Heading>
        <Text fontSize="18px" marginTop="1%">
          手牌の面子の種類によって与えられる点数が変わります。
          <br />
          明刻(鳴いてできた刻子)、暗刻(鳴かずに揃えた刻子)、明槓(鳴いて揃えた槓子)、暗槓(鳴かずに揃えた槓子)によって得られる点数が変わります。
          <br />
          さらに、それらを中張牌(チュンチャンパイ、2~8の数牌)、幺九牌(ヤオチュウハイ、1、9、字牌)のどちらで揃えたかによっても点数が変わります。
          <br />
          順子には加符点はありません。
        </Text>
      </Box>
      <TableContainer >
        <Table >
          <Tbody >
            <Tr textAlign="center">
              <Td textAlign="center" fontSize="17px" >面子の種類</Td >
              <Td textAlign="center" fontSize="17px" >中張牌(2~8の数牌)</Td >
              <Td textAlign="center" fontSize="17px" >加符点</Td >
              <Td textAlign="center" fontSize="17px" >幺九牌(1、9、字牌)</Td >
              <Td textAlign="center" fontSize="17px" >加符点</Td >
            </Tr>
            <Tr>
              <Td textAlign="center" fontSize="17px" fontWeight="bold">明刻</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/sozu/s2.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/sozu/s2.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/sozu/s2.gif"
                    alt="test"
                    width={50}
                    height={50}
                    style={{transform: 'rotate(90deg)', marginLeft: '6px', marginBottom: '-8px' }}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">2点</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/pinzu/p1.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/pinzu/p1.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/pinzu/p1.gif"
                    alt="test"
                    width={50}
                    height={50}
                    style={{transform: 'rotate(90deg)', marginLeft: '6px', marginBottom: '-8px' }}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">4点</Td >
            </Tr>
            <Tr>
              <Td textAlign="center" fontSize="17px" fontWeight="bold">暗刻</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/manzu/m4.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/manzu/m4.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/manzu/m4.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">4点</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/tupai/chun.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/tupai/chun.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/tupai/chun.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">8点</Td >
            </Tr>
            <Tr>
              <Td textAlign="center" fontSize="17px" fontWeight="bold">明槓</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/pinzu/p6.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/pinzu/p6.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/pinzu/p6.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/pinzu/p6.gif"
                    alt="test"
                    width={50}
                    height={50}
                    style={{transform: 'rotate(90deg)', marginLeft: '13px', marginBottom: '-20px' }}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">8点</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/tupai/pee.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/tupai/pee.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/tupai/pee.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/tupai/pee.gif"
                    alt="test"
                    width={50}
                    height={50}
                    style={{transform: 'rotate(90deg)', marginLeft: '13px', marginBottom: '-20px' }}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">16点</Td >
            </Tr>
            <Tr>
              <Td textAlign="center" fontSize="17px" fontWeight="bold">暗槓</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/sozu/s5.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/sozu/s5.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/sozu/s5.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/sozu/s5.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">16点</Td >
              <Td textAlign="center" fontSize="17px" >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/manzu/m9.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/manzu/m9.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/manzu/m9.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  <Image
                    src="/manzu/m9.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                </Box>
              </Td >
              <Td textAlign="center" fontSize="17px" fontWeight="bold" color="red">32点</Td >
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box textAlign="center">
        <Text fontSize="30px" fontWeight="bold">順子の加符点</Text>
        <Box display="flex" justifyContent="center" margin="2% 0">
        <Image
                    src="/manzu/m4.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                                    <Image
                    src="/manzu/m5.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                                    <Image
                    src="/manzu/m6.gif"
                    alt="test"
                    width={50}
                    height={50}
                  ></Image>
                  </Box>
                  <Text fontSize="17px" >順子の場合、牌の種類や数字に関係なく加符点は0点。</Text>
      </Box>
    </>
  );
};

export default Mentsu;
