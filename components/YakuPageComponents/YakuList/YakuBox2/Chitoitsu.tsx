import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Chitoitsu = () => {
  return (
    <Yaku
      title="チートイツ(七対子)"
      han="2翻"
      situation="鳴きNG"
      content="  マンズ、ソーズ、ピンズでそれぞれ同じ順子を揃えると成立する役。残りはなんでも良い。
        "
      mainColor="green.100"
      subColor="green.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
