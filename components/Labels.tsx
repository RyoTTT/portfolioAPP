import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Grid, GridItem, Center, Spacer, Text } from '@chakra-ui/react';
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
      <Box width="2000px" maxWidth="100%">
        <Flex w="100%" justifyContent='space-between' px="20px">
          <Box backgroundColor='yellow' w="100%" maxW="200px" textAlign="center">
            <Text><Link href="/">ロゴ</Link></Text>
          </Box>
          {user ? <Box fontSize="25px" fontWeight="bold">{user}のページ</Box> : <Box fontSize="25px" fontWeight="bold">ゲスト</Box> }
          <Box display="flex" flexDirection="row" gap={3}>
            { user ? <Button onClick={LogOut}>
            <Link href="/">
              ログアウト
              </Link>
            </Button> : null}
            <Button>
              <Link href="/login">ログイン</Link>
            </Button>
            <Button>
              <Link href="/subscrimbe">ユーザー登録</Link>
            </Button>
          </Box>
        </Flex>
        <Box>
          <Grid templateColumns="repeat(4,1fr)" gap={2} maxWidth="100%" w="2000px" h="40px" textAlign="center" fontWeight="bold">
            <GridItem bgColor="blue.200">
              <Link href="../hands">役</Link>
            </GridItem>
            <GridItem bgColor="blue.200"><Link href="/calculation/calhome">点数計算</Link></GridItem>
            <GridItem bgColor="blue.200"><Link href="../handcheck">待ち牌確認</Link></GridItem>
            <GridItem bgColor="blue.200"><Link href="../playlist/playlisthome">対戦履歴</Link></GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
//TODO ４つのタブを真ん中に寄せたい。
export default Labels;
