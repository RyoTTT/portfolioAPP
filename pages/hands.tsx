import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Labels from "../components/Labels";
import Yaku3 from "@/components/YakuPageComponents/HanList/Han3";
import Yaku6 from "@/components/YakuPageComponents/HanList/Han6";
import Yaku1 from "@/components/YakuPageComponents/HanList/Han1";
import Yaku2 from "@/components/YakuPageComponents/HanList/Han2";
import YakuMan from "@/components/YakuPageComponents/HanList/HanMax";
import YakuSearch from "@/components/YakuPageComponents/YakuSearch";
const Hands = () => {
  return (
    <>
      <Labels />
      <Tabs marginTop="3%">
        <TabList fontSize="18px">
          <Tab>役検索</Tab>
          <Tab>すべて</Tab>
          <Tab>1翻</Tab>
          <Tab>2翻</Tab>
          <Tab>3翻</Tab>
          <Tab>6翻</Tab>
          <Tab>役満</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <YakuSearch />
          </TabPanel>
          <TabPanel>
          <Yaku1 />
          <Yaku2 />
          <Yaku3 />
          <Yaku6 />
          <YakuMan />
          </TabPanel>
          <TabPanel>
            <Yaku1 />
          </TabPanel>
          <TabPanel>
            <Yaku2 />
          </TabPanel>
          <TabPanel>
            <Yaku3 />
          </TabPanel>
          <TabPanel>
            <Yaku6 />
          </TabPanel>
          <TabPanel>
            <YakuMan />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Hands;
