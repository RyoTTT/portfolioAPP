import React from "react";
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import Labels from "../../components/Labels";
import Link from "next/link";
import CalcTabs from "@/components/CalcTabs";

const CalculationHome = () => {
  return (
    <>
      <Labels />
      <CalcTabs />
      <Box marginTop="4%">
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="red.400" borderBottom="double">得点計算</Heading>
          <Text fontSize="18px" margin="1% auto">麻雀の得点計算ができます。計算したものを記録すると役アガリ歴ページで履歴を確認できます。</Text>
          <Text fontSize="18px">役アガリ歴ページは<Link href="/playlist/handsresult">こちら</Link></Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="blue.400" borderBottom="double">点数表</Heading>
          <Text fontSize="18px" margin="1% auto">麻雀の点数票です。</Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="green.400" borderBottom="double">符計算</Heading>
          <Text fontSize="18px" margin="1% auto">符計算のルールを掲載しています。</Text>
        </Box>
      </Box>
    </>
  );
};

export default CalculationHome;
