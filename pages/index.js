import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Head>
          <title>Pup To Pal</title>

          <link rel="icon" href="/justLogo.png" />
        </Head>
        <Hero />

        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"></main>

        <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
      </div>
    </>
  );
}
