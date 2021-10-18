import React from "react";
import { Container, Box, Heading } from "@chakra-ui/layout";
const Page = () => {
  return (
    <React.StrictMode>
      <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
          Hello, I'm a full stack developer based in Buenos Aires, Argentina!
        </Box>

        <Box display={{ md: "flex" }} alignItems={{ md: "center" }}>
          <Heading as="h2" variant="page-title">
            Juan Pablo Oriana
          </Heading>
          <p>Este es un subtitulo descriptivo corto</p>
        </Box>
      </Container>
    </React.StrictMode>
  );
};

export default Page;
