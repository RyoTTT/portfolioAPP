import React from 'react'
import {Box,Input,Button,Text} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Labels from '../../components/Labels'
import LinkTabs from '@/components/linkTabs'
const PlayList = () => {
  return (
    <>
    <Labels />
    <LinkTabs />
    <Box>
    <Box margin="1% 20%">
    <Input placeholder='得点を入力'></Input>
    <Input placeholder='順位'></Input>
    <Input placeholder='精算した点数'></Input>
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
            <Th>卓上の得点</Th>
            <Th>順位</Th>
            <Th>精算した得点</Th>
          </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2023/03/13</Td>
              <Td>22000</Td>
              <Td>3位</Td>
              <Td>-11</Td>
            </Tr>
            <Tr>
              <Td>2023/03/13</Td>
              <Td>25000</Td>
              <Td>2位</Td>
              <Td>+10</Td>
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