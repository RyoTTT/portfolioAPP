import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const ToiToi = () => {
  return (
    <Yaku
      title="ダブルリーチ(ダブル立直)"
      han="2翻"
      situation="鳴きNG"
      content="          1巡目の捨て牌でリーチすると成立する役。それまでに鳴きが発生していると成立しない。
      面子の種類や雀頭はなんでもよい。"
      mainColor="green.100"
      subColor="green.300"
    >
      <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s7.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
