import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Tenho = () => {
  return (
    <Yaku
      title="チーホウ、テンホウ(地和、天和)"
      han="役満"
      situation="鳴きNG"
      content="                                         自分が子の時、配牌の時点ですでにテンパイし第一ツモでアガるとチーホウが成立する。自分が親の時、配牌の時点ですでにテンパイし第一ツモでアガるとテンホウが成立する。テンホウはダブル役満とする場合もある。テンパイの形はなんでも良く、役がなくても良い。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
