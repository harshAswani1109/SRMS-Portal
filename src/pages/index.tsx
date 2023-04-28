import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navbar />
        index page
      </main>
    </>
  );
}
