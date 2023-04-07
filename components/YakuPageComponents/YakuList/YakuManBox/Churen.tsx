import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Yaku } from "../../Yaku";

export const Churen = () => {
  return (
    <Yaku
      title="チュウレンポウトウ(九蓮宝燈)"
      han="役満"
      situation="鳴きNG"
      content="                               1つの数字牌で「1112345678999」+ 「X(1~9の数字のうちどれか1つ)」を揃えると成立する役。先に「1112345678999」が揃ってX(どの数牌でもよい)を待つ状態でテンパイすると「純正九蓮宝燈」としてダブル役満とする場合もある。


      "
      mainColor="purple.100"
      subColor="purple.300"
    >
        <Box display="flex" justifyContent="center">
        <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
        </Box>
    </Yaku>
  );
};
