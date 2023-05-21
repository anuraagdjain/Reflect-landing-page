import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

export const HeroSection: React.FC<{}> = () => {
  return (
    <Box bg="white" py={10} mt={20}>
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h1" fontSize="8xl" fontWeight="bold" color="gray.700">
          The next web is
        </Heading>
        <Box
          display="inline-block"
          style={{ fontSize: "16rem" }}
          fontWeight="bold"
          textTransform="lowercase"
          position="relative"
          color="white"
          textShadow="0.5px 0.5px 0 black, -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black"
          mt={"-4rem"}
        >
          alive
        </Box>
      </Container>
    </Box>
  );
};
