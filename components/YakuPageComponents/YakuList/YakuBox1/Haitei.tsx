import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Haitei = () => {
  return (
    <Yaku
      title="ハイテイ(海底摸月)とホウテイ(河底撈魚)
      "
      han="1翻"
      situation="鳴きOK"
      content="牌山の最後の牌を海底牌(ハイテイハイ)といい、それを自分でツモるとハイテイ、他プレイヤーが海底牌をツモって打牌した牌でアガるとホウテイが成立。自分でツモるか、相手の打牌でアガるかの違い。面子の種類や雀頭はなんでもよい。
      "
      mainColor="blue.100"
      subColor="blue.300"
    >
      <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s7.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
