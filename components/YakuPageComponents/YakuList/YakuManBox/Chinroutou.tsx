import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Chinroutou = () => {
  return (
    <Yaku
      title="チンロウトウ(清老頭)"
      han="役満"
      situation="鳴きOK"
      content="          手牌を全て1,9の数牌で揃えると成立する役
      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image
            src="/manzu/m1.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/manzu/m1.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/manzu/m1.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/manzu/m9.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/manzu/m9.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/manzu/m9.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/pinzu/p1.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/pinzu/p1.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
        </Box>
    </Yaku>
  );
};
