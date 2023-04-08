import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const SanshokuK = () => {
  return (
    <Yaku
      title="サンショクドウコウ(三色同刻)"
      han="2翻"
      situation="鳴きOK"
      content="                    マンズ、ソーズ、ピンズでそれぞれ同じ刻子を揃えると成立する役。残りはなんでも良い。
      "
      mainColor="green.100"
      subColor="green.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
