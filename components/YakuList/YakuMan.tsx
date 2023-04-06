import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const YakuMan = () => {
  return (
    <>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">スーアンコウ(四暗刻)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きNG
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          全ての面子を暗刻で揃えると成立する役。暗刻がすでに完成していて、雀頭の単騎まちだと「四暗刻単騎待ち」でダブル役満とする場合もある。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">ダイサンゲン(大三元)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
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
          <Image
            src="/tupai/haku.gif"
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
          <Image
            src="/tupai/jatsu.gif"
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
            src="/tupai/chun.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          三元牌の刻子を揃えると成立する役。明刻でも暗刻でもよい。三元牌の刻子が揃っていれば他はなんでもよい。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">コクシムソウ(国士無双)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きNG
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/tupai/nann.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/pee.gif" alt="test" width={45} height={40}></Image>
          <Image
            src="/tupai/haku.gif"
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
            src="/tupai/chun.gif"
            alt="test"
            width={45}
            height={40}
          ></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          1,9,字牌全種類1つずつ+1,9,字牌全種類のうちからなんでも良いのでどれか１つ揃えると成立する役。先に1,9,字牌全種類1つずつが揃っていて、あと1,9,字牌全種類のうちから何が来てもよい状態でテンパイすると「国士無双13面待ち」としてダブル役満とする場合もある。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">リューイーソー(緑一色)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
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
        <Text fontSize="20px" margin="1% 1%">
          ソーズの2,3,4,6,8と發のみで手牌を揃えると成立する役。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">ツーイーソー(字一色)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
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
        <Text>手牌を全て字牌で揃えると成立する役。</Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">チンロウトウ(清老頭)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
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
        <Text>手牌を全て1,9の数牌で揃えると成立する役</Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">スーカンツ(四槓子)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
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
        <Text fontSize="20px" margin="1% 1%">
          面子を全て槓子で揃えると成立する役。暗槓でも明槓でもよい。牌の種類はなんでもよい。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">ショウスーシー(小四喜)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
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
        <Text fontSize="20px" margin="1% 1%">
          風牌で雀頭と3面子を揃えると成立する役。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">ダイスーシー(大四喜)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
          </Box>
        </Box>
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
        <Text fontSize="20px" margin="1% 1%">
          風牌で4面子揃えると成立する役。ダブル役満とする場合もある。雀頭はなんでもよい。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">チュウレンポウトウ(九蓮宝燈)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きNG
            </Text>
          </Box>
        </Box>
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
        <Text fontSize="20px" margin="1% 1%">
          1つの数字牌で「1112345678999」+ 「X(1~9の数字のうちどれか1つ)」を揃えると成立する役。先に「1112345678999」が揃ってX(どの数牌でもよい)を待つ状態でテンパイすると「純正九蓮宝燈」としてダブル役満とする場合もある。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="purple.100" marginBottom="1.5%">
          <Heading fontSize="25px">チーホウ、テンホウ(地和、天和)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="purple.300" border="solid" margin="0 1%">
              役満
            </Text>
            <Text bg="purple.300" border="solid" marginRight="1%">
              鳴きNG
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
        <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          自分が子の時、配牌の時点ですでにテンパイし第一ツモでアガるとチーホウが成立する。自分が親の時、配牌の時点ですでにテンパイし第一ツモでアガるとテンホウが成立する。テンホウはダブル役満とする場合もある。テンパイの形はなんでも良く、役がなくても良い。
        </Text>
      </Box>
    </>
  );
};

export default YakuMan;
