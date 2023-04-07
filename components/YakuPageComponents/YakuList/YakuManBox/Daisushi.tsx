import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Daisushi = () => {
  return (
    <Yaku
      title="ダイスーシー(大四喜)"
      han="役満"
      situation="鳴きOK"
      content="                                         風牌で4面子揃えると成立する役。ダブル役満とする場合もある。雀頭はなんでもよい。



      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
