import React from "react";
import { Box } from "@mui/material";
import WhyHero from "../Components/why-components/1_Hero";
import TheSolutions from "../Components/why-components/2_TheSolutions";
import FaqGroup from "../Components/why-components/3_FaqGroup";
import WhyCTA from "../Components/why-components/4_WhyCTA";
import GmailButton from "../Components/common-components/Gmailbutton";

function WhyCRKL() {
  return (
	<Box sx={{ pt:{ xs:10,md:10 } }}>
	  <WhyHero />
	  <TheSolutions />
	  <FaqGroup />
	  <WhyCTA />
	  <GmailButton />
	</Box>
  );
}

export default WhyCRKL;
