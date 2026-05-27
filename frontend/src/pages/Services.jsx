import React from "react";
import { Box } from "@mui/material";
import ServicesHero from "../Components/service-components/1_Hero";
import ServicePillars from "../Components/service-components/2_ServicePillars";
import ServicesCTA from "../Components/service-components/3_ServicesCTA";
import GmailButton from "../Components/common-components/Gmailbutton";

function Services() {
  return (
	<Box sx={{ pt:{ xs:10,md:10 } }}>
	  <ServicesHero />
	  <ServicePillars />
	  <ServicesCTA />
	  <GmailButton />
	</Box>
  );
}

export default Services;
