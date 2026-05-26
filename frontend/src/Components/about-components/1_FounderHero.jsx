import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { Verified as VerifiedIcon } from "@mui/icons-material";
import SpiralBg from "../common-components/SpiralBg";
import { PRIMARY, SECONDARY } from "../../constants";
import PeriImage from "../../assets/Peri_Sir_Image.png";

export default function FounderHero() {
  return (
    <Box sx={{
      py:{ xs:8,md:12 },
      mb:{ xs:6, md:8 },
      background: (theme) =>
        theme.palette.mode === "dark"
          ? `linear-gradient(160deg,${SECONDARY}08 0%,transparent 60%)`
          : `linear-gradient(160deg,${SECONDARY}06 0%,transparent 60%)`,
      position:"relative", overflow:"hidden",
    }}>
      <Container maxWidth="lg" sx={{ position:"relative", zIndex:1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
            columnGap: { xs: 4, md: 8 },
            rowGap: { xs: 4, md: 0 },
            alignItems: { xs: "start", md: "end" },
          }}
        >
          {/* Left image block */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignSelf: { md: "end" }, mt: { xs: 2, md: 10 } }}>
            <Box component="img" src={PeriImage} alt="M. Peri Periasamy" sx={{
              width:{ xs:260,md:380 }, height:{ xs:320,md:460 },
              borderRadius:"24px",
              objectFit: 'cover',
              border:`2px solid ${PRIMARY}35`,
              boxShadow:`0 24px 80px ${PRIMARY}28`,
            }} />
          </Box>

          {/* Right content block */}
          <Box sx={{ alignSelf: { md: "center" } }}>
            <Chip icon={<VerifiedIcon sx={{ color: `${PRIMARY} !important` }} />} label="About the Founder" sx={{ mb:3, background:`${PRIMARY}20`, color:PRIMARY, fontWeight:700 }} />
            <Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.8rem" }, mb:1 }}>
              M. Peri Periasamy
            </Typography>
            <Typography sx={{ color:SECONDARY, fontWeight:700, mb:3, fontSize:"1.05rem" }}>
              Founder — CRKL Inc. & KOPL
            </Typography>
            
            <Typography sx={{ opacity:0.75,mb:3, lineHeight:1.85 }}>
              Peri was born and raised in Madurai, Tamil Nadu, India. His father owned a small hardware products distribution company, and from his earliest years, Peri worked there during summers and college breaks. He learned what it truly means to operate a small business: the long hours, the discipline of cash flow management, the weight of customer trust, and the quiet satisfaction of building something with your own hands.
            </Typography>
            <Typography sx={{ fontSize:"1.2rem", fontStyle:"italic", opacity:0.8, mb:3, borderLeft:`4px solid ${PRIMARY}`, pl:2 }}>
              "I've always loved business."
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
