import { Container, Badge, Link, List, ListItem, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  ProjectTitle,
  ProjectImage,
  Meta,
} from "../../components/ProjectComponents";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { IoLogoGithub } from "react-icons/io5";

const Project = () => {
  return (
    <Layout title="Computer Society">
      <Container>
        <ProjectTitle>
          Computer Society Webpage <Badge mt={1}>2021</Badge>
        </ProjectTitle>
        <P>
          A webpage that serves as a portfolio page for the sutdent organization
          "IEEE Computer Society ITBA". Can dynamically show upcoming and past
          events from the organization.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://csitba.web.app/" target="_blank">
              https://csitba.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React, Firebase, Tailwind</span>
          </ListItem>
          <ListItem>
            <Meta>
              <Flex alignItems="center">
                <span style={{ marginRight: "4px" }}>Github</span>
                <IoLogoGithub />
              </Flex>
            </Meta>
            <Link href="https://github.com/csitba/webpage" target="_blank">
              https://github.com/csitba/webpage
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/cswebpage.png"
          alt="Computer Society Webpage"
        />
      </Container>
    </Layout>
  );
};

export default Project;
