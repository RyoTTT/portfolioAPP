import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Tsumo = () => {
  return (
    <Yaku
      title="ツモ、メンゼンチンツモ(門前清自摸和)"
      han="1翻"
      situation="鳴きNG"
      content="自分のツモでアガると成立する役。"
      mainColor="blue.100"
      subColor="blue.300"
    >
      <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s7.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
