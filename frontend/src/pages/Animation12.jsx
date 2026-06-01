import React from "react";
import { Box } from "@mui/material";
import Hero from "../Components/home-components/1_Hero";
import ThreePillars from "../Components/home-components/2_ThreePillars";
import HowItWorks from "../Components/home-components/3_HowItWorks";
import Testimonal from "../Components/home-components/4_Testimonal";
import GmailButton from "../Components/common-components/Gmailbutton";
import { LissajousWebBg, ArcBurstBg, ArcRotateBg } from "../Components/Sections/HeroVariants";

function Animation12() {
  return (
    <Box>
      <ArcBurstBg />
      <Hero />
      <ThreePillars />
      <HowItWorks />
      <Testimonal />
      <GmailButton />
    </Box>
  );
}

export default Animation12;
