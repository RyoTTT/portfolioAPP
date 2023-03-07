import React from "react";
import { Center, Input, Button } from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  return (
    <>
    <Center>
      <Input placeholder="email"/>
      <Input placeholder="password"/>
      <Button>ログイン</Button>
      <Link href="/">パスワードを忘れた</Link>
    </Center>
    <Button>Googleでログイン</Button>
    </>
  );
};

export default Login;
