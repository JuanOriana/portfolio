import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/Main";
import Fonts from "../components/Fonts";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
