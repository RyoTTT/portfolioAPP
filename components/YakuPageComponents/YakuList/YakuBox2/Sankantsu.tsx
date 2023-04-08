import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Sankantsu= () => {
  return (
    <Yaku
      title="サンカンツ(三槓子)"
      han="2翻"
      situation="鳴きOK"
      content="                槓子を3つ揃えると成立する役。残りはなんでも良い。
      "
      mainColor="green.100"
      subColor="green.300"
    >
        <Box display="flex" justifyContent="center">
        <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
