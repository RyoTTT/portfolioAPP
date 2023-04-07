import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Pinhu = () => {
  return (
    <Yaku
      title="ピンフ(平和)"
      han="1翻"
      situation="鳴きNG"
      content="           面子を全て順子で揃えると成立する役。テンパイした時に必ずリャンメン待ちでなければならない。雀頭
      が自風牌または場風牌または三元牌だと成立しない。
      "
      mainColor="blue.100"
      subColor="blue.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
