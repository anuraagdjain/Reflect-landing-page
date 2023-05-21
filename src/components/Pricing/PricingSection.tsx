import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React, { MutableRefObject } from "react";

type PricingSectionProps = {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
};

export const PricingSection: React.FC<PricingSectionProps> = ({
  sectionRef
}) => {
  return (
    <Box py={8} bg="white" ref={sectionRef}>
      <Container maxW="container.md">
        <Heading
          as="h2"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          Pricing
        </Heading>
        <Text as="h3" fontSize="xl" textAlign="center" color="gray.600" mb={8}>
          Choose a plan that fits your needs. We charge you only for used hours.
        </Text>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th fontWeight="bold"></Th>
              <Th fontWeight="bold">Basic</Th>
              <Th fontWeight="bold">Standard</Th>
              <Th fontWeight="bold">Premium</Th>
              <Th fontWeight="bold">
                <Flex align="center">
                  Premium
                  <SmallAddIcon />
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Monthly Price</Td>
              <Td>$9.99</Td>
              <Td>$19.99</Td>
              <Td>$29.99</Td>
              <Td>$59.99</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Storage</Td>
              <Td>10GB</Td>
              <Td>25GB</Td>
              <Td>1TB</Td>
              <Td>5TB</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Users</Td>
              <Td>1</Td>
              <Td>3</Td>
              <Td>5</Td>
              <Td>∞</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    </Box>
  );
};
