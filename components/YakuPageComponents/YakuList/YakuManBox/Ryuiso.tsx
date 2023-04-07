import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Ryuiso = () => {
  return (
    <Yaku
      title="リューイーソー(緑一色)"
      han="役満"
      situation="鳴きOK"
      content="                               ソーズの2,3,4,6,8と發のみで手牌を揃えると成立する役。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/tupai/jatsu.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/jatsu.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image
            src="/tupai/jatsu.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
