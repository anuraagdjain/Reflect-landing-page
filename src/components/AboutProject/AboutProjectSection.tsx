import {
  CalendarIcon,
  LockIcon,
  RepeatClockIcon,
  ViewOffIcon
} from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { MutableRefObject } from "react";

type AboutProjectSectionProps = {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
};

export const AboutProjectSection: React.FC<AboutProjectSectionProps> = ({
  sectionRef
}) => {
  return (
    <Box py={20} ref={sectionRef}>
      <Container maxW="container.md">
        <Heading
          as="h2"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          Why?
        </Heading>
        <Flex align="center" justify="center" mb={12}>
          <Box mr={8}>
            <CalendarIcon boxSize={8} />
          </Box>
          <Box>
            <Heading as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              Event handling
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              risus porta, tincidunt turpis sed, accumsan odio. Donec auctor
              ante eget ligula egestas lobortis.
            </Text>
          </Box>
        </Flex>
        <Flex align="center" justify="center" mb={12}>
          <Box mr={8}>
            <LockIcon boxSize={8} />
          </Box>
          <Box>
            <Heading as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              Encrypted Storage
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              risus porta, tincidunt turpis sed, accumsan odio. Donec auctor
              ante eget ligula egestas lobortis.
            </Text>
          </Box>
        </Flex>
        <Flex align="center" justify="center" mb={12}>
          <Box mr={8}>
            <ViewOffIcon boxSize={8} />
          </Box>
          <Box>
            <Heading as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              Privacy Focused
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              risus porta, tincidunt turpis sed, accumsan odio. Donec auctor
              ante eget ligula egestas lobortis.
            </Text>
          </Box>
        </Flex>

        <Flex align="center" justify="center" mb={12}>
          <Box mr={8}>
            <RepeatClockIcon boxSize={8} />
          </Box>
          <Box>
            <Heading as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              Recurring
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              risus porta, tincidunt turpis sed, accumsan odio. Donec auctor
              ante eget ligula egestas lobortis.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
