import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input } from "@chakra-ui/react";
import Labels from "../components/Labels";
import Yaku3 from "@/components/YakuList/Yaku3";
import Yaku6 from "@/components/YakuList/Yaku6";
import Yaku1 from "@/components/YakuList/Yaku1";
import Yaku2 from "@/components/YakuList/Yaku2";
import YakuMan from "@/components/YakuList/YakuMan";
import YakuSearch from "@/components/YakuList/YakuSearch";
const Hands = () => {
  return (
    <>
      <Labels />
      <Tabs>
        <TabList>
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
