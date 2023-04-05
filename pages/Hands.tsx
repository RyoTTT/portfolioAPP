import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Labels from "../components/Labels";
import Yaku3 from "@/components/YakuList/Yaku3";
import Yaku6 from "@/components/YakuList/Yaku6";
import Yaku1 from "@/components/YakuList/Yaku1";
import Yaku2 from "@/components/YakuList/Yaku2";
import YakuMan from "@/components/YakuList/YakuMan";
const Hands = () => {
  return (
    <>
      <Labels />
      <Tabs>
        <TabList>
          <Tab>すべて</Tab>
          <Tab>1翻</Tab>
          <Tab>2翻</Tab>
          <Tab>3翻</Tab>
          <Tab>6翻</Tab>
          <Tab>役満</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid gap={4}>
              <GridItem border="1px" borderColor="red">
                <p>リーチ</p>
                <p>例</p>
                <p>説明</p>
              </GridItem>
              <GridItem border="1px" borderColor="red">
                <p>リーチ</p>
                <p>例</p>
                <p>説明</p>
              </GridItem>
            </Grid>
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
