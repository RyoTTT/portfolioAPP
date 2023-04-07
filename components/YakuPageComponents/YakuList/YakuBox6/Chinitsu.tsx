import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Chinitsu = () => {
  return (
    <Yaku
      title="チンイツ(清一色)"
      han="6翻"
      situation="喰い下がり5翻"
      content="          1種類の数牌のみで面子と雀頭を揃えることで成立する役。
      "
      mainColor="yellow.100"
      subColor="yellow.300"
    >
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
