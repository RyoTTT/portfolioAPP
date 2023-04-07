import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { DoubleReach } from "../YakuList/YakuBox2/DoubleReach";

const Yaku2 = () => {
  return (
    <>
<DoubleReach />
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">チートイツ(七対子)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              門前のみ
            </Text>
          </Box>
        </Box>
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
        <Text fontSize="20px" margin="1% 1%">
          対子(同じ種類の牌を2セット)を2つ揃えると成立する役。
        </Text>
      </Box>
      
      
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">サンショクドウジュン(三色同順)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がり1翻
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          マンズ、ソーズ、ピンズでそれぞれ同じ順子を揃えると成立する役。残りはなんでも良い。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">イッキツウカン(一気通貫)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がり1翻
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/ton.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          マンズ、ソーズ、ピンズのいずれかで1~9の順子を揃えると成立する役。残りはなんでも良い。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">チャンタ(混全帯么九)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がり1翻
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/nann.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          面子と雀頭が1または9の数牌が絡んだものか字牌のみで揃えることで成立する役。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">サンショクドウコウ(三色同刻)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がりなし
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          マンズ、ソーズ、ピンズでそれぞれ同じ刻子を揃えると成立する役。残りはなんでも良い。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">サンアンコウ(三暗刻)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がりなし
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m8.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          暗刻を3つ揃えると成立する役。残りはなんでも良い。暗子以外の部分は鳴いてもよい。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">サンカンツ(三槓子)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がりなし
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
        <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <img src="https://mj-king.net/sozai/paiga/images/p_bk_1.gif" alt="裏:麻雀王国" width={45} height={40}></img>
          <Image src="/manzu/m2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m3.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
        槓子を3つ揃えると成立する役。残りはなんでも良い。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">トイトイ(対々和)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がりなし
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p2.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m7.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p9.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          面子を全て刻子で揃えると成立する役。暗子、明子どちらでもよい。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">ショウサンゲン(小三元)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がりなし
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p4.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p5.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p6.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/haku.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/chun.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/chun.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/chun.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          2面子と雀頭を三元牌で揃えると成立する役。残りはなんでもよい。
        </Text>
      </Box>
      <Box border="solid" margin="2% 0">
        <Box bg="green.100" marginBottom="1.5%">
          <Heading fontSize="25px">ホンロウトウ(混老頭)</Heading>
          <Box display="flex" fontSize="18px">
            <Text bg="green.300" border="solid" margin="0 1%">
              2翻
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              鳴きOK
            </Text>
            <Text bg="green.300" border="solid" marginRight="1%">
              喰い下がりなし
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/pinzu/p1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/sozu/s1.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/manzu/m9.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/jatsu.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
          <Image src="/tupai/sha.gif" alt="test" width={45} height={40}></Image>
        </Box>
        <Text fontSize="20px" margin="1% 1%">
          面子を1または9または字牌の刻子、雀頭を1または9または字牌で揃えると成立する役。
        </Text>
      </Box>
    </>
  );
};

export default Yaku2;
