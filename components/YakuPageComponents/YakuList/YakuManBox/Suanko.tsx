import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Suanko = () => {
  return (
    <Yaku
      title="スーアンコウ(四暗刻)"
      han="役満"
      situation="鳴きNG"
      content="                     全ての面子を暗刻で揃えると成立する役。暗刻がすでに完成していて、雀頭の単騎まちだと「四暗刻単騎待ち」でダブル役満とする場合もある。

      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
