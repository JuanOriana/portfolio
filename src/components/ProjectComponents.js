import NextLink from "next/link";
import { Heading, Flex, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const ProjectTitle = ({ children }) => (
  <Flex alignItems="center" mb={2}>
    <NextLink href="/projects">
      <Link>Projects</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={22}>
      {children}
    </Heading>
  </Flex>
);

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
