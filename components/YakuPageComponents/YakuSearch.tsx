import React from 'react'
import { Box, Heading, Text, Input, Select,Button } from '@chakra-ui/react';

const YakuSearch = () => {
  return (
    <>
    <Box width="1000px" maxWidth="100%" margin="0 auto">
      <Heading color="red" fontWeight="bold" textAlign="center">役を検索</Heading>
      <Box width="500px" maxWidth="100%" margin="5% auto">
        <Box>
        <Input placeholder='名前を入力' margin="3% auto" ></Input>
        <Select placeholder='鳴きの可否'>
          <option value="1">鳴きOK</option>
          <option value="2">喰い下がりアリ</option>
          <option value="3">鳴きNG</option>
        </Select>
        <Button float="right" size="md" margin="2% auto" bg="blue.100" fontWeight="bold">検索</Button>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default YakuSearch