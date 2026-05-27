import React, { useEffect, useMemo, useState } from "react";
import {
  alpha,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBack } from "@mui/icons-material"; // ✅ added
import { PRIMARY } from "../../constants";
import InaugurationGallery from "./events-components/InaugurationGallery";
import AnnualConferenceGallery from "./events-components/AnnualConferenceGallery";
import EssexVisitGallery from "./events-components/EssexVisitGallery";

const eventGroups = [
  {
    key: "inauguration",
    title: "Inauguration",
    description: "Opening day moments and ceremony highlights.",
    accent: PRIMARY,
    preview: new URL(
      "../../assets/Events/Inaugration/Inaugration_cake_02.jpeg",
      import.meta.url
    ).href,
    Component: InaugurationGallery,
  },
  {
    key: "annual-conference",
    title: "Annual Conference",
    description: "Conference sessions, group photos, and event coverage.",
    accent: PRIMARY,
    preview: new URL(
      "../../assets/Events/Annual Conference/IMG-20250605-WA0005.jpg",
      import.meta.url
    ).href,
    Component: AnnualConferenceGallery,
  },
  {
    key: "essex-visit",
    title: "Essex Visit",
    description: "Visit highlights and captured moments.",
    accent: PRIMARY,
    preview: new URL(
      "../../assets/Events/Essex Visit/Essex001.jpeg",
      import.meta.url
    ).href,
    Component: EssexVisitGallery,
  },
];

function EventsGallery({ setActiveTab }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

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

  const selectedData = selectedGroup
    ? eventGroups.find((group) => group.key === selectedGroup)
    : null;

  const SelectedComponent = selectedData?.Component;

  const buttonStyle = {
    borderColor: alpha(PRIMARY, 0.4),
    color: PRIMARY,
    px: 3,
    py: 1.15,
    fontSize: "0.98rem",
    fontWeight: 700,
    borderRadius: 999,
    textTransform: "none",
  };

  return (
    <Box sx={pageStyles}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          

          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            Events Gallery
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            Choose a card below to open its photo set inside the Events page.
          </Typography>

          {/* ✅ Buttons with LEFT ARROW */}
          <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap" }}>
            
            {/* Back to Gallery */}
            <Button
              variant="outlined"
              startIcon={<ArrowBack />} // ✅ added
              onClick={() => setActiveTab?.("Gallery")}
              sx={buttonStyle}
            >
              Back to Gallery
            </Button>

            {/* Back to Events Cards */}
            {selectedData && (
              <Button
                variant="outlined"
                startIcon={<ArrowBack />} // ✅ added
                onClick={() => setSelectedGroup(null)}
                sx={buttonStyle}
              >
                Back to Events Cards
              </Button>
            )}
          </Stack>
        </Box>

        {!selectedData ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {eventGroups.map((group) => (
              <Card
                key={group.key}
                sx={{
                  borderRadius: 2,
                  minHeight: { xs: 360, md: 430 },
                  overflow: "hidden",
                  backgroundColor: isDark
                    ? "rgba(11, 27, 43, 0.92)"
                    : "#ffffff",
                  border: `1px solid ${
                    isDark
                      ? "rgba(93,147,194,0.2)"
                      : "rgba(29,137,200,0.12)"
                  }`,
                  boxShadow: `0 16px 40px ${alpha(
                    "#0a1929",
                    isDark ? 0.2 : 0.08
                  )}`,
                  transition: "0.25s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <CardActionArea
                  onClick={() => setSelectedGroup(group.key)}
                  sx={{ height: "100%", position: "relative" }}
                >
                  <CardMedia
                    component="img"
                    image={group.preview}
                    alt={group.title}
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
                      bottom: 0,
                      p: 3,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.7))",
                      color: "#fff",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {group.title}
                    </Typography>
                    <Typography sx={{ opacity: 0.9 }}>
                      {group.description}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ fontWeight: 800 }}>
                {selectedData.title}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {selectedData.description}
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                background: isDark
                  ? "linear-gradient(180deg, rgba(20,42,66,0.95), rgba(10,25,41,0.92))"
                  : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(240,249,255,0.84))",
              }}
            >
              {SelectedComponent && <SelectedComponent />}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default EventsGallery;