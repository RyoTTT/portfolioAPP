import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Sukantsu = () => {
  return (
    <Yaku
      title="スーカンツ(四槓子)"
      han="役満"
      situation="鳴きOK"
      content="                    面子を全て槓子で揃えると成立する役。暗槓でも明槓でもよい。牌の種類はなんでもよい。

      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
        <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s5.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
