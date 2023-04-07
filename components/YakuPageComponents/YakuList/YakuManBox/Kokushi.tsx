import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Kokushi = () => {
  return (
    <Yaku
      title="コクシムソウ(国士無双)"
      han="役満"
      situation="鳴きNG"
      content="                               1,9,字牌全種類1つずつ+1,9,字牌全種類のうちからなんでも良いのでどれか１つ揃えると成立する役。先に1,9,字牌全種類1つずつが揃っていて、あと1,9,字牌全種類のうちから何が来てもよい状態でテンパイすると「国士無双13面待ち」としてダブル役満とする場合もある。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/tupai/nann.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/tupai/haku.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/jatsu.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/chun.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
