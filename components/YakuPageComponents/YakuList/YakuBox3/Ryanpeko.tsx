import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Ryanpeko = () => {
  return (
    <Yaku
      title="リャンペーコー(二盃口)"
      han="3翻"
      situation="鳴きNG"
      content="          同じ牌かつ同じ順序の順子の２セットからなる役。イーペーコー２つ分。七対子とは複合しない。
      "
      mainColor="red.100"
      subColor="red.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
