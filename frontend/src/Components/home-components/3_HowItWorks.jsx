import React from "react";
import { Box, Container, Typography, Chip, Card } from "@mui/material";
import CTAButton from "../common-components/CTAButton";
import { PRIMARY } from "../../constants";

export default function HowItWorks() {
  const steps = [
    { n:"1", t:"Tell us what you need", d:"A 30-minute discovery call with CRKL Inc. is all it takes to scope your accounting or IT requirements, timelines, and reporting preferences." },
    { n:"2", t:"We match and set up", d:"CRKL assigns qualified professionals through KOPL, sets up secure communication channels, and establishes document workflows — all before day one." },
    { n:"3", t:"We deliver, you review", d:"Work runs on agreed schedules. You receive regular updates, review meetings, and accurate deliverables — without managing the team directly." },
  ];

  return (
    <Box sx={{ py:{ xs:8,md:12 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign:"center", mb:8 }}>
          <Chip label="How It Works" sx={{ mb:2, background:`${PRIMARY}20`, color:PRIMARY, fontWeight:700 }} />
          <Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" }, mb:2 }}>Simple. Structured. Accountable.</Typography>
        </Box>

        <Box sx={{ display:"flex", flexDirection:"column", gap:3 }}>
          {steps.map((step) => (
            <Card key={step.n} sx={{ display:"flex", alignItems:"flex-start", gap:3, p:3, border:`1px solid ${PRIMARY}20`, "&:hover":{ borderColor:PRIMARY, boxShadow:`0 8px 30px ${PRIMARY}18` }, transition:"all .25s" }}>
              <Box sx={{ minWidth:52, height:52, borderRadius:"14px", flexShrink:0, background:`linear-gradient(135deg,${PRIMARY},#5aa)`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>
                <Typography sx={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:"1.4rem" }}>{step.n}</Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight:700, mb:0.5 }}>{step.t}</Typography>
                <Typography variant="body2" sx={{ opacity:0.7, lineHeight:1.75 }}>{step.d}</Typography>
              </Box>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign:"left", mt:6 }}>
          <CTAButton text="Book a Discovery Call" sub="Ready to reduce overhead and gain operational clarity?" />
        </Box>
      </Container>
    </Box>
  );
}