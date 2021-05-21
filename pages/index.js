import Head from "next/head";
import Link from "next/link";

import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoTracker</title>
      </Head>
      <Homepage />
    </>
  );
}
