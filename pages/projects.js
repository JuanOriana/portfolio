import React from "react";
import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/Section";
import { ProjectGridItem } from "../components/GridItem";
import Layout from "../components/layouts/Article";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="cs-webpage"
              title="Computer Society Webpage"
              thumbnail={require("../public/images/projects/cswebpage.png")}
            >
              The homepage for IEEE Computer Society ITBA.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="spotify-age"
              title="Spotify Age Analyzer"
              thumbnail={require("../public/images/projects/spotify-age-2.png")}
            >
              A MERN webpage that filters your musical taste by decade using the
              Spotify API.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="os"
              title="Custom-OS"
              thumbnail={require("../public/images/projects/os.jpeg")}
            >
              A functional operating system made for a 32-bit x86 architecture
              with memory managing, scheduling, pipes, semaphores, and more.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="maze"
              title="Pathfinding Visualization"
              thumbnail={require("../public/images/projects/maze.jpeg")}
            >
              A Pygame random maze generator that can find optimal paths using
              diverse algorithms
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
