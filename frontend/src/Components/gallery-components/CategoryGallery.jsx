import React, { useMemo, useEffect } from "react";
import {
  alpha,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBack } from "@mui/icons-material"; // ✅ added
import Masonry from "./Masonry";

function CategoryGallery({
  title,
  subtitle,
  chipLabel,
  items,
  accent,
  backTab = "Gallery",
  setActiveTab,
  actions,
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const pageStyles = useMemo(
    () => ({
      pt: { xs: 11, md: 14 },
      pb: 10,
      minHeight: "100vh",
      background: isDark
        ? "linear-gradient(180deg, #07131f 0%, #0a1929 45%, #07131f 100%)"
        : "linear-gradient(180deg, #f8fcff 0%, #eef8ff 45%, #f8fcff 100%)",
    }),
    [isDark]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box sx={pageStyles}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {title}
          </Typography>
          <Typography
            sx={{ maxWidth: 760, color: "text.secondary", lineHeight: 1.7 }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />} // ✅ LEFT ARROW ADDED
            onClick={() => {
              setActiveTab?.(backTab);
              window.scrollTo({ top: 0, left: 0 });
            }}
            sx={{
              borderColor: alpha(accent, 0.4),
              color: accent,
              px: 3,
              py: 1.15,
              fontSize: "0.98rem",
              fontWeight: 700,
              borderRadius: 999,
              textTransform: "none",
            }}
          >
            Back to Gallery
          </Button>
        </Box>

        <Box sx={{ mb: 3 }}>{actions}</Box>

        <Box
          sx={{
            p: { xs: 1, md: 2 },
          borderRadius: 2,
            background: isDark
              ? "linear-gradient(180deg, rgba(20,42,66,0.95), rgba(10,25,41,0.92))"
              : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(240,249,255,0.84))",
            border: `1px solid ${
              isDark
                ? "rgba(93,147,194,0.2)"
                : "rgba(29,137,200,0.12)"
            }`,
            boxShadow: isDark
              ? "0 18px 60px rgba(0, 0, 0, 0.45)"
              : "0 18px 60px rgba(15, 40, 70, 0.08)",
          }}
        >
          <Masonry items={items} colorShiftOnHover blurToFocus />
        </Box>
      </Container>
    </Box>
  );
}

export default CategoryGallery;