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
          PathFinding Algorithms Visualization <Badge mt={1}>2020</Badge>
        </ProjectTitle>
        <P>
          Visual interface made with Python in pygame that allows the user to
          create randomly generated mazes with Prim's algorithm. Along with
          finding a path between to points using diverse path-finding algorithms
          such as DFS, BFS and A*.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Python, pygame, numpy</span>
          </ListItem>
          <ListItem>
            <Meta>
              <Flex alignItems="center">
                <span style={{ marginRight: "4px" }}>Github</span>
                <IoLogoGithub />
              </Flex>
            </Meta>
            <Link
              href="https://github.com/JuanOriana/PathFinding-Visualization"
              target="_blank"
            >
              https://github.com/JuanOriana/PathFinding-Visualization
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage src="/images/projects/maze.jpeg" alt="Maze" />
      </Container>
    </Layout>
  );
};

export default Project;
