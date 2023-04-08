import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const SanshokuD = () => {
  return (
    <Yaku
      title="サンショクドウジュン(三色同順)"
      han="2翻"
      situation="喰い下がり1翻"
      content="          1巡目の捨て牌でリーチすると成立する役。それまでに鳴きが発生していると成立しない。
      面子の種類や雀頭はなんでもよい。"
      mainColor="green.100"
      subColor="green.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
