import React from "react";
import CalculationHome from "./calhome";
import { Box, Text, Button, ButtonGroup, Center } from "@chakra-ui/react";

const ScoreCal = () => {
  return (
    <>
      <CalculationHome />
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          卓の状況
        </Text>
        <ButtonGroup>
          <Button>親</Button>
          <Button>x本場</Button>
        </ButtonGroup>
      </Box>
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          役を選択
        </Text>
        <Box>
          <Text>1飜役</Text>
          <ButtonGroup>
            <Button>立直</Button>
            <Button>一発</Button>
            <Button>ツモ</Button>
            <Button>平和</Button>
            <Button>断么</Button>
            <Button>白</Button>
            <Button>發</Button>
            <Button>中</Button>
            <Button>自風</Button>
            <Button>場風</Button>
            <Button>一盃口</Button>
            <Button>ハイテイ</Button>
            <Button>嶺上開花</Button>
            <Button>チャンカン</Button>
            <Button>三色同順(鳴き)</Button>
            <Button>一気通貫(鳴き)</Button>
            <Button>チャンタ(鳴き)</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>2飜役</Text>
          <ButtonGroup>
            <Button>ダブル立直</Button>
            <Button>三色同順</Button>
            <Button>三色同刻</Button>
            <Button>三暗刻</Button>
            <Button>一気通貫</Button>
            <Button>七対子</Button>
            <Button>トイトイ</Button>
            <Button>チャンタ</Button>
            <Button>三槓子</Button>
            <Button>小三元</Button>
            <Button>混老頭</Button>
            <Button>混一色(鳴き)</Button>
            <Button>ジュンチャン(鳴き)</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>3飜役</Text>
          <ButtonGroup>
            <Button>混一色</Button>
            <Button>ジュンチャン</Button>
            <Button>二盃口</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>その他</Text>
          <Button>チンイツ(鳴き)(5飜)</Button>
          <Button>チンイツ(6飜)</Button>
        </Box>
        <Box display="flex">
          <Button>ドラ+1</Button>
          <Text>ドラ:x</Text>
        </Box>
      </Box>
      <Box border="solid" margin="15px 15px">
        <Text fontSize="20px" fontWeight="bold">
          符計算
        </Text>
        <Box>
          <Text>面子</Text>
          <ButtonGroup>
            <Button>明刻(2~8の数字牌)</Button>
            <Button>明刻</Button>
            <Button>暗刻(2~8の数字牌)</Button>
            <Button>暗刻</Button>
            <Button>明カン(2~8の数字牌)</Button>
            <Button>明カン</Button>
            <Button>暗カン(2~8の数字牌)</Button>
            <Button>暗カン</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Text>アタマが役牌であれば押す</Text>
          <Button>アタマ</Button>
        </Box>
        <Box>
          <Text>待ち(ペンチャン・カンチャン・タンキ・ノベタン)のみ</Text>
          <Button>待ち</Button>
        </Box>
      </Box>
      <Box>
        <Button float="right">計算する</Button>
      </Box>
      <Center>
        <Text fontSize="30px">xxx点</Text>
        <Button>記録する</Button>
      </Center>
    </>
  );
};

export default ScoreCal;
