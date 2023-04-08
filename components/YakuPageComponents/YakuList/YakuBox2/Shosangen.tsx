import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Shosangen= () => {
  return (
    <Yaku
      title="ショウサンゲン(小三元)"
      han="2翻"
      situation="鳴きOK"
      content="                    2面子と雀頭を三元牌で揃えると成立する役。残りはなんでもよい。
      "
      mainColor="green.100"
      subColor="green.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/chun.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/chun.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/chun.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
