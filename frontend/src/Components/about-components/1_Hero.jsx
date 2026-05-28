import React from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import CTAButton from "../common-components/CTAButton";
import { PRIMARY, SECONDARY } from "../../constants";

export default function Hero() {
  return (
    <Box sx={{
      minHeight: "100vh", display: "flex", alignItems: "center", mb:{ xs:6, md:8 },
      pt: { xs: 10, md: 8 },
      background: `radial-gradient(ellipse at 70% 40%,${SECONDARY}22 0%,transparent 55%),radial-gradient(ellipse at 20% 80%,${PRIMARY}18 0%,transparent 50%)`,
      position: "relative", overflow: "hidden",
    }}>
      <Box sx={{ position:"absolute",top:-80,right:-80,width:400,height:400,borderRadius:"50%",background:`${PRIMARY}12`,filter:"blur(60px)",pointerEvents:"none",zIndex:0 }} />
      <Box sx={{ position:"absolute",bottom:-60,left:-60,width:320,height:320,borderRadius:"50%",background:`${SECONDARY}18`,filter:"blur(50px)",pointerEvents:"none",zIndex:0 }} />

      <Container maxWidth="lg" sx={{ position:"relative", zIndex:1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={12} sx={{ order: { xs: 2, md: 1 } }}>
            <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "left" }}>
              <Chip label="Chesterfield, Missouri — U.S.-Managed" size="small" sx={{ mb: 3, background: `${PRIMARY}18`, color: PRIMARY, fontWeight: 700, border: `1px solid ${PRIMARY}40` }} />

              <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" }, lineHeight: 1.25, mb: 3, fontWeight: 700, "& span": { background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }}>
                The Only Resource You Will Need For Your <span>Business Outsourcing Needs.</span></Typography>

              <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, opacity: 0.85, mb: 4, lineHeight: 1.9 }}>
                Before you consider entrusting your business work to anyone, you deserve to know exactly who is accountable.<strong> Not a company name.</strong> <strong>Not a tagline.</strong> A person — with a verifiable background, a proven track record, and a genuine stake in this community.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
