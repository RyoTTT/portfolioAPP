import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Ipeko = () => {
  return (
    <Yaku
      title="イーペーコー(一盃口)"
      han="1翻"
      situation="鳴きNG"
      content="                 同じ種類の数牌で同じ順子を2面子揃えると成立する役。七対子とは複合しない。

      "
      mainColor="blue.100"
      subColor="blue.300"
    >
      <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s4.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
