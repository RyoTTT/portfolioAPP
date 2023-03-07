import React from "react";
import { Input, Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

const Labels = () => {
  return (
    <>
      <Box>
        <p>フリーロゴ</p>
        <Link href="/">ログイン</Link>
        <Link href="/">ユーザー登録</Link>
      </Box>
      <Grid templateColumns='repeat(5,1fr)'>
        <GridItem w='100%' bgColor='blue'><Link href="/">役</Link></GridItem>
        <GridItem w='100%' bgColor='blue'>点数計算</GridItem>
        <GridItem w='100%' bgColor='blue'>待ち牌確認</GridItem>
        <GridItem w='100%' bgColor='blue'>対戦履歴</GridItem>
      </Grid>
    </>
  );
};

export default Labels;
