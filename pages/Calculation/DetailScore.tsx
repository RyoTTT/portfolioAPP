import React from "react";
import CalculationHome from "./calhome";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DefaultPoint from "../../components/DetailScoreTabs/DefaultPoint"
import Agari from "@/components/DetailScoreTabs/Agari";
import Atama from "@/components/DetailScoreTabs/Atama";
import About from "@/components/DetailScoreTabs/About";
import Machi from "@/components/DetailScoreTabs/Machi";
import Mentsu from "@/components/DetailScoreTabs/Mentsu";

//next/Imageを使って画像を使いたい
const DetailScore = () => {
  return (
    <>
      <CalculationHome />
      <Tabs maxWidth="1500px" w="100%">
        <TabList >
          <Tab>符計算の概要</Tab>
          <Tab>基本符</Tab>
          <Tab>アガリ方</Tab>
          <Tab>面子による加符</Tab>
          <Tab>アタマ</Tab>
          <Tab>待ち</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
          <DefaultPoint />
          </TabPanel>
          <TabPanel>
            <Agari />
          </TabPanel>
          <TabPanel>
            <Mentsu />
          </TabPanel>
          <TabPanel>
            <Atama />
          </TabPanel>
          <TabPanel>
            <Machi />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DetailScore;
