import Labels from "@/components/Labels";
import React from "react";
import { Box, Input, Button, Text} from "@chakra-ui/react";
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
import LinkTabs from "@/components/linkTabs";

const totalresult = () => {
  return (
    <>
      <Labels />
      <LinkTabs />
      <Box margin="0 10%">
      <Box margin="5%">
        <Text>１日の総合結果</Text>
        <Input placeholder="総合順位"></Input>
        <Input placeholder="総合得点"></Input>
        <Input placeholder="倍率"></Input>
        <Input type="date"></Input>
        <Button>更新</Button>
      </Box>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>対戦履歴</TableCaption>
            <Thead>
              <Tr>
                <Th>日付</Th>
                <Th>総合得点</Th>
                <Th>総合順位</Th>
                <Th>金額換算</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>2023/03/13</Td>
                <Td>25000</Td>
                <Td>2位</Td>
                <Td>+100</Td>
              </Tr>
              <Tr>
                <Td>2023/03/13</Td>
                <Td>25000</Td>
                <Td>2位</Td>
                <Td>+100</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
    </>
  );
};

export default totalresult;
