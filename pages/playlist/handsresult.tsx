import Labels from '@/components/Labels'
import React from 'react'
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
import LinkTabs from '@/components/linkTabs';


const handsresult = () => {
  return (
    <>
    <Labels />
    <LinkTabs />

    <Box margin="0 10%">
    <TableContainer>
          <Table variant="simple">
            <TableCaption>アガリ役履歴</TableCaption>
            <Thead>
              <Tr>
                <Th>役</Th>
                <Th>回数</Th>
                <Th>全体における割合</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>立直</Td>
                <Td>13</Td>
                <Td>70%</Td>
              </Tr>
              <Tr>
                <Td>平和</Td>
                <Td>4</Td>
                <Td>20%</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
    </>
  )
}

export default handsresult