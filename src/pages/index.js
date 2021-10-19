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
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../components/layouts/Article";

const Page = () => {
  return (
    <React.StrictMode>
      <Layout title="Home">
        <Container>
          <Box
            borderRadius="lg"
            bg={useColorModeValue("blackAlpha.300", "whiteAlpha.200")}
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
              <Paragraph>Este es un subtitulo descriptivo corto</Paragraph>
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
            <Paragraph>
              Esta es la bio de Juan Pablo Oriana. Un estudiante de ingenieria
              de 3 ano apaasionado por las teconologias web
            </Paragraph>
            <Flex w="100" mt={4} justifyContent="center">
              <NextLink href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My projects
                </Button>
              </NextLink>
            </Flex>
          </Section>
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              I ♥
            </Heading>
            <Paragraph>
              Web development - Machine Learning - Maths - Photography - Music
            </Paragraph>
          </Section>
        </Container>
      </Layout>
    </React.StrictMode>
  );
};

export default Page;
