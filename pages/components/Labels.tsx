import React from "react";
import { Input, Box ,Button,Flex} from "@chakra-ui/react";
import { Grid, GridItem, Center,Spacer,Text } from "@chakra-ui/react";
import Link from "next/link";

const Labels = () => {
  return (
    //横幅をもっと広くしたい。Centerにw=maxを指定すると左寄せになる、wを数値で指定すると微妙に左に寄る
    //ボタンを縦に並べたい
    //ロゴは左よせ、ボタンは右よせにしたい
    <>
    <Center flexDirection="column">
      <Flex w="max">
        <Box>
        <Text>ロゴ</Text>
        </Box>
        <Spacer />
        <Box flexDirection="column" float="right">
        <Button><Link href="/">ログイン</Link></Button>
        <Button><Link href="/">ユーザー登録</Link></Button>
        </Box>
      </Flex>
      <Box>
      <Grid templateColumns='repeat(5,1fr)'gap={2} w="1200px" h="40px" textAlign="center">
        <GridItem  bgColor='blue' ><Link href="/">役</Link></GridItem>
        <GridItem  bgColor='blue'>点数計算</GridItem>
        <GridItem  bgColor='blue'>待ち牌確認</GridItem>
        <GridItem  bgColor='blue'>対戦履歴</GridItem>
      </Grid>
      </Box>
      </Center>
    </>
  );
};

export default Labels;
