import Labels from "@/components/Labels";
import LinkTabs from "../../components/LinkTabs"
import React from "react";
import { Box, Heading, Highlight, Text } from "@chakra-ui/react";
import Link from "next/link";


const playListHome = () => {
  return (
    <>
      <Labels />
      <LinkTabs />
      <Box marginTop="4%">
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="red.400" borderBottom="double">役アガリ歴</Heading>
          <Text fontSize="18px" margin="1% auto">点数計算の得点計算ページで計算した結果から自分がどの役をどれくらい和了したかを確認できます。</Text>
          <Text fontSize="18px">得点計算ページは<Link href="/calculation/scorecal"><Highlight query={['こちら']} styles={{borderBottom:'solid 1px' }}>こちら</Highlight></Link></Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="blue.400" borderBottom="double">精算</Heading>
          <Text fontSize="18px" margin="1% auto">ゲーム終了時の得点の精算、レート換算ができます。</Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="green.400" borderBottom="double">総合対戦履歴</Heading>
          <Text fontSize="18px" margin="1% auto">麻雀の結果を記録することができます。</Text>
        </Box>
      </Box>
    </>
  );
};

export default playListHome;
