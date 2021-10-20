import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Computer from "../Computer";
import NoSsr from "../NoSsr";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Juan's homepage" />
        <meta name="author" content="Juan Pablo Oriana" />
        <link rel="icon" href="/images/chicken-dark.png" type="image/x-icon" />
        <title>Home - Juan Pablo Oriana</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Juan Pablo Oriana - Homepage" />
        <meta property="og:image" content="/images/chicken.png" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Computer />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
