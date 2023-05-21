import React, { MutableRefObject } from "react";
import { Box, Flex, Image, Link, Container, Text } from "@chakra-ui/react";

type FeedbackPartialProps = {
  logo: string;
  websiteUrl: string;
  feedback: string;
  user: { fullName: string; photo: string };
};

type FeedbackSectionProps = {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
};

const FeedbackPartial = ({
  logo,
  websiteUrl,
  feedback,
  user
}: FeedbackPartialProps) => {
  return (
    <Flex justify="center" mb={8} id="feedback-section">
      <Box p={4} bg="blackAlpha.800" rounded="md" width="100%" color="white">
        <Flex align="center">
          <Box mr="auto">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </Box>
          <Text fontSize="lg" fontWeight="bold">
            <Link>{websiteUrl}</Link>
          </Text>
        </Flex>
        <Flex align="center">
          <Text fontStyle="italic" fontSize="xl" mt={4}>
            "{feedback}"
          </Text>
        </Flex>
        <Flex align="center" justify="left" mt={4} mb={4}>
          <Image
            src={user.photo}
            alt="User Photo"
            borderRadius="full"
            boxSize={12}
          />
          <Text ml={2} fontSize="lg" fontWeight="bold">
            {user.fullName}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  sectionRef
}) => {
  return (
    <Box py={8} ref={sectionRef}>
      <Container maxW="container.md" textAlign="center">
        <Text as="h2" fontSize="4xl" fontWeight="bold" mb={8}>
          Feedback
        </Text>
        <FeedbackPartial
          logo="https://img.logoipsum.com/238.svg"
          websiteUrl="domain.com"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          ligula eros. Praesent lobortis enim a arcu sagittis, in
          consequat neque aliquam."
          user={{
            fullName: "Jane Doe",
            photo: "https://randomuser.me/api/portraits/women/81.jpg"
          }}
        />

        <FeedbackPartial
          logo="https://img.logoipsum.com/245.svg"
          websiteUrl="website.com"
          feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          ligula eros. Praesent lobortis enim a arcu sagittis, in
          consequat neque aliquam."
          user={{
            fullName: "John Doe",
            photo: "https://randomuser.me/api/portraits/men/81.jpg"
          }}
        />
      </Container>
    </Box>
  );
};
