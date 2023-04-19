import Head from "next/head";
import Link from "next/link";
import Labels from "../components/Labels";

export default function Home() {
  return (
    <>
      <Head>
        <title>麻雀アプリ</title>
      </Head>
      <Labels />
    </>
  );
}
