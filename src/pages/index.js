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
              Technology enthusiast.
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
              I'm a 3rd year software engineering student at Instituto
              Tecnologico de Buenos Aires. I have been a passion for web
              development, design, artificial intelligence and all things
              innovative. In my free times I love playing music and taking
              photos.
            </Paragraph>
            <Flex w="100" mt={4} justifyContent="center">
              <NextLink href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My portfolio
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
          <Section delay={0.5}>
            <Heading as="h3" variant="section-title">
              Contact me
            </Heading>
            <Paragraph>
              I'm always on the lookout for new challenges. I would love to be
              able to work with you!
            </Paragraph>
            <Flex w="100" mt={4} justifyContent="center">
              <NextLink href="/contact">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Contact me
                </Button>
              </NextLink>
            </Flex>
          </Section>
        </Container>
      </Layout>
    </React.StrictMode>
  );
};

export default Page;
