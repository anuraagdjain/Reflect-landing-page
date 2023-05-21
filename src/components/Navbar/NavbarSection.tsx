import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import React, { MutableRefObject, useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

type NavbarSectionProps = {
  sectionRefs: MutableRefObject<HTMLDivElement | null>[];
};

enum SectionRefName {
  NONE,
  ABOUT_SECTION,
  HOW_IT_WORKS_SECTION,
  PRICING_SECTION,
  FEEDBACK_SECTION
}

const getLinkActiveColor = (
  activeSession: SectionRefName,
  sectionRef: SectionRefName
): string => (activeSession === sectionRef ? "pink.bright" : "black");

const scrollToPosition = (
  sectionRef: MutableRefObject<HTMLDivElement | null>
) => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

export const NavbarSection: React.FC<NavbarSectionProps> = ({
  sectionRefs
}) => {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(SectionRefName.NONE);
  const [
    aboutSectionRef,
    howItWorksSectionRef,
    pricingSectionRef,
    customersSectionRef
  ] = sectionRefs;
  useEffect(() => {
    return scrollY.on("change", () => {
      const scrollPos = scrollY.get();
      setIsScrolled(scrollPos > 0);

      if (
        aboutSectionRef.current &&
        howItWorksSectionRef.current &&
        scrollPos >= aboutSectionRef.current?.offsetTop &&
        scrollPos < howItWorksSectionRef.current.offsetTop
      ) {
        setActiveSection(SectionRefName.ABOUT_SECTION);
      } else if (
        pricingSectionRef.current &&
        howItWorksSectionRef.current &&
        scrollPos >= howItWorksSectionRef.current.offsetTop &&
        scrollPos < pricingSectionRef.current?.offsetTop
      ) {
        setActiveSection(SectionRefName.HOW_IT_WORKS_SECTION);
      } else if (
        pricingSectionRef.current &&
        customersSectionRef.current &&
        scrollPos >= pricingSectionRef.current.offsetTop &&
        scrollPos < customersSectionRef.current.offsetTop
      ) {
        setActiveSection(SectionRefName.PRICING_SECTION);
      } else if (
        customersSectionRef.current &&
        scrollPos >= customersSectionRef.current.offsetTop
      ) {
        setActiveSection(SectionRefName.FEEDBACK_SECTION);
      } else {
        setActiveSection(SectionRefName.NONE);
      }
    });
  }, [
    scrollY,
    aboutSectionRef,
    howItWorksSectionRef,
    pricingSectionRef,
    customersSectionRef,
    activeSection
  ]);

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      py={4}
      backdropFilter="blur(10px)"
      bg={`rgba(255, 255, 255, ${isScrolled ? 0.8 : 0})`}
      boxShadow={isScrolled ? "lg" : "none"}
      transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" padding={4} mx="auto">
          <Box>
            <Image src="https://img.logoipsum.com/297.svg" alt="Logo" />
          </Box>

          {/* Desktop Navbar */}
          <Flex align="center" display={{ base: "none", md: "block" }}>
            <Link
              mx={4}
              onClick={() => scrollToPosition(aboutSectionRef)}
              _hover={{ textDecoration: "none" }}
              color={getLinkActiveColor(
                activeSection,
                SectionRefName.ABOUT_SECTION
              )}
            >
              Benefits
            </Link>
            <Link
              mx={4}
              onClick={() => scrollToPosition(howItWorksSectionRef)}
              _hover={{ textDecoration: "none" }}
              color={getLinkActiveColor(
                activeSection,
                SectionRefName.HOW_IT_WORKS_SECTION
              )}
            >
              How it works
            </Link>
            <Link
              mx={4}
              onClick={() => scrollToPosition(pricingSectionRef)}
              _hover={{ textDecoration: "none" }}
              color={getLinkActiveColor(
                activeSection,
                SectionRefName.PRICING_SECTION
              )}
            >
              Pricing
            </Link>
            <Link
              mx={4}
              onClick={() => scrollToPosition(customersSectionRef)}
              _hover={{ textDecoration: "none" }}
              color={getLinkActiveColor(
                activeSection,
                SectionRefName.FEEDBACK_SECTION
              )}
            >
              Customers
            </Link>
            <Button colorScheme="pink" color="white" bg="pink.bright" p={6}>
              Get started
            </Button>
          </Flex>
          {/* End of Desktop Navbar */}

          {/* Mobile menu navbar */}
          <Box display={{ base: "block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                border="none"
              />
              <MenuList>
                <MenuItem>
                  <Link href="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">How it works</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">Pricing</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">Customers</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          {/* End of mobile menu navbar */}
        </Flex>
      </Container>
    </Box>
  );
};
