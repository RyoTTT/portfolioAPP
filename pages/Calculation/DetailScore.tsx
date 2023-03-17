import React from "react";
import CalculationHome from "./calhome";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DefaultPoint from "../../components/DetailScoreTabs/DefaultPoint"

//next/Imageを使って画像を使いたい
const DetailScore = () => {
  return (
    <>
      <CalculationHome />
      <Tabs>
        <TabList>
          <Tab>符計算の概要</Tab>
          <Tab>基本符</Tab>
          <Tab>アガリ方</Tab>
          <Tab>面子による加符</Tab>
          <Tab>アタマ</Tab>
          <Tab>待ち</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>テスト</Text>
          </TabPanel>
          <TabPanel>
          <DefaultPoint />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DetailScore;
