import React from "react";
import { Box } from "@mui/material";
import Hero from "../Components/home-components/1_Hero";
import ThreePillars from "../Components/home-components/2_ThreePillars";
import HowItWorks from "../Components/home-components/3_HowItWorks";
import Testimonal from "../Components/home-components/4_Testimonal";
import GmailButton from "../Components/common-components/Gmailbutton";
import { OrbitingDots, HelixWave, RotatingArc } from "../Components/Sections/HeroVariants";

function Animation16() {
  return (
    <Box>
      <RotatingArc />
      <Hero />
      <ThreePillars />
      <HowItWorks />
      <Testimonal />
      <GmailButton />
    </Box>
  );
}

export default Animation16;
