import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { PRIMARY, SECONDARY, NAV_LINKS, CONTACT_INFO } from "../../Constants.js";

function Footer({ mode }) {
  return (
    <Box component="footer" sx={{ py:6, background:mode==="dark"?"#05111d":"#0c1e30", color:"rgba(255,255,255,0.7)" }}>
      <Container maxWidth="lg">
        <Grid container spacing={30} justifyContent="space-between">
          <Grid item xs={12} sm={5}>
            <Typography sx={{
              fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:"1.3rem",
              background:`linear-gradient(90deg,${PRIMARY},${SECONDARY})`,
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", mb:1,
            }}>CRKL Inc.</Typography>
            <Typography variant="body2" sx={{ opacity:0.55, lineHeight:1.8, mb:1 }}>
              U.S.-Managed Business Outsourcing<br/>
              Chesterfield, Missouri
            </Typography>
            <Typography variant="caption" sx={{ opacity:0.4 }}>crklinc.com</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ fontWeight:700, mb:1.5, color:"#fff" }}>Quick Links</Typography>
            {NAV_LINKS.map((l) => (
              <Typography key={l} variant="body2" sx={{ mb:0.75, opacity:0.55, cursor:"pointer", "&:hover":{ opacity:1, color:PRIMARY } }}>{l}</Typography>
            ))}
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ fontWeight:700, mb:1.5, color:"#fff" }}>Contact</Typography>
            <Typography variant="body2" sx={{ opacity:0.55, mb:0.5 }}>{CONTACT_INFO.email}</Typography>
            <Typography variant="body2" sx={{ opacity:0.55, mb:0.5 }}>{CONTACT_INFO.phone}</Typography>
            <Typography variant="body2" sx={{ opacity:0.55 }}>{CONTACT_INFO.location}</Typography>
          </Grid>
        </Grid>

        {/*<Divider sx={{ my:4, borderColor:"rgba(255,255,255,0.08)" }} />
        <Box sx={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:1 }}>
          <Typography variant="caption" sx={{ opacity:0.35 }}>
            © {new Date().getFullYear()} CRKL Inc. All rights reserved. Chesterfield, Missouri.
          </Typography>
          <Typography variant="caption" sx={{ opacity:0.35 }}>
            Privacy Policy · Terms of Service
          </Typography>
        </Box>*/}
        
      </Container>
    </Box>
  );
}

export default Footer;