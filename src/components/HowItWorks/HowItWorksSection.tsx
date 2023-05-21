import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React, { MutableRefObject } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type StepSectionPartialProps = {
  step: string;
  title: string;
  content: string;
  additionalContent?: JSX.Element;
};
type HowItWorksSectionProps = {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
};

const StepSectionPartial = ({
  step,
  title,
  content,
  additionalContent
}: StepSectionPartialProps) => (
  <Box mb={8}>
    <Box mb={4} display="flex" alignItems="center">
      <Text fontWeight="bold" fontSize="2xl">
        {step}:
      </Text>
      <Text ml={2} fontSize="2xl">
        {title}
      </Text>
    </Box>
    <Text>{content}</Text>
    {additionalContent}
  </Box>
);

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
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
          How it works?
        </Heading>
        <StepSectionPartial
          step="Step 1"
          title="Start"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
          tincidunt turpis sed, accumsan odio. Donec auctor ante eget ligula egestas lobortis.
          Etiam nec arcu in tortor sollicitudin mattis. Vivamus consectetur commodo mi, ut
          consectetur erat tristique in. Nam commodo ligula id ipsum sodales, ac mattis nunc
          consectetur. Nullam quis pharetra arcu, ac bibendum enim. Aliquam rutrum ultrices
          fermentum. Curabitur sit amet elementum lorem. Integer et purus eleifend, finibus
          justo sed, feugiat ligula. Suspendisse potenti. Vestibulum sed felis in elit sagittis
          viverra. Sed nec pharetra lacus."
          additionalContent={
            <Box mt={4}>
              <SyntaxHighlighter language="bash" style={atomDark}>
                {`
# Backup
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql

# Restore
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE
            `}
              </SyntaxHighlighter>
            </Box>
          }
        />

        <StepSectionPartial
          step="Step 2"
          title="Process"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
          tincidunt turpis sed, accumsan odio. Donec auctor ante eget ligula egestas lobortis.
          Etiam nec arcu in tortor sollicitudin mattis. Vivamus consectetur commodo mi, ut
          consectetur erat tristique in. Nam commodo ligula id ipsum sodales, ac mattis nunc
          consectetur. Nullam quis pharetra arcu, ac bibendum enim. Aliquam rutrum ultrices
          fermentum. Curabitur sit amet elementum lorem. Integer et purus eleifend, finibus
          justo sed, feugiat ligula. Suspendisse potenti. Vestibulum sed felis in elit sagittis
          viverra. Sed nec pharetra lacus."
          additionalContent={
            <Box mt={4}>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {`
const items = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' },
];

const ids = items
  .map(item => item.id > 2 ? item.id : null) 
  .filter(id => id !== null)

console.log(ids); // output: [3]

            `}
              </SyntaxHighlighter>
            </Box>
          }
        />

        <StepSectionPartial
          step="Step 3"
          title="Cleanup"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
          tincidunt turpis sed, accumsan odio. Donec auctor ante eget ligula egestas lobortis.
          Etiam nec arcu in tortor sollicitudin mattis. Vivamus consectetur commodo mi, ut
          consectetur erat tristique in. Nam commodo ligula id ipsum sodales, ac mattis nunc
          consectetur. Nullam quis pharetra arcu, ac bibendum enim. Aliquam rutrum ultrices
          fermentum. Curabitur sit amet elementum lorem. Integer et purus eleifend, finibus
          justo sed, feugiat ligula. Suspendisse potenti. Vestibulum sed felis in elit sagittis
          viverra. Sed nec pharetra lacus."
          additionalContent={
            <Box mt={4}>
              <SyntaxHighlighter language="typescript" style={atomDark}>
                {`
interface Example {
  foo?: string;
  bar: number;
}`}
              </SyntaxHighlighter>
            </Box>
          }
        />
      </Container>
    </Box>
  );
};
