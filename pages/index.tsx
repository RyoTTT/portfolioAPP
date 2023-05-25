import Head from "next/head";
import Labels from "../components/Labels";
import { Box, Heading, Text, Highlight } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>麻雀アプリ</title>
      </Head>
      <Labels />
      <Box marginTop="2%">
        <Heading textAlign="center" fontSize="40px" border="dashed">麻雀アプリ</Heading>
        <Box marginTop="4%">
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="red.400" borderBottom="double"><Link href="/hands"><Highlight query={['役']} styles={{borderBottom:'solid 1px', color:'red.400' }}>役</Highlight></Link></Heading>
          <Text fontSize="18px" margin="1% auto">麻雀の役リストです</Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="blue.400" borderBottom="double"><Link href="/calculation/calhome"><Highlight query={['点数計算']} styles={{borderBottom:'solid 1px', color:'blue.400' }}>点数計算</Highlight></Link></Heading>
          <Text fontSize="18px" margin="1% auto">麻雀の点数計算ができます。点数票や符計算の概要も紹介しています。</Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="green.400" borderBottom="double"><Link href="/handcheck"><Highlight query={['待ち牌確認']} styles={{borderBottom:'solid 1px', color:'green.400' }}>待ち牌確認</Highlight></Link></Heading>
          <Text fontSize="18px" margin="1% auto">手牌が一種類の数牌のみの場合、待ち牌確認で聴牌(テンパイ)しているかどうか、何待ちかを確認できます。</Text>
        </Box>
        <Box textAlign="center" width="900px" margin="2% auto">
          <Heading color="yellow.400" borderBottom="double"><Link href="/playlist/playlisthome"><Highlight query={['履歴']} styles={{borderBottom:'solid 1px', color:'yellow.400' }}>履歴</Highlight></Link></Heading>
          <Text fontSize="18px" margin="1% auto">麻雀の色々な結果を記録、確認することができます。</Text>
        </Box>
      </Box>
      </Box>
    </>
  );
}
