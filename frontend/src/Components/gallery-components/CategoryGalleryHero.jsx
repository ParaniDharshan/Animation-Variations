import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CTAButton from "../common-components/CTAButton";

function CategoryGalleryHero({
  title,
  subtitle,
  centered = false,
  backText,
  backButtonPosition = "top",
  onBack,
}) {
  const isCentered = Boolean(centered);

  return (
    <Box
      sx={{
        mt: { xs: 1.25, md: 1.75 },
        minHeight: isCentered ? { xs: 170, md: 240 } : undefined,
        display: isCentered ? "flex" : "block",
        alignItems: isCentered ? "center" : undefined,
        justifyContent: isCentered ? "center" : undefined,
        textAlign: isCentered ? "center" : undefined,
      }}
    >
      {/* FIX: add horizontal padding on mobile so text doesn't touch edges */}
      <Container maxWidth="md" sx={{ width: "100%", px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: isCentered ? "center" : "flex-start",
            justifyContent: "center",
            textAlign: isCentered ? "center" : "left",
            gap: isCentered ? 1.25 : 1,
            py: isCentered ? 1 : 0,
          }}
        >
          {/* FIX: responsive font size — h2 default is 3.75rem which is huge on mobile */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 0,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem", lg: "3.75rem" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              maxWidth: 760,
              color: "text.secondary",
              lineHeight: 1.7,
              mx: isCentered ? "auto" : 0,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            }}
          >
            {subtitle}
          </Typography>

          {backButtonPosition === "top" && backText && (
            <Box sx={{ mt: 2, display: "flex", justifyContent: isCentered ? "center" : "flex-start" }}>
              <CTAButton text={backText} size="large" isBack onClick={onBack} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default CategoryGalleryHero;