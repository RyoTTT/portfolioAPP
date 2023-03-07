import React from "react";
import { Center, Input, Button } from "@chakra-ui/react";
import Link from "next/link";

const Subscribe = () => {
  return (
    <>
      <Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button>登録</Button>
      </Center>
    </>
  );
};

export default Subscribe;
