import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import SpiralBg from "../common-components/SpiralBg";
import { PRIMARY } from "../../constants";

export default function ServicesHero() {
  return (
    <Box sx={{ minHeight: { xs: '60vh', md: '70vh' }, py:{ xs:6,md:8 }, mb:{ xs:4, md:6 }, textAlign:"center", background:`radial-gradient(ellipse at 50% 30%,${PRIMARY}18 0%,transparent 60%)`, position:"relative", overflow:"hidden" }}>
      <SpiralBg />
      <Container maxWidth="md" sx={{ position:"relative", zIndex:1 }}>
        <Chip label="Services" sx={{ mb:3, background:`${PRIMARY}20`, color:PRIMARY, fontWeight:700 }} />
        <Typography variant="h1" sx={{ fontSize:{ xs:"2.2rem",md:"3rem" }, mb:2 }}>Professional services. Measurable outcomes.</Typography>
        <Typography sx={{ opacity:0.65, fontSize:"1.08rem", lineHeight:1.8 }}>Every service is delivered by qualified professionals at KOPL's secure Madurai office — managed from Chesterfield by M. Peri Periasamy.</Typography>
      </Container>
    </Box>
  );
}
