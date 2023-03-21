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

const Atama = () => {
  return (
    <>
      <Box textAlign="center" marginBottom="3%">
        <Heading color="red">アタマ(雀頭)の加符点</Heading>
        <Text>
          <Highlight
            query={["0", "2"]}
            styles={{ px: "1", py: "1", bg: "red.200" }}
          >
            どの種類でアタマを作ったかで、加符点が与えられる。基本的には数牌のアタマでは加符点は0点で、役牌のアタマでは2点の加符点となる。
          </Highlight>
        </Text>   
      </Box>
      <Box textAlign="center">
    <Heading>風牌の加符点について</Heading>
    <Text>
        風牌が2点の加符点となる場合→アタマの風牌が自風または場風と同じ場合のみ、2点の加符点が与えられる。
        </Text>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th fontSize="20px">場の状況</Th>
                <Th fontSize="20px">自分のアタマ</Th>
                <Th fontSize="20px">加符点</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr fontSize="20px">
                <Td>場風が「東」、自風が「西」</Td>
                <Td display="flex">
                  <Image
                    src="/tupai/nann.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                  <Image
                    src="/tupai/nann.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                </Td>
                <Td>0点</Td>
              </Tr>
              <Tr fontSize="20px">
                <Td>場風が「東」、自風が「北」</Td>
                <Td display="flex">
                  <Image
                    src="/tupai/pee.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                  <Image
                    src="/tupai/pee.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                </Td>
                <Td>2点</Td>
              </Tr>
              <Tr fontSize="20px">
                <Td>場風が「南」、自風が「東」</Td>
                <Td display="flex">
                  <Image
                    src="/tupai/nann.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                  <Image
                    src="/tupai/nann.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                </Td>
                <Td>2点</Td>
              </Tr>
              <Tr fontSize="20px">
                <Td>場風が「東」、自風が「東」</Td>
                <Td display="flex">
                  <Image
                    src="/tupai/ton.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                  <Image
                    src="/tupai/ton.gif"
                    alt="test"
                    width={40}
                    height={40}
                  ></Image>
                </Td>
                <Td>2点(ルールによっては4点)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box textAlign="center" margin="3%">
        <Heading>三元牌がアタマの場合</Heading>
        <Box display="flex" justifyContent="center">
        <Image src="/tupai/chun.gif" alt="test" width={40} height={40}></Image>
        <Image src="/tupai/haku.gif" alt="test" width={40} height={40}></Image>
        <Image src="/tupai/jatsu.gif" alt="test" width={40} height={40}></Image>
        </Box>
        <Text>
          三元牌はどのような状況でもアタマにした場合2点の加符点が与えられる。
        </Text>
      </Box>
      <Box textAlign="center" margin="3%">
        <Heading>数牌がアタマの場合</Heading>
        <Box display="flex" justifyContent="center" marginBottom="1%">
        <Image src="/manzu/m2.gif" alt="test" width={40} height={40}></Image>
        <Image src="/manzu/m2.gif" alt="test" width={40} height={40}></Image>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="1%">
        <Image src="/pinzu/p1.gif" alt="test" width={40} height={40}></Image>
        <Image src="/pinzu/p1.gif" alt="test" width={40} height={40}></Image>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="1%">
        <Image src="/sozu/s8.gif" alt="test" width={40} height={40}></Image>
        <Image src="/sozu/s8.gif" alt="test" width={40} height={40}></Image>
        </Box>
        <Text>
          数牌はどのような状況でもアタマにした場合加符点はない。
        </Text>
      </Box>
    </>
  );
};

export default Atama;
