import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import About from "../components/About";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pup To Pal</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/bwLogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Header />

      <Service />
      <Testimonials />
      <About />

      <ContactUs />
      <Footer />
    </>
  );
}
