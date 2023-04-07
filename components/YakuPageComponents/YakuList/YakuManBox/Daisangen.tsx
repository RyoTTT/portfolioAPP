import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Daisangen = () => {
  return (
    <Yaku
      title="ダイサンゲン(大三元)"
      han="役満"
      situation="鳴きOK"
      content="                               三元牌の刻子を揃えると成立する役。明刻でも暗刻でもよい。三元牌の刻子が揃っていれば他はなんでもよい。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
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
          <Image
            src="/tupai/jatsu.gif"
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
          <Image
            src="/tupai/chun.gif"
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
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
