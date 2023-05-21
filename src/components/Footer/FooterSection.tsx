import { Box, Container, Link, Image, Text } from "@chakra-ui/react";
import React from "react";

export const FooterSection: React.FC<{}> = () => {
  return (
    <Box py={8} bg="gray.800" color="white">
      <Container maxW="container.md" textAlign="center">
        <Image
          src="https://img.logoipsum.com/297.svg"
          alt="Logo"
          mx="auto"
          mb={4}
        />
        <Text fontSize="0.75rem">
          Developed by{" "}
          <Link href="https://www.linkedin.com/in/anuraagdjain/">
            Anuraag Jain
          </Link>
        </Text>
        <Text fontSize="0.75rem">Inspired by reflect.net</Text>
      </Container>
    </Box>
  );
};
