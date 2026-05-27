import React from "react";
import { Box } from "@mui/material";
import Hero from "../Components/about-components/1_Hero";
import FounderHero from "../Components/about-components/1_FounderHero";
import EducationAndCareer from "../Components/about-components/2_EducationAndCareer";
import FounderQuote from "../Components/about-components/3_FounderQuote";
import CompanyOverview from "../Components/about-components/4_CompanyOverview";
import Concerns from "../Components/about-components/5_Concerns";
import StepRoadMap from "../Components/about-components/6_StepRoadMap";
import KoplLeadership from "../Components/about-components/7_KoplLeadership";
import MissionVision from "../Components/about-components/8_MissionVision";
import AboutCTA from "../Components/about-components/9_AboutCTA";
import GmailButton from "../Components/common-components/Gmailbutton";

function About() {
  return (
    <Box>
      <Hero />
      <FounderHero />
      <EducationAndCareer />
      <FounderQuote />
      <CompanyOverview />
      <Concerns />
      <StepRoadMap />
      <KoplLeadership />
      <MissionVision />
      <AboutCTA />
      <GmailButton />
    </Box>
  );
}

export default About;