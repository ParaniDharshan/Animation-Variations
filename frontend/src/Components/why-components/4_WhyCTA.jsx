import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CTAButton from "../common-components/CTAButton";

export default function WhyCTA() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ py:{ xs:8,md:10 }, textAlign:"center", background: isDark ? "linear-gradient(180deg, #07131f 0%, #0a1929 100%)" : "transparent" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ mb:2, fontWeight:700, color: isDark ? "common.white" : "text.primary" }}>Still have a question we haven't answered?</Typography>
        <Typography sx={{ opacity:isDark ? 0.82 : 0.65, mb:4, color: isDark ? "rgba(255,255,255,0.78)" : "text.secondary" }}>Book a 30-minute call with Peri. Ask anything. No pitch, no pressure.</Typography>
        <CTAButton text="Book a Discovery Call" />
      </Container>
    </Box>
  );
}
