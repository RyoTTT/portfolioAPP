import Labels from "@/components/Labels";
import React from "react";
import { Input, Button, Text, Box } from "@chakra-ui/react";

const HandCheck = () => {
  return (
    <>
      <Labels />
      <Box margin="5% 5%">
        <Box>
          <Text>手配の数字を入力</Text>
          <Input />
          <Button>確認</Button>
          <Button>取り消し</Button>
        </Box>
        <Box marginTop="2%">
          <Text fontSize="30px" fontWeight="bold">
            結果
          </Text>
          <Text textAlign="center" fontSize="50px">
            聴牌
          </Text>

          <Box>
            <Text>待ち牌→</Text>
            <Text>白</Text>
            <Text>中</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HandCheck;
