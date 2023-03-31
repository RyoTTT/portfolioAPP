import React from 'react';
import { Input, Box, Button, Flex } from '@chakra-ui/react';
import { Grid, GridItem, Center, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Labels = () => {
  return (
    <>
      <Box>
        <Flex w="100%" justifyContent='space-between' px="20px">
          <Box backgroundColor='yellow' w="100%" maxW="200px" textAlign="center">
            <Text><Link href="/">ロゴ</Link></Text>
          </Box>
          <Box display="flex" flexDirection="row" gap={3}>
            <Button>
              <Link href="/">ログイン</Link>
            </Button>
            <Button>
              <Link href="/">ユーザー登録</Link>
            </Button>
          </Box>
        </Flex>
        <Box>
          <Grid templateColumns="repeat(4,1fr)" gap={2} maxWidth="1200px" w="100%" h="40px" textAlign="center">
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

export default Labels;
