import React, { useState } from "react";
import { Box, Container, Typography, Chip, Accordion, AccordionSummary, AccordionDetails, Stack, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PRIMARY, SECONDARY, CONCERNS } from "../../constants";

const FAQAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: 18,
  overflow: "hidden",
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.mode === "dark" ? "rgba(13, 33, 55, 0.84)" : "rgba(255,255,255,0.72)",
  backdropFilter: "blur(12px)",
  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    margin: 0,
    boxShadow: theme.palette.mode === "dark" ? "0 18px 40px rgba(0,0,0,0.38)" : `0 18px 40px ${PRIMARY}18`,
    transform: "translateY(-1px)",
  },
}));

const FAQSummary = styled(AccordionSummary)(() => ({
  padding: "0 20px",
  minHeight: 72,
  "& .MuiAccordionSummary-content": {
    margin: "18px 0",
    alignItems: "center",
  },
}));

const AccentDot = styled(Box)(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
  boxShadow: `0 0 0 6px ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"}`,
  flexShrink: 0,
}));

export default function FaqGroup() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [expanded, setExpanded] = useState(false);
  const toggle = (p) => (_, isExp) => setExpanded(isExp ? p : false);

  const FAQ_GROUPS = [
    { label: "Trust & Accountability", items: CONCERNS.slice(0,4) },
    { label: "Data Security & Confidentiality", items: [ { q:"Who has access to my QuickBooks or financial systems?", a:"Only the specific team members assigned to your engagement. Access is role-limited, monitored, and can be revoked at any time. We use cloud-based systems with access logs, so there is always a verifiable record." }, { q:"What happens to my data if we end the engagement?", a:"Your data belongs to you. Upon engagement closure, all access is revoked, and data handling procedures are followed per the terms of your agreement. We can walk you through exactly what this looks like before you sign anything." } ] },
    { label: "Cost, Pricing & Value", items: [ { q:"Are there hidden costs I should know about?", a:"No. Every engagement is scoped in writing before it begins. Costs, scope, and any potential additions are discussed transparently upfront. You will not receive surprise invoices." }, { q:"Can I start with just one service and expand later?", a:"Yes. Most clients begin with one focused area — typically bookkeeping or tax support — and expand as they see results. We grow with your business at your pace." } ] },
    { label: "Process & Onboarding", items: [ { q:"What information do I need to provide to get started?", a:"Typically: access to your accounting software (QuickBooks), a summary of your current processes, any existing reports or chart of accounts, and your preferred reporting formats. We guide you through a checklist — you don't need to figure it out alone." }, { q:"Can I stop or pause the engagement if my needs change?", a:"Yes. Engagement terms are discussed clearly upfront, including exit and pause conditions. We believe in long-term relationships built on results — not lock-in contracts that trap clients." } ] },
    { label: "IT Services", items: [ { q:"Do I need a technical background to work with your IT team?", a:"No. Our IT team translates technical requirements into plain business language. You describe the problem or the outcome you want — we handle the implementation and report back in terms you can act on." }, { q:"What kind of businesses is the IT service suited for?", a:"SMEs that need reliable web development, automation, or IT system support — but do not have the volume to justify a full-time in-house developer or IT manager." } ] },
  ];

  return (
    <Box sx={{ py:{ xs:8,md:12 }, background: isDark ? "linear-gradient(180deg, #0a1929 0%, #07131f 100%)" : `linear-gradient(160deg,${PRIMARY}0d 0%,${SECONDARY}0d 100%)` }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign:"center", mb:7 }}>
          <Chip label="FAQ" sx={{ mb:2, background:`${SECONDARY}20`, color:SECONDARY, fontWeight:800, px:1.2 }} />
          <Typography variant="h2" sx={{ fontSize:{ xs:"2rem",md:"2.6rem" }, mb:1.5, fontWeight:800, color: isDark ? "common.white" : "text.primary" }}>
            Every question answered
          </Typography>
          <Typography sx={{ opacity:isDark ? 0.82 : 0.65, maxWidth:620, mx:"auto", lineHeight:1.8, color: isDark ? "rgba(255,255,255,0.78)" : "text.secondary" }}>
            A cleaner view of the most common questions, organized by topic so visitors can expand only what they need.
          </Typography>
        </Box>

        {FAQ_GROUPS.map((group, gi) => (
          <Box key={gi} sx={{ mb:5 }}>
            <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb:2 }}>
              <AccentDot />
              <Typography sx={{ fontWeight:800, color:gi%2===0?PRIMARY:SECONDARY, fontSize:"0.82rem", textTransform:"uppercase", letterSpacing:1.7 }}>
                {group.label}
              </Typography>
              <Divider sx={{ flex:1, borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)" }} />
            </Stack>
            <Box sx={{ display:"flex", flexDirection:"column", gap:1.5 }}>
              {group.items.map((item, i) => {
                const key = `g${gi}-i${i}`;
                return (
                  <FAQAccordion key={key} expanded={expanded===key} onChange={toggle(key)} disableGutters elevation={0}>
                    <FAQSummary expandIcon={<ExpandMoreIcon sx={{ color:expanded===key?(gi%2===0?PRIMARY:SECONDARY):"inherit" }} />}>
                      <Box sx={{ display:"flex", alignItems:"center", gap:1.5, pr:1 }}>
                        <Box sx={{ width:36, height:36, borderRadius:"12px", display:"grid", placeItems:"center", bgcolor:`${expanded===key ? (gi%2===0?PRIMARY:SECONDARY) : PRIMARY}12`, color:expanded===key?(gi%2===0?PRIMARY:SECONDARY):PRIMARY, fontWeight:800, flexShrink:0 }}>
                          Q
                        </Box>
                        <Typography sx={{ fontWeight:700, fontSize:"0.98rem", lineHeight:1.4, color: isDark ? "common.white" : "text.primary" }}>{item.q}</Typography>
                      </Box>
                    </FAQSummary>
                    <AccordionDetails sx={{ px:3, pb:3, pt:0 }}>
                      <Typography sx={{ opacity:isDark ? 0.82 : 0.76, lineHeight:1.85, pl:6, color: isDark ? "rgba(255,255,255,0.78)" : "text.secondary" }}>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </FAQAccordion>
                );
              })}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}