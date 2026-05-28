import React from "react";
import { Box, Container, Typography, Chip, Card, Divider, Avatar } from "@mui/material";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import { TESTIMONIALS, PRIMARY, SECONDARY } from "../../Constants.js";

export default function Testimonal() {
  return (
    <Box sx={{ py:{ xs:8,md:10 }, background:`linear-gradient(160deg,${SECONDARY}0d 0%,${PRIMARY}0d 100%)` }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign:"center", mb:6 }}>
          <Chip label="Client Voice" sx={{ mb:2, background:`${PRIMARY}20`, color:PRIMARY, fontWeight:700 }} />
          <Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.4rem" } }}>What our clients say</Typography>
        </Box>
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} sx={{ p:{ xs:3,md:5 }, border:`1px solid ${PRIMARY}30`, boxShadow:`0 16px 60px ${PRIMARY}18` }}>
            <QuoteIcon sx={{ fontSize:"3rem", color:PRIMARY, opacity:0.25, mb:1 }} />
            <Typography variant="h6" sx={{ fontStyle:"italic", lineHeight:1.8, mb:3, fontWeight:400, opacity:0.85 }}>
              "{t.quote}"
            </Typography>
            <Divider sx={{ mb:2.5 }} />
            <Box sx={{ display:"flex", alignItems:"center", gap:2 }}>
              <Avatar sx={{ background:`linear-gradient(135deg,${PRIMARY},${SECONDARY})`, fontWeight:800 }}>{t.avatar}</Avatar>
              <Box>
                <Typography sx={{ fontWeight:700 }}>{t.name}</Typography>
                <Typography variant="caption" sx={{ opacity:0.6 }}>{t.role}</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
