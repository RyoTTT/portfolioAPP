import Labels from "@/components/Labels";
import LinkTabs from "@/components/linkTabs";
import React from "react";
import { Box } from "@chakra-ui/react";

const index = () => {
  return (
    <>
      <Labels />
      <LinkTabs />
      <Box>各項目の説明</Box>
    </>
  );
};

export default index;
