import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Honroutou = () => {
  return (
    <Yaku
      title="ホンロウトウ(混老頭)"
      han="2翻"
      situation="鳴きOK"
      content="                 面子を1または9または字牌の刻子、雀頭を1または9または字牌で揃えると成立する役。
      "
      mainColor="green.100"
      subColor="green.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
