import Labels from "@/components/Labels";
import React, { useEffect, useState } from "react";
import { Box, Input, Button, Text, Textarea, VStack, Heading} from "@chakra-ui/react";
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
import LinkTabs from "../../components/LinkTabs"
import { collection, addDoc, getDocs, where, query  } from "firebase/firestore";
import db from "../../firebase";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase";
import Link from "next/link";

const totalresult = () => {
  const [rank,setRank] = useState<number | undefined>(undefined);
  const [score,setScore] = useState<number | undefined>(undefined);
  const [text,setText] = useState("");
  const [date,setDate] = useState("");
  const [errorCheck,setErrorCheck] = useState(false);
  const [resultData,setResultData] = useState<any[]>([]);
  const auth = getAuth(app);
  const user= auth.currentUser?.uid;
  
  useEffect(() => {
    try {
      const postData = query(collection(db,"results"), where("userId","==", user));
      getDocs(postData).then((element) => {
      setResultData(element.docs.map((doc)=> doc.data()));
      setErrorCheck(false);
      })
      } catch (error) {
      console.log(error);
      setErrorCheck(true);
      }
  },[])
  console.log(resultData);
  async function uploadResult() {
    addDoc(collection(db,"results"),{
      userId:user,
      rank:rank,
      score:score,
      text:text,
      date:date,
    }) 
    const postData =  await query(collection(db,"results"), where("userId","==", user));
    getDocs(postData).then((element) => {
    setResultData(element.docs.map((doc)=> doc.data()));
    })
  }
  const sortByDate = () => {
    const copyResultData = [...resultData]
    copyResultData.sort((a,b) => (a.date! > b.date! ? 1 : -1));
    setResultData(copyResultData);
  }

  return (
    <>
      <Labels />
      <LinkTabs />
      {errorCheck ? 
    <Box textAlign="center" margin="5% auto">
    <Heading>ログインしてください</Heading>
    <Text borderBottom="solid 1px" display="inline-block" marginTop="2%"><Link href="/login">ログインする</Link></Text>
    </Box>
      :
      <Box margin="0 10%">
      <VStack w="600px" margin="2% auto">
        <Text>１日の総合結果</Text>
        <Input placeholder="順位" onChange={(e)=>setRank(Number(e.target.value))} value={rank}></Input>
        <Input placeholder="スコア(レート換算)" onChange={(e)=>setScore(Number(e.target.value))} value={score}></Input>
        <Textarea placeholder="備考" onChange={(e)=>setText(e.target.value)} value={text}></Textarea>
        <Input type="date" onChange={(e)=>setDate(e.target.value)} value={date}></Input>
        <Button onClick={uploadResult}>更新</Button>
      </VStack>
      <Box>
        <Button size="sm" onClick={sortByDate}>並び替え(日付)</Button>
      </Box>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>対戦履歴</TableCaption>
            <Thead>
              <Tr>
                <Th>日付</Th>
                <Th>総合順位</Th>
                <Th>スコア</Th>
                <Th>備考</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>(例)→2023/03/13</Td>
                <Td>2位</Td>
                <Td>+1400</Td>
                <Td>5半荘</Td>
              </Tr>
              {resultData.map((result,index)=> (
                <Tr key={index}>
                  <Td>{result.date ? result.date : ""}</Td>
                  <Td>{result.rank ? result.rank : ""}位</Td>
                  <Td>{result.score ? result.score > 0 ? "+" + result.score : result.score : ""}</Td>
                  <Td>{result.text ? result.text : "備考なし"}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
      }
    </>
  );
};

export default totalresult;
