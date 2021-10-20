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
          Spotify Age Analyzer <Badge mt={1}>2021</Badge>
        </ProjectTitle>
        <P>
          A webpage created with the MERN stack that calculates the "age" of
          your musical taste based on your Spotify profile. It also gives some
          recommendations.
        </P>
        <List ml={4} my={4}>
          <ListItem></ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, MongoDB, React.js, Express.js, Spotify API</span>
          </ListItem>
          <ListItem>
            <Meta>
              <Flex alignItems="center">
                <span style={{ marginRight: "4px" }}>Github</span>
                <IoLogoGithub />
              </Flex>
            </Meta>
            <Link
              href="https://github.com/JuanOriana/spotify-age-MERN"
              target="_blank"
            >
              https://github.com/JuanOriana/spotify-age-MERN
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/spotify-age-1.png"
          alt="Spotify app"
        />
        <ProjectImage
          src="/images/projects/spotify-age-2.png"
          alt="Spotify app"
        />
        <ProjectImage
          src="/images/projects/spotify-age-3.png"
          alt="Spotify app"
        />
      </Container>
    </Layout>
  );
};

export default Project;
