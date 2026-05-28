import React, { useEffect, useMemo } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CTAButton from "../common-components/CTAButton";
import Masonry from "./Masonry";
import CategoryGalleryHero from "./CategoryGalleryHero";

function CategoryGallery({
  title,
  subtitle,
  items,
  backTab = "Gallery",
  setActiveTab,
  actions,
  centered = false,
  backButtonPosition = "top",
  onBack,
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const pageStyles = useMemo(
    () => ({
      pt: { xs: 2, md: 3 },
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

  const backPath = backTab === "Events" ? "/events" : "/gallery";
  const backText = backTab === "Events" ? "Back to Events Cards" : "Back to Gallery";

  const handleBack = () => {
    if (typeof onBack === "function") {
      try {
        window.history.pushState({}, "", backPath);
      } catch (e) {}
      onBack();
      return;
    }

    if (typeof setActiveTab === "function") {
      setActiveTab(backTab);
      try {
        window.history.pushState({}, "", backPath);
      } catch (e) {}
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    try {
      window.history.pushState({}, "", backPath);
    } catch (e) {}
    try {
      window.history.back();
    } catch (e) {}
  };

  return (
    <Box sx={pageStyles}>
      <CategoryGalleryHero
        title={title}
        subtitle={subtitle}
        centered={centered}
        backText={backText}
        backButtonPosition={backButtonPosition}
        onBack={handleBack}
      />

      <Container maxWidth="xl">
        <Box sx={{ mb: 3 }}>{actions}</Box>

        <Box
          sx={{
            p: { xs: 1, md: 2 },
            borderRadius: 2,
            background: isDark
              ? "linear-gradient(180deg, rgba(20,42,66,0.95), rgba(10,25,41,0.92))"
              : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(240,249,255,0.84))",
            border: `1px solid ${
              isDark ? "rgba(93,147,194,0.2)" : "rgba(29,137,200,0.12)"
            }`,
            boxShadow: isDark
              ? "0 18px 60px rgba(0, 0, 0, 0.45)"
              : "0 18px 60px rgba(15, 40, 70, 0.08)",
          }}
        >
          <Masonry items={items} colorShiftOnHover />
        </Box>

        {backButtonPosition === "bottom" && (
          <Box sx={{ mt: 2.5, display: "flex", justifyContent: "center" }}>
            <CTAButton text={backText} size="large" isBack onClick={handleBack} />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default CategoryGallery;
