import React from "react";
import { Box, Container, Grid, Typography, Chip, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PRIMARY, SECONDARY } from "../../constants";

const SOLUTIONS = [
  {
    icon: "🤝",
    title: "U.S. Contract, U.S. Accountability",
    description:
      "Your signed agreement is with CRKL Inc. — a Missouri-registered U.S. corporation. Not with KOPL. Not with India. With us.",
  },
  {
    icon: "🔒",
    title: "Secure, Dedicated Office",
    description:
      "All work is performed in KOPL's dedicated, secure office in Madurai — not in a remote or unsupervised environment.",
  },
  {
    icon: "👥",
    title: "You Choose Who You Hire",
    description:
      "You conduct the virtual interview. You approve the candidate. No blind placements — ever.",
  },
  {
    icon: "⚡",
    title: "We Manage Everything Else",
    description:
      "Hiring, onboarding, HR, performance management, and daily oversight — handled by CRKL Inc. and KOPL. You review the output.",
  },
  {
    icon: "📋",
    title: "Written Scope. No Surprises.",
    description:
      "Every engagement begins with a formal scope agreement. Costs, timelines, and standards are in writing before work begins.",
  },
  {
    icon: "🎯",
    title: "Same Team. Every Day.",
    description:
      "A dedicated team handles your account. Same professionals, same context — no shared queues, no handoffs.",
  },
];

export default function TheSolutions() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(180deg, #07131f 0%, #0a1929 100%)"
          : "linear-gradient(180deg, rgba(248,252,255,0.95) 0%, rgba(238,248,255,0.92) 100%)",
        transition: "background 280ms ease, color 280ms ease",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PRIMARY}22 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "5%",
          right: "-8%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${SECONDARY}1e 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8, transition: "color 280ms ease" }}>
          <Chip
            label="Our Solution"
            sx={{
              mb: 2,
              px: 1.5,
              background: `${PRIMARY}20`,
              color: PRIMARY,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: 0.5,
              transition: "background-color 280ms ease, color 280ms ease, border-color 280ms ease",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2,
              color: isDark ? "common.white" : "text.primary",
              transition: "color 280ms ease",
            }}
          >
            The ideal and viable model
          </Typography>
          <Typography
            sx={{
              opacity: isDark ? 0.82 : 0.65,
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.85,
              fontSize: "1rem",
              color: isDark ? "rgba(255,255,255,0.82)" : "text.secondary",
              transition: "color 280ms ease, opacity 280ms ease",
            }}
          >
            Instead of connecting U.S. small businesses to an unknown Indian
            firm, we started our own — KOPL — as the dedicated Indian arm of
            CRKL Inc. One roof. One management. One standard.
          </Typography>
        </Box>

        {/* 2-Column Grid — forced via CSS grid, not MUI Grid breakpoints */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // ← 2 columns from sm up
            gap: 3,
          }}
        >
          {SOLUTIONS.map((item, i) => {
            const accentColor = i % 2 === 0 ? PRIMARY : SECONDARY;
            return (
              <Card
                key={i}
                sx={{
                  width: "100%",
                  minWidth: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 2.5,
                  p: 3.5,
                  background: isDark ? "rgba(13, 33, 55, 0.82)" : "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: isDark
                    ? `1px solid rgba(120, 170, 220, 0.18)`
                    : `1px solid rgba(255, 255, 255, 0.55)`,
                  borderRadius: 3,
                  boxShadow: isDark
                    ? `0 10px 28px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)`
                    : `0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)`,
                    transition: "background-color 280ms ease, background 280ms ease, color 280ms ease, border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease",
                  "&:hover": {
                    background: isDark ? "rgba(16, 42, 68, 0.96)" : "rgba(255, 255, 255, 0.78)",
                    border: `1px solid ${accentColor}50`,
                    transform: "translateY(-4px)",
                    boxShadow: isDark
                      ? `0 20px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)`
                      : `0 20px 48px ${accentColor}20, inset 0 1px 0 rgba(255,255,255,0.9)`,
                  },
                }}
              >
                {/* Icon bubble */}
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    flexShrink: 0,
                    borderRadius: "14px",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.6rem",
                    background: isDark ? `${accentColor}22` : `${accentColor}14`,
                    border: `1px solid ${accentColor}25`,
                    transition: "background-color 280ms ease, border-color 280ms ease, color 280ms ease",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Text */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75, minWidth: 0, flex: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.97rem",
                      lineHeight: 1.4,
                      color: isDark ? "common.white" : "text.primary",
                      maxWidth: "100%",
                      overflowWrap: "anywhere",
                      transition: "color 280ms ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: isDark ? 0.82 : 0.68,
                      lineHeight: 1.8,
                      fontSize: "0.88rem",
                      color: isDark ? "rgba(255,255,255,0.78)" : "text.secondary",
                      maxWidth: "100%",
                      overflowWrap: "anywhere",
                      transition: "color 280ms ease, opacity 280ms ease",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
}