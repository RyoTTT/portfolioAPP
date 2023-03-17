import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const DefaultPoint = () => {
  return (
    <>
      <Box>
        <Heading color="red" textAlign="center">
          基本符=副底(フーテイ)
        </Heading>
        <Text textAlign="center" fontSize="20px" marginTop="2%">
          プレイヤーがアガった場合に、そのプレイヤーに必ず付与される基本点のこと。
          <br />
          どのような役でアガっても基本符は付与される。
          <br />
          付与される加符点は<a color="red">20点</a>。
        </Text>
      </Box>
    </>
  );
};

export default DefaultPoint;
