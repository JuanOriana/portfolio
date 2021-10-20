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
          Custom-OS <Badge mt={1}>2020-2021</Badge>
        </ProjectTitle>
        <P>
          A functional operating system made for a 32-bit x86 architecture I
          developed from scratch during my Computer Architecture and Operating
          Systems classes in college. It can manage multiple processes at once
          using a Round Robin scheduler. It can also create pipes and
          semaphores. It handles two memory managers: One using a free list and
          another one using a buddy system.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Languages</Meta>
            <span>C, Intel ASM</span>
          </ListItem>
          <ListItem>
            <Meta>
              <Flex alignItems="center">
                <span style={{ marginRight: "4px" }}>Github</span>
                <IoLogoGithub />
              </Flex>
            </Meta>
            <Link
              href="https://github.com/JuanOriana/Custom-OS"
              target="_blank"
            >
              https://github.com/JuanOriana/Custom-OS"
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage src="/images/projects/os.jpeg" alt="Os" />
      </Container>
    </Layout>
  );
};

export default Project;
