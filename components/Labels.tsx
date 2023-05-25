import React from 'react';
import { Box, Button, Flex, Highlight, Image, Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@/firebase';

const Labels = () => {
  const auth = getAuth(app);
  const user = auth.currentUser?.displayName;

  const LogOut = async () => {
    await signOut(auth);
    alert("ログアウトしました")
  };

  return (
    <>
      <Box  maxWidth="100%" margin="1% 1%">
        <Flex w="100%" justifyContent='space-between' px="20px" bg="red.100">
            <Link href="/"><Image src="/ロゴ1.jpeg" alt="rogo" w="100px" h="60px" borderRadius="30px" marginLeft="100%" padding="0"/></Link>
          {user ? <Box fontSize="40px" fontWeight="bold">{user}のページ</Box> : <Box fontSize="40px" fontWeight="bold">ゲスト</Box> }
          <Box display="flex" flexDirection="row" gap={3}>
            { user ? <Button onClick={LogOut} margin="auto">
            <Link href="/">
              ログアウト
              </Link>
            </Button> : 
            <>
            <Button margin="auto">
            <Link href="/login">ログイン</Link>
            </Button>
            <Button margin="auto">
              <Link href="/subscrimbe">ユーザー登録</Link>
            </Button>
            </>}
          </Box>
        </Flex>
        <Box marginTop="1%">
          <Grid templateColumns="repeat(4,1fr)" gap={2} maxWidth="100%" w="2000px" h="40px" textAlign="center" fontWeight="bold" >
            <GridItem bgColor="blue.200" borderRadius="10px" >
              <Link href="/hands"><Highlight query={["役"]}styles={{borderBottom:'solid 1px'}}>役</Highlight></Link>
            </GridItem>
            <GridItem bgColor="blue.200" borderRadius="10px"><Link href="/calculation/calhome" ><Highlight query={["点数計算"]}styles={{borderBottom:'solid 1px'}}>点数計算</Highlight></Link></GridItem>
            <GridItem bgColor="blue.200" borderRadius="10px"><Link href="/handcheck"><Highlight query={["待ち牌確認"]}styles={{borderBottom:'solid 1px'}}>待ち牌確認</Highlight></Link></GridItem>
            <GridItem bgColor="blue.200" borderRadius="10px"><Link href="/playlist/playlisthome"><Highlight query={["履歴"]}styles={{borderBottom:'solid 1px'}}>履歴</Highlight></Link></GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Labels;
