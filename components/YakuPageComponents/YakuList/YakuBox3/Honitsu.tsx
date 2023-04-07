import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Honitsu = () => {
  return (
    <Yaku
      title="ホンイツ(混一色)"
      han="3翻"
      situation="喰い下がり2翻"
      content="          1種類の数牌と字牌のみでなる役。数牌の種類は問わない。
      "
      mainColor="red.100"
      subColor="red.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
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
        </Box>
    </Yaku>
  );
};
