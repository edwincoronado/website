import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Links from "../components/Links";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Edwin Coronado</title>
        <meta
          name="description"
          content="Personal website for Edwin Coronado"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.sm">
        <Header />
        <About />
        <Links />
      </Container>
    </>
  );
}
