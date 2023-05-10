import { app, provider } from "@/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { Center, Input, Text, Button } from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/");
  };

  const googleSignin = async () => {
    await signInWithPopup(auth, provider);
    router.push("/");
  };
  return (
    <>
        <Center>
          <Text fontSize="30px" marginBottom="10px" marginTop="10px">
            ログイン
          </Text>
        </Center>
        <Center>
          <form onSubmit={signin}>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              marginBottom="20px"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password(6文字以上)"
              marginBottom="20px"
            />
            <Button type="submit" float="right" color="green">
              ログイン
            </Button>
          </form>
        </Center>
        <Center>
          <Button
            onClick={googleSignin}
            backgroundColor="green"
            color="white"
            marginBlock="20px"
          >
            Googleでログイン
          </Button>
        </Center>
    </>
  );
};

export default Login;
