import React, { useEffect } from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Flex,
  Text,
  Progress,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "../components/Section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../components/layouts/Article";

const SkillProgress = ({ skillName, progress }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <>
      <Text fontWeight={700} mt={2.5}>
        {skillName}
      </Text>
      <motion.div
        ref={ref}
        key={skillName}
        initial="hidden"
        animate={controls}
        variants={progressVariants}
      >
        <Progress
          value={progress}
          colorScheme="teal"
          isAnimated="true"
          hasStripe="true"
          rounded={10}
        />
      </motion.div>
    </>
  );
};

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
              My skills
            </Heading>
            <SkillProgress skillName="Javascript" progress={100} />
            <SkillProgress skillName="React.js" progress={100} />
            <SkillProgress skillName="CSS" progress={80} />
            <SkillProgress skillName="HTML" progress={70} />
            <SkillProgress skillName="Node.js" progress={50} />
            <SkillProgress skillName="Express.js" progress={50} />
            <SkillProgress skillName="Python" progress={75} />
            <SkillProgress skillName="Java" progress={60} />
          </Section>
          <Section delay={0.7}>
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
