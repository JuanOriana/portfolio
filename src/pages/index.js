import React from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import Section from "../components/Section";

const Page = () => {
  return (
    <React.StrictMode>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm a full stack developer based in Buenos Aires, Argentina!
        </Box>

        <Box display={{ md: "flex" }} alignItems={{ md: "center" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Juan Pablo Oriana
            </Heading>
            <p>Este es un subtitulo descriptivo corto</p>
          </Box>
          <Box
            flexShrink={1}
            mt={{ base: 4, md: 0 }}
            ml={{ bd: 6 }}
            align="center"
          >
            <Image
              borderColor={useColorModeValue("teal.500", "teal.200")}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/JuanOriana.jpeg"
              alt="Juan Pablo Oriana"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <p>Paragraph</p>
          <Flex w="100" mt={4} justifyContent="center">
            <Button colorScheme="teal">My projects</Button>
          </Flex>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
        </Section>
      </Container>
    </React.StrictMode>
  );
};

export default Page;
