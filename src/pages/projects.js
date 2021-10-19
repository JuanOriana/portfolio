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
              thumbnail={require("../../public/images/projects/cswebpage.png")}
            >
              Una pagina que hice para Computer Society.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="maze"
              title="Pathfinding Visualization"
              thumbnail={require("../../public/images/projects/maze.jpeg")}
            >
              Un generador de laberintos automatico que permite encontrar el
              camino utilizando diversos algoritmos de Pathfinding
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="maze"
              title="Pathfinding Visualization"
              thumbnail={require("../../public/images/projects/maze.jpeg")}
            >
              Un generador de laberintos automatico que permite encontrar el
              camino utilizando diversos algoritmos de Pathfinding
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="maze"
              title="Pathfinding Visualization"
              thumbnail={require("../../public/images/projects/maze.jpeg")}
            >
              Un generador de laberintos automatico que permite encontrar el
              camino utilizando diversos algoritmos de Pathfinding
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
