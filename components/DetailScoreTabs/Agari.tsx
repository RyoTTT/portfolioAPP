import React from "react";
import { Box, Heading, Text, Highlight } from "@chakra-ui/react";

const Agari = () => {
  return (
    <>
      <Box textAlign="center">
        <Heading color="red">門前加符とツモ符</Heading>
        <Text marginTop="1%">
          役があってアガった時に、
          <Highlight
            query="門前で"
            styles={{ px: "1", py: "1", bg: "red.200" }}
          >
            門前で
          </Highlight>
          (他家からポン、チーをせずに)ロンアガリかツモアガリをすると追加される加符点のこと。
        </Text>
      </Box>
      <Box margin="3% 5%">
        <Heading fontSize="25px" borderBottom="1px" marginBottom="0.5%" color="green.400">★門前加符</Heading>
        <Text fontSize="18px">
          <Highlight
            query={["10", "0"]}
            styles={{ px: "1", py: "1", bg: "red.200" }}
          >
            門前でのみ手牌を揃えてロンでアガった時に得られる加符点で10点が加算される。
            他家から一回でも鳴いてアガると門前加符ではなくなるので加点は0点。
          </Highlight>
        </Text>
      </Box>
      <Box margin="3% 5%">
        <Heading fontSize="25px" borderBottom="1px" marginBottom="0.5%" color="green.400">★ツモ符</Heading>
        <Text>
          <Highlight
            query={["ツモ", "2"]}
            styles={{ px: "1", py: "1", bg: "red.200" }}
          >
            ツモでアガった時に得られる加符点で2点が加算される。
            他家から何回鳴いてアガってもツモ符は2点加点される。
          </Highlight>
        </Text>
      </Box>
    </>
  );
};

export default Agari;
