import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CTAButton from "../common-components/CTAButton";
import { PRIMARY, SECONDARY } from "../../Constants.js";

export default function ServicesCTA() {
  return (
    <Box sx={{ py:{ xs:8,md:10 }, textAlign:"center", background:`linear-gradient(160deg,${PRIMARY}0d 0%,${SECONDARY}0d 100%)` }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb:2, fontWeight:700 }}>Not sure which services you need?</Typography>
        <Typography sx={{ opacity:0.65, mb:4 }}>Book a discovery call. We'll listen first, then recommend only what makes sense for your business size and stage.</Typography>
        <CTAButton text="Book a Discovery Call" />
      </Container>
    </Box>
  );
}
