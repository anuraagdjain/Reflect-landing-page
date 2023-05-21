import React, { useRef } from "react";
import { HeroSection } from "./components/Hero/HeroSection";
import { NavbarSection } from "./components/Navbar/NavbarSection";
import { HowItWorksSection } from "./components/HowItWorks/HowItWorksSection";
import { FeedbackSection } from "./components/Feedback/FeedbackSection";
import { FooterSection } from "./components/Footer/FooterSection";
import { PricingSection } from "./components/Pricing/PricingSection";
import { AboutProjectSection } from "./components//AboutProject/AboutProjectSection";

export const App = () => {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const pricingSectionRef = useRef<HTMLDivElement | null>(null);
  const customersSectionRef = useRef<HTMLDivElement | null>(null);
  const howItWorksSectionRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    aboutSectionRef,
    howItWorksSectionRef,
    pricingSectionRef,
    customersSectionRef
  ];

  return (
    <>
      <NavbarSection sectionRefs={sectionRefs} />
      <HeroSection />
      <AboutProjectSection sectionRef={aboutSectionRef} />
      <HowItWorksSection sectionRef={howItWorksSectionRef} />
      <PricingSection sectionRef={pricingSectionRef} />
      <FeedbackSection sectionRef={customersSectionRef} />
      <FooterSection />
    </>
  );
};
