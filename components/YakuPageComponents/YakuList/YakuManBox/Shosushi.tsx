import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Shosushi = () => {
  return (
    <Yaku
      title="ショウスーシー(小四喜)"
      han="役満"
      situation="鳴きOK"
      content="                               風牌で雀頭と3面子を揃えると成立する役。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
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
        </Box>
    </Yaku>
  );
};
