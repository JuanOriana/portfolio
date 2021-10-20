import React from "react";
import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Icon,
  Button,
  Link,
} from "@chakra-ui/react";
import Section from "../components/Section";
import Layout from "../components/layouts/Article";
import Paragraph from "../components/paragraph";

import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
const Contact = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Me on the web:
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/juan-pablo-oriana-357b36210/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Juan Pablo Oriana
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/juanoriana" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @juanoriana
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/JuanOriana" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @JuanOriana
              </Button>
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Contact;
