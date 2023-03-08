import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Labels from "./components/Labels";
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
                    <GridItem border="1px"borderColor="red">
                        <p>リーチ</p>
                        <p>例</p>
                        <p>説明</p>
                    </GridItem>
                    <GridItem border="1px"borderColor="red">
                        <p>リーチ</p>
                        <p>例</p>
                        <p>説明</p>
                    </GridItem>
                </Grid>
            </TabPanel>
        </TabPanels>
    </Tabs>

    </>
  )
}

export default Hands