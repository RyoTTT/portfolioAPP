import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Chankan = () => {
  return (
    <Yaku
      title="チャンカン(槍槓)"
      han="1翻"
      situation="鳴きOK"
      content="他プレイヤーが加槓した時、それが当たり牌でロンすると成立。明槓でのみ成立。面子の種類や雀頭はなんでもよい。"
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
