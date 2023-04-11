import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const ToiToi = () => {
  return (
    <Yaku
      title="トイトイ(対々)"
      han="2翻"
      situation="鳴きOK"
      content="         面子を全て刻子で揃えると成立する役"
      mainColor="green.100"
      subColor="green.300"
    >
      <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
        <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
      </Box>
    </Yaku>
  );
};
