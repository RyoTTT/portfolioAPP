import React from "react";
import { Box, Heading, Text, Highlight } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Atama = () => {
  return (
    <>
      <Box>
        <Heading>アタマ(雀頭)の加符点</Heading>
        <Text>
          <Highlight
            query={["0", "2"]}
            styles={{ px: "1", py: "1", bg: "red.200" }}
          >
            どの種類でアタマを作ったかで、加符点が与えられる。基本的には数牌のアタマでは加符点は0点で、役牌のアタマでは2点の加符点となる。
          </Highlight>
        </Text>
      </Box>
      <Box>
        <Text>風牌が2点の加符点となる場合</Text>
        <Text>
          アタマの風牌が自風または場風と同じ場合のみ、2点の加符点が与えられる。
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
              <Tr>
                <Td>場風が「東」、自風が「西」</Td>
                <Td>画像</Td>
                <Td>0点</Td>
              </Tr>
              <Tr>
                <Td>場風が「東」、自風が「北」</Td>
                <Td>画像</Td>
                <Td>0点</Td>
              </Tr>
              <Tr>
                <Td>場風が「南」、自風が「東」</Td>
                <Td>画像</Td>
                <Td>0点</Td>
              </Tr>
              <Tr>
                <Td>場風が「南」、自風が「南」</Td>
                <Td>画像</Td>
                <Td>0点</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Heading>三元牌がアタマの場合</Heading>
        <text>画像</text>
        <Text>三元牌はどのような状況でもアタマにした場合2点の加符点が与えられる。</Text>
      </Box>
    </>
  );
};

export default Atama;
