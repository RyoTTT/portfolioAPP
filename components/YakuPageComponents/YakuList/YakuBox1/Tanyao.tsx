import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Tanyao = () => {
  return (
    <Yaku
      title="タンヤオ(断公九)"
      han="1翻"
      situation="鳴きOK"
      content="          中張牌(数牌の2~8)のみで面子と雀頭を作ると成立する役。鳴いても成立することが多いが、鳴くと成立しないルールもある。
      "
      mainColor="blue.100"
      subColor="blue.300"
    >
        <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s4.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
