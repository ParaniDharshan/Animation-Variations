import React from "react";
import { Container, Typography } from "@mui/material";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import { PRIMARY } from "../../Constants.js";

export default function FounderQuote() {
  return (
    <Container maxWidth="md" sx={{ py:6, textAlign:"center" }}>
      <QuoteIcon sx={{ fontSize:"3rem", color:PRIMARY, opacity:0.3 }} />
      <Typography variant="h5" sx={{ fontStyle:"italic", fontWeight:400, lineHeight:1.7, my:2, opacity:0.85 }}>
        "Both experiences allowed me to better understand the business needs of small companies in the Chesterfield region."
      </Typography>
      <Typography sx={{ color:PRIMARY, fontWeight:700 }}>— M. Peri Periasamy, Founder, CRKL Inc.</Typography>
    </Container>
  );
}
