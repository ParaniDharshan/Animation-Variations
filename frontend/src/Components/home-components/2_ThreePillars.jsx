import React from "react";
import { Box, Container, Typography, Chip, Card, CardContent } from "@mui/material";
import { SERVICES, PRIMARY, SECONDARY } from "../../Constants.js";

export default function ThreePillars() {
  return (
    <Box sx={{ py:{ xs:8,md:12 }, background:`linear-gradient(160deg,${PRIMARY}08 0%,${SECONDARY}08 100%)` }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign:"center", mb:8 }}>
          <Chip label="What We Do" sx={{ mb:2, background:`${SECONDARY}20`, color:SECONDARY, fontWeight:700 }} />
          <Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" }, mb:2 }}>
            Three pillars. One trusted partner.
          </Typography>
          <Typography sx={{ opacity:0.65, maxWidth:520, mx:"auto", lineHeight:1.8 }}>
            Every service is delivered through KOPL's dedicated professionals in Madurai — managed from Chesterfield, Missouri.
          </Typography>
        </Box>

        <Box sx={{ display:"flex", flexWrap:"wrap", gap:3, justifyContent:{ xs:"center",md:"flex-start" } }}>
          {SERVICES.map((s, i) => (
            <Card key={i} sx={{ flex:{ xs:"1 1 100%", sm:"1 1 calc(50% - 12px)", md:"1 1 calc(33.33% - 16px)" }, maxWidth:{ sm:"calc(50% - 12px)", md:"calc(33.33% - 16px)" }, border:`1px solid transparent`, transition:"all .28s ease", "&:hover":{ border:`1px solid ${s.color}50`, transform:"translateY(-6px)", boxShadow:`0 20px 60px ${s.color}20` } }}>
              <CardContent sx={{ p:3 }}>
                <Typography sx={{ fontSize:"2.2rem", mb:2 }}>{s.icon}</Typography>
                <Typography variant="h6" sx={{ fontWeight:700, mb:1 }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ opacity:0.68, lineHeight:1.75, mb:2 }}>{s.summary}</Typography>
                <Chip label={s.tag} size="small" sx={{ background:`${s.color}18`, color:s.color, fontWeight:700, fontSize:"0.7rem" }} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
