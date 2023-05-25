import React from "react";

import { Box } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import Labels from "@/components/Labels";
import CalcTabs from "@/components/CalcTabs";

const ScoreGraph = () => {
  return (
    <>
      <Labels />
      <CalcTabs />
      <Box border="solid" margin="5% 1%">
        <Text textAlign="center" fontSize="30px" color="red">
          「親の点数」
        </Text>
        <Text fontSize="20px" fontWeight="bold">
          ()内はツモ時に子一人が払う得点
        </Text>
        <TableContainer>
          <Table
            variant="striped"
            colorScheme="red"
            fontSize="15px"
            justifyContent="center"
          >
            <TableCaption>親の点数</TableCaption>
            <Thead>
              <Tr>
                <Th>-</Th>
                <Th fontSize="20px">1飜</Th>
                <Th fontSize="20px">2飜</Th>
                <Th fontSize="20px">3飜</Th>
                <Th fontSize="20px">4飜</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>20符</Td>
                <Td>-</Td>
                <Td>-(700)</Td>
                <Td>-(1,300)</Td>
                <Td>-(2,600)</Td>
              </Tr>
              <Tr>
                <Td>25符</Td>
                <Td>-</Td>
                <Td>2,400(-)</Td>
                <Td>4,800(1,600)</Td>
                <Td>9,600(3,200)</Td>
              </Tr>
              <Tr>
                <Td>30符</Td>
                <Td>1,500(500)</Td>
                <Td>2,900(1000)</Td>
                <Td>5,800(2,000)</Td>
                <Td>11,600(3,900)</Td>
              </Tr>
              <Tr>
                <Td>40符</Td>
                <Td>2,000(700)</Td>
                <Td>3,900(1,300)</Td>
                <Td>7,700(2,600)</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>50符</Td>
                <Td>2,400(800)</Td>
                <Td>4,800(1,600)</Td>
                <Td>9,600(3,200)</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>60符</Td>
                <Td>2,900(1,000)</Td>
                <Td>5,800(2,000)</Td>
                <Td>11,600(3,900)</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>70符</Td>
                <Td>3,400(1,200)</Td>
                <Td>6,800(2,300)</Td>
                <Td>満貫</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>80符</Td>
                <Td>3,900(1,300)</Td>
                <Td>7,700(2,600)</Td>
                <Td>満貫</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>90符</Td>
                <Td>4,400(1,500)</Td>
                <Td>8,700(2,900)</Td>
                <Td>満貫</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>100符</Td>
                <Td>4,800(1,600)</Td>
                <Td>9,600(3,200)</Td>
                <Td>満貫</Td>
                <Td>満貫</Td>
              </Tr>
              <Tr>
                <Td>110符</Td>
                <Td>5,300(1,800)</Td>
                <Td>10,600(3,600)</Td>
                <Td>満貫</Td>
                <Td>満貫</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
        <Text textAlign="center" fontSize="30px">5飜以上の点数</Text>
        <TableContainer>
          <Table
            variant="striped"
            colorScheme="red"
            fontSize="15px"
            justifyContent="center"
          >
            <Thead>
              <Tr>
                <Th>
                  5飜
                  <br />
                  満貫
                </Th>
                <Th>
                  6,7飜
                  <br />
                  跳満
                </Th>
                <Th>
                  8〜10飜
                  <br />
                  倍満
                </Th>
                <Th>
                  11,12飜
                  <br />
                  三倍満
                </Th>
                <Th>
                  13〜飜
                  <br />
                  役満
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>
                  12,000
                  <br />
                  (4,000)
                </Th>
                <Th>
                  18,000
                  <br />
                  (6,000)
                </Th>
                <Th>
                  24,000
                  <br />
                  (8,000)
                </Th>
                <Th>
                  36,000
                  <br />
                  (12,000)
                </Th>
                <Th>
                  48,000
                  <br />
                  (16,000)
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
      </Box>
      <Box border="solid" margin="5% 1%">
        <Text textAlign="center" fontSize="30px" color="red">
          「子の点数」
        </Text>
        <Text fontSize="20px">()内はツモ時に払う得点</Text>
        <TableContainer>
          <Table
            variant="striped"
            colorScheme="yellow"
            fontSize="15px"
            justifyContent="center"
          >
            <TableCaption>子の点数</TableCaption>
            <Thead>
              <Tr>
                <Th>-</Th>
                <Th fontSize="20px">1飜</Th>
                <Th fontSize="20px">2飜</Th>
                <Th fontSize="20px">3飜</Th>
                <Th fontSize="20px">4飜</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>20符</Td>
                <Td>-</Td>
                <Td>
                  -<br />
                  子(400)
                  <br />
                  親(700)
                </Td>
                <Td>
                  -<br />
                  子(700)
                  <br />
                  親(1,300)
                </Td>
                <Td>
                  -<br />
                  子(1,300)
                  <br />
                  親(2,600)
                </Td>
              </Tr>
              <Tr>
                <Td>25符</Td>
                <Td>-</Td>
                <Td>1,600(-)</Td>
                <Td>
                  3,200
                  <br />
                  子(800)
                  <br />
                  親(1,600)
                </Td>
                <Td>
                  6,400
                  <br />
                  子(1,600)
                  <br />
                  親(3,200)
                </Td>
              </Tr>
              <Tr>
                <Td>30符</Td>
                <Td>
                  1,000
                  <br />
                  子(300)
                  <br />
                  親(500)
                </Td>
                <Td>
                  2,000
                  <br />
                  子(500)
                  <br />
                  親(1,000)
                </Td>
                <Td>
                  3,900
                  <br />
                  子(1,000)
                  <br />
                  親(2,000)
                </Td>
                <Td>
                  7,700
                  <br />
                  子(2,000)
                  <br />
                  親(3,900)
                </Td>
              </Tr>
              <Tr>
                <Td>40符</Td>
                <Td>
                  1,300
                  <br />
                  子(400)
                  <br />
                  親(700)
                </Td>
                <Td>
                  2,600
                  <br />
                  子(700)
                  <br />
                  親(1,300)
                </Td>
                <Td>
                  5,200
                  <br />
                  子(1,300)
                  <br />
                  親(2,600)
                </Td>
                <Td rowSpan={8}>
                  満貫
                  <br />
                  子(2,000)
                  <br />
                  親(4,000)
                </Td>
              </Tr>
              <Tr>
                <Td>50符</Td>
                <Td>
                  1,600
                  <br />
                  子(400)
                  <br />
                  親(800)
                </Td>
                <Td>
                  3,200
                  <br />
                  子(800)
                  <br />
                  親(1,600)
                </Td>
                <Td>
                  6,400
                  <br />
                  子(1,600)
                  <br />
                  親(3,200)
                </Td>
              </Tr>
              <Tr>
                <Td>60符</Td>
                <Td>
                  2,000
                  <br />
                  子(500)
                  <br />
                  親(1,000)
                </Td>
                <Td>
                  3,900
                  <br />
                  子(1,000)
                  <br />
                  親(2,000)
                </Td>
                <Td>
                  7,700
                  <br />
                  子(2,000)
                  <br />
                  親(3,900)
                </Td>
              </Tr>
              <Tr>
                <Td>70符</Td>
                <Td>
                  2,300
                  <br />
                  子(600)
                  <br />
                  親(1,200)
                </Td>
                <Td>
                  4,500
                  <br />
                  子(1,200)
                  <br />
                  親(2,300)
                </Td>
                <Td rowSpan={5}>
                  満貫
                  <br />
                  子(2,000)
                  <br />
                  親(4,000)
                </Td>
              </Tr>
              <Tr>
                <Td>80符</Td>
                <Td>
                  2,600
                  <br />
                  子(700)
                  <br />
                  親(1,300)
                </Td>
                <Td>
                  5,200
                  <br />
                  子(1,300)
                  <br />
                  親(2,600)
                </Td>
              </Tr>
              <Tr>
                <Td>90符</Td>
                <Td>
                  2,900
                  <br />
                  子(800)
                  <br />
                  親(1,500)
                </Td>
                <Td>
                  5,800
                  <br />
                  子(1,500)
                  <br />
                  親(2,900)
                </Td>
              </Tr>
              <Tr>
                <Td>100符</Td>
                <Td>
                  3,200
                  <br />
                  子(800)
                  <br />
                  親(1,600)
                </Td>
                <Td>
                  6,400
                  <br />
                  子(1,600)
                  <br />
                  親(3,200)
                </Td>
              </Tr>
              <Tr>
                <Td>110符</Td>
                <Td>
                  3,600
                  <br />
                  子(900)
                  <br />
                  親(1,800)
                </Td>
                <Td>
                  7,100
                  <br />
                  子(1,800)
                  <br />
                  親(3,600)
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <Text textAlign="center" fontSize="30px">5飜以上の点数</Text>
        <TableContainer>
          <Table
            variant="striped"
            colorScheme="yellow"
            fontSize="15px"
            justifyContent="center"
          >
            <Thead>
              <Tr>
                <Th>
                  5飜
                  <br />
                  満貫
                </Th>
                <Th>
                  6,7飜
                  <br />
                  跳満
                </Th>
                <Th>
                  8〜10飜
                  <br />
                  倍満
                </Th>
                <Th>
                  11,12飜
                  <br />
                  三倍満
                </Th>
                <Th>
                  13〜飜
                  <br />
                  役満
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>
                  8,000
                  <br />
                  子(2,000)
                  <br />
                  親(4,000)
                </Th>
                <Th>
                  12,000
                  <br />
                  子(3,000)
                  <br />
                  親(6,000)
                </Th>
                <Th>
                  16,000
                  <br />
                  子(4,000)
                  <br />
                  親(8,000)
                </Th>
                <Th>
                  24,000
                  <br />
                  子(6,000)
                  <br />
                  親(12,000)
                </Th>
                <Th>
                  32,000
                  <br />
                  子(8,000)
                  <br />
                  親(16,000)
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default ScoreGraph;
