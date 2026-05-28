import React, { useMemo, useEffect } from "react";
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PRIMARY, SECONDARY } from "../constants";

const galleryCards = [
  {
    key: "Office",
    title: "Office",
    description: "A look at the workspace and setup behind the brand.",
    image: new URL("../assets/Office/Lobby.webp", import.meta.url).href,
    accent: PRIMARY,
  },
  {
    key: "Team",
    title: "Team",
    description: "The people who support the daily work and delivery.",
    image: new URL("../assets/Our Team/1.webp", import.meta.url).href,
    accent: SECONDARY,
  },
  {
    key: "Events",
    title: "Events",
    description: "Annual conference moments shown in a dedicated page.",
    image: new URL(
      "../assets/Events/Annual Conference/IMG-20250605-WA0005.webp",
      import.meta.url
    ).href,
    accent: PRIMARY,
  },
];

function Gallery({ setActiveTab }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const pageStyles = useMemo(
    () => ({
      pt: { xs: 10, sm: 11, md: 12 },
      pb: 10,
      minHeight: "100vh",
      background: isDark
        ? "linear-gradient(180deg, #07131f 0%, #0a1929 45%, #07131f 100%)"
        : "radial-gradient(ellipse at 50% 20%, rgba(29,137,200,0.10) 0%, transparent 52%), linear-gradient(180deg, #f8fcff 0%, #eef8ff 45%, #f8fcff 100%)",
      transition: "background 280ms ease, color 280ms ease",
    }),
    [isDark]
  );

  const cardSurface = isDark ? "rgba(11, 27, 43, 0.92)" : "#ffffff";
  const borderColor = isDark
    ? "rgba(93,147,194,0.2)"
    : "rgba(29,137,200,0.12)";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box sx={pageStyles}>
      <Container maxWidth="xl">

        {/* ── REDESIGNED HEADER: minimal clean centered text ── */}
        <Box
          sx={{
            mt: { xs: 2, md: 4 },
            mb: { xs: 4, md: 6 },
            textAlign: "center",
            // no background, no border, no shadow
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "text.primary",
              mb: 1.5,
            }}
          >
            Media Gallery
          </Typography>
        
          <Typography
            sx={{
              mx: "auto",
              maxWidth: 520,
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              color: "text.secondary",
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            Behind the scenes of our work, culture, and achievements.
          </Typography>
        </Box>
        {/* ── END HEADER ── */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 340px))",
              md: "repeat(3, minmax(0, 340px))",
            },
            justifyContent: "center",
            gap: { xs: 2.5, sm: 3, md: 5 },
            alignItems: "stretch",
          }}
        >
          {galleryCards.map((card) => (
            <Card
              key={card.key}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: 340 },
                height: "100%",
                minHeight: { xs: 300, sm: 360, md: 430 },
                mx: "auto",
                overflow: "hidden",
                borderRadius: 2,
                backgroundColor: cardSurface,
                border: `1px solid ${borderColor}`,
                boxShadow: `0 16px 40px ${alpha(
                  "#0a1929",
                  isDark ? 0.2 : 0.08
                )}`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: `0 18px 50px ${alpha(card.accent, 0.16)}`,
                },
              }}
            >
              <CardActionArea
                onClick={() => setActiveTab?.(card.key)}
                sx={{ height: "100%", position: "relative", display: "block" }}
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: { xs: 2, sm: 2.5, md: 3 },
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.68) 100%)",
                    color: "#fff",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 0.75 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "inherit",
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.82rem", sm: "0.88rem", md: "1rem" },
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Gallery;