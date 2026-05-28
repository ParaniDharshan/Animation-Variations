import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SpiralBg from "../common-components/SpiralBg";
import { SECONDARY } from "../../constants";

export default function WhyHero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        minHeight: { xs: '78vh', md: '82vh' },
        py: { xs: 4, md: 6 },
        mb: 0,                        // removed mb — section spacing handled by layout
        textAlign: "center",
        background: isDark
          ? "linear-gradient(180deg, #07131f 0%, #0a1929 100%)"
          : `radial-gradient(ellipse at 60% 30%, ${SECONDARY}18 0%, transparent 55%)`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <SpiralBg />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Chip
          label="Why CRKL Inc."
          sx={{
            mb: 3,
            px: 1.5,
            background: `${SECONDARY}20`,
            color: SECONDARY,
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: 0.5,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3rem" },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 3,
            color: isDark ? "common.white" : "text.primary",
          }}
        >
          The solution built around your concerns
        </Typography>

        <Typography
          sx={{
            opacity: isDark ? 0.82 : 0.7,
            fontSize: { xs: "1rem", md: "1.05rem" },
            lineHeight: 1.9,
            maxWidth: 620,
            mx: "auto",
            color: isDark ? "rgba(255,255,255,0.82)" : "text.secondary",
          }}
        >
          As outsourcing expanded, a clear pattern emerged: large companies reap
          its cost savings, while small businesses remain reluctant. Their
          hesitation centers on real, valid concerns. CRKL Inc. was built to
          address every single one.
        </Typography>
      </Container>
    </Box>
  );
}