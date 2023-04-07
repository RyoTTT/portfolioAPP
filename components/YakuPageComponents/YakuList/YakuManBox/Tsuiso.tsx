import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Tsuiso = () => {
  return (
    <Yaku
      title="ツーイーソー(字一色)"
      han="役満"
      situation="鳴きOK"
      content="                               手牌を全て字牌で揃えると成立する役。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image
            src="/tupai/chun.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/chun.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/chun.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/nann.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/nann.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/nann.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/tupai/haku.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/haku.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
        </Box>
    </Yaku>
  );
};
