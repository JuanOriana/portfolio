import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay, AspectRatio } from "@chakra-ui/react";
import { chakra } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          loading="lazy"
          radii="12px"
          height="30px"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const ProjectGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`projects/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            radii="12px"
            height="600px"
            width="1200px"
            objectFit="cover"
          />
          <LinkOverlay href={`projects/${id}`} target="_blank">
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};
