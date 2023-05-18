import Labels from '@/components/Labels'
import React, { useEffect, useState } from 'react'
import { Box, Input, Button, Text} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import LinkTabs from "../../components/LinkTabs";
import  db  from '../../firebase';
import { collection, getDocs, where, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";



const handsresult = () => {
  const [yakuData,setYakuData] = useState<string[]>([]);
  const [errorCheck,setErrorCheck] = useState(false);
  useEffect(() => {
  const auth = getAuth(app);
  const user = auth.currentUser?.uid;

  try {
  const postData = query(collection(db,"yakuList"), where("userId","==", user));
  getDocs(postData).then((element) => {
  //console.log(element.docs.map((doc)=> doc.data().yaku))
  //役が入ってる配列をstateにセットしたい
  element.docs.map((doc)=> {
//  console.log(doc.data().yaku);
  doc.data().yaku.length > 0 ? setYakuData([...yakuData,doc.data().yaku]) : console.log(0);
  })
  setErrorCheck(false);
  console.log(yakuData);
  })
  } catch (error) {
    console.log(error)
    setErrorCheck(true);
  }
  },[])

  return (
    <>
    <Labels />
    <LinkTabs />
    {errorCheck ? 
    <Box>ログインしてください</Box>
        :
    <Box margin="0 10%">
    <TableContainer>
          <Table variant="simple">
            <TableCaption>アガリ役履歴</TableCaption>
            <Thead>
              <Tr>
                <Th>役</Th>
                <Th>回数</Th>
                <Th>全体における割合</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>立直</Td>
                <Td>13</Td>
                <Td>70%</Td>
              </Tr>
              <Tr>
                <Td>平和</Td>
                <Td>4</Td>
                <Td>20%</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Box> 
        }

    </>
  )
}

export default handsresult