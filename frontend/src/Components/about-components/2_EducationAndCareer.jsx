import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Chip,
  Card,
  CardContent,
  Collapse,
  Divider,
  Fade,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import {
  School as SchoolIcon,
  Business as BusinessIcon,
  Verified as VerifiedIcon,
  EmojiEvents as TrophyIcon,
  Groups as CivicIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import { PRIMARY, SECONDARY } from "../../constants";

const P = PRIMARY;
const S = SECONDARY;
const GRAD = `linear-gradient(135deg, ${P}, ${S})`;

const EDUCATION_STEPS = [
  {
    label: "Doctorate in Chemistry",
    institution: "Florida State University",
    icon: <SchoolIcon />,
    color: P,
    detail:
      "Foundational scientific discipline — analytical precision, research methodology, and evidence-based decision-making.",
  },
  {
    label: "MBA — International Business",
    institution: "Saint Louis University",
    icon: <BusinessIcon />,
    color: S,
    detail:
      "Specialization in cross-border commerce, global market dynamics, and multinational operations management.",
  },
  {
    label: "Juris Doctor (Law Degree)",
    institution: "Saint Louis University",
    icon: <VerifiedIcon />,
    color: P,
    detail:
      "Grounding in U.S. contract law, corporate governance, and regulatory compliance — applied directly to client engagements.",
  },
];

const CIVIC_STEPS = [
  {
    year: "2012",
    label: "Joined Chesterfield Regional Chamber of Commerce",
    sub: "Led the Business Education Committee for ~3 years",
  },
  {
    year: "2014–2019",
    label: "Board of Directors — Chamber of Commerce",
    sub: "Five-year tenure shaping regional business policy",
  },
  {
    year: "2019",
    label: "Chairman of the Board",
    sub: "Chesterfield Regional Chamber of Commerce",
  },
  {
    year: "2017–Present",
    label: "Finance & Admin Citizens Advisory Committee",
    sub: "City of Chesterfield — ongoing civic service",
  },
];

const CAREER_HIGHLIGHTS = [
  {
    icon: "🏭",
    title: "Mallinckrodt — Fortune 500",
    body:
      "Deep exposure to American corporate culture inside one of St. Louis's most demanding multinationals.",
  },
  {
    icon: "🎯",
    title: "Results-Based Culture",
    body:
      "Internalized goals-and-target-date-driven operations and zero tolerance for quality lapses.",
  },
  {
    icon: "💰",
    title: "Cost Discipline",
    body:
      "Mastery of cost discipline and financial accountability at enterprise scale.",
  },
  {
    icon: "🤝",
    title: "Trust & Reliability",
    body:
      "Built a career on the professional principle that trust is the non-negotiable foundation of every business relationship.",
  },
];

const CAREER_HIGHLIGHTS_PARAGRAPH =
  "His years at Mallinckrodt — a multinational corporation headquartered in St. Louis — gave him deep fluency in how American business truly operates at the highest level.";

function EducationCard({ step, index, activeEdu, setActiveEdu }) {
  const isOpen = activeEdu === index;
  return (
    <Step completed={index < activeEdu}>
      <StepLabel
        onClick={() => setActiveEdu(isOpen ? -1 : index)}
        sx={{
          cursor: "pointer",
          "& .MuiStepLabel-label": {
            fontWeight: isOpen ? 700 : 500,
            color: isOpen ? step.color : "inherit",
          },
          "& .MuiStepIcon-root": {
            color: isOpen ? step.color : "action.disabled",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: step.color,
          },
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "0.92rem", lineHeight: 1.3 }}>
            {step.label}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            {step.institution}
          </Typography>
        </Box>
      </StepLabel>
      <StepContent>
        <Typography variant="body2" sx={{ opacity: 0.75, lineHeight: 1.75, py: 1 }}>
          {step.detail}
        </Typography>
      </StepContent>
    </Step>
  );
}

function CivicTimeline() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Box>
      {CIVIC_STEPS.map((item, i) => {
        const isOpen = openIdx === i;
        const isLast = i === CIVIC_STEPS.length - 1;
        const accent = i === 2 ? S : P;

        return (
          <Box key={item.year} sx={{ display: "flex", gap: { xs: 1.5, sm: 2 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 20,
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  mt: "5px",
                  flexShrink: 0,
                  border: `2px solid ${isOpen ? accent : "rgba(0,0,0,0.18)"}`,
                  background: isOpen ? accent : "transparent",
                  transition: "all .2s ease",
                  transform: isOpen ? "scale(1.3)" : "scale(1)",
                }}
              />
              {!isLast && (
                <Box
                  sx={{
                    width: "1px",
                    flex: 1,
                    minHeight: 12,
                    mt: 0.5,
                    mb: 0.5,
                    background: "rgba(0,0,0,0.1)",
                  }}
                />
              )}
            </Box>

            <Box sx={{ pb: 2, flex: 1, cursor: "pointer" }} onClick={() => setOpenIdx(isOpen ? -1 : i)}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, color: accent, mb: 0.25 }}>
                    {item.year}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "0.82rem", sm: "0.88rem" }, fontWeight: isOpen ? 600 : 500, lineHeight: 1.45, pr: 1 }}>
                    {item.label}
                  </Typography>
                </Box>
                {isOpen ? (
                  <ExpandLessIcon sx={{ fontSize: 16, opacity: 0.35, mt: 0.25, flexShrink: 0 }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: 16, opacity: 0.25, mt: 0.25, flexShrink: 0 }} />
                )}
              </Box>

              <Collapse in={isOpen} timeout={300}>
                <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.82rem" }, lineHeight: 1.7, opacity: 0.62, mt: 0.75, pr: 1 }}>
                  {item.sub}
                </Typography>
              </Collapse>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default function EducationAndCareer() {
  const [activeEdu, setActiveEdu] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box ref={ref} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Fade in={visible} timeout={700}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Chip
              icon={<VerifiedIcon sx={{ color: `${P} !important` }} />}
              label="About Our Founder"
              sx={{ mb: 2.5, background: `${P}14`, color: P, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 0.8 }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}>
              Periasamy (Peri) Krishnamoorthy
            </Typography>
            <Typography sx={{ opacity: 0.6, maxWidth: 600, mx: "auto", lineHeight: 1.85 }}>
              Born in Madurai. Built in America. Committed to Chesterfield. Over five decades of academic excellence, corporate experience, and civic leadership — all in service of the U.S. small business owner.
            </Typography>
          </Box>
        </Fade>

        <Fade in={visible} timeout={900}>
          <Card sx={{ mb: 5, p: { xs: 3, md: 5 }, background: GRAD, color: "#fff", overflow: "hidden", position: "relative" }}>
            <Box sx={{ position: "absolute", right: -60, top: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
            <Box sx={{ position: "absolute", right: 60, bottom: -80, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm="auto">
                <Avatar sx={{ width: 100, height: 100, fontSize: "2.6rem", background: "rgba(255,255,255,0.22)", border: "3px solid rgba(255,255,255,0.4)", mx: { xs: "auto", sm: 0 } }}>
                  PK
                </Avatar>
              </Grid>
              <Grid item xs={12} sm>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                  Periasamy Krishnamoorthy
                </Typography>
                <Typography sx={{ opacity: 0.88, mb: 2 }}>
                  Founder & Director — CRKL Inc. · Chesterfield, Missouri
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {["PhD Chemistry", "MBA Int'l Business", "JD Law", "IRS Enrolled Agent", "50+ Years U.S. Experience"].map((tag) => (
                    <Chip key={tag} label={tag} size="small" sx={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontWeight: 600, fontSize: "0.72rem" }} />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Fade>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={5}>
            <Fade in={visible} timeout={1100}>
              <Card sx={{ p: { xs: 3, md: 4 }, height: "100%", border: `1px solid ${P}20` }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: `${P}18`, display: "flex", alignItems: "center", justifyContent: "center", color: P }}>
                    <SchoolIcon sx={{ fontSize: "1.1rem" }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Academic Credentials
                  </Typography>
                </Box>

                <Stepper activeStep={activeEdu} orientation="vertical" nonLinear>
                  {EDUCATION_STEPS.map((step, index) => (
                    <EducationCard
                      key={step.label}
                      step={step}
                      index={index}
                      activeEdu={activeEdu}
                      setActiveEdu={setActiveEdu}
                    />
                  ))}
                </Stepper>

                <Typography variant="caption" sx={{ opacity: 0.4, display: "block", mt: 2 }}>
                  Click a step to expand details
                </Typography>
              </Card>
            </Fade>
          </Grid>

          <Grid item xs={12} md={7}>
            <Fade in={visible} timeout={1300}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: `${S}18`, display: "flex", alignItems: "center", justifyContent: "center", color: S }}>
                    <TrophyIcon sx={{ fontSize: "1.1rem" }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Career at Mallinckrodt
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ opacity: 0.6, mb: 3, lineHeight: 1.75 }}>
                  {CAREER_HIGHLIGHTS_PARAGRAPH}
                </Typography>

                <Grid container spacing={2}>
                  {CAREER_HIGHLIGHTS.map((career, index) => (
                    <Grid item xs={12} sm={6} key={career.title}>
                      <Card
                        sx={{
                          p: 2.5,
                          height: "100%",
                          border: `1px solid ${P}14`,
                          transition: "all .22s",
                          "&:hover": { border: `1px solid ${P}55`, transform: "translateY(-3px)", boxShadow: `0 12px 36px ${P}18` },
                        }}
                      >
                        <Typography sx={{ fontSize: "1.6rem", mb: 1 }}>{career.icon}</Typography>
                        <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: "0.9rem" }}>{career.title}</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.65, lineHeight: 1.7, fontSize: "0.82rem" }}>
                          {career.body}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        <Fade in={visible} timeout={1500}>
          <Card sx={{ p: { xs: 3, md: 5 }, border: `1px solid ${S}25`, background: (theme) => (theme.palette.mode === "dark" ? `${S}08` : `${S}06`) }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: `${S}22`, display: "flex", alignItems: "center", justifyContent: "center", color: S }}>
                <CivicIcon sx={{ fontSize: "1.1rem" }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Civic Leadership
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.55 }}>
                  Chesterfield, Missouri — Community Service Record
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: "block", md: "block" } }}>
              <CivicTimeline />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ fontStyle: "italic", opacity: 0.75, maxWidth: 580, mx: "auto", lineHeight: 1.85 }}>
                "I have lived and worked in Chesterfield for over 30 years. I understand what American business owners need — and I have built CRKL to deliver exactly that."
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.45, display: "block", mt: 1.5 }}>
                — Periasamy Krishnamoorthy, Founder
              </Typography>
            </Box>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
}
