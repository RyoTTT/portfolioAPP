import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Yakuhai = () => {
  return (
    <Yaku
      title="ヤクハイ(役牌)"
      han="1翻"
      situation="鳴きOK"
      content="手牌に自風牌または場風牌または三元牌の刻子があると成立する役。複数の役牌を刻子で持っていればその数だけ役牌の役が成立。雀頭の場合は成立しない。"
      mainColor="blue.100"
      subColor="blue.300"
    >
      <Box display="flex" justifyContent="center">
      <Image
            src="/tupai/haku.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/haku.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/haku.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
