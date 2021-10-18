import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/Main";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
