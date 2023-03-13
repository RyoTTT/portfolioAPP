import React from 'react'
import {Box,Input,Button,Text} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Labels from '../../components/Labels'
const PlayList = () => {
  return (
    <>
    <Labels />
    <Box margin="10% 10%">
    <Box margin="1% 20%">
    <Input placeholder='点数を入力'></Input>
    <Input placeholder='順位'></Input>
    <Button>追加</Button>
    </Box>
    <Box>
    <Text>対戦履歴</Text> 
    <Box>
      <Text>平均順位:3位</Text>
      <Text>平均得点:25000点</Text>
      </Box>  
     <TableContainer>
      <Table variant="simple">
        <TableCaption>対戦履歴</TableCaption>
        <Thead>
          <Tr>
            <Th>日付</Th>
            <Th>点数</Th>
            <Th>順位</Th>
          </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2023/03/13</Td>
              <Td>25000</Td>
              <Td>2位</Td>
            </Tr>
            <Tr>
              <Td>2023/03/13</Td>
              <Td>25000</Td>
              <Td>2位</Td>
            </Tr>
          </Tbody>
        
      </Table>
    </TableContainer>
    </Box>
    </Box>

    </>
  )
}

export default PlayList