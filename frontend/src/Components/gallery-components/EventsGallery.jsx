import React, { useEffect, useMemo, useState } from "react";
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PRIMARY } from "../../constants";
import CTAButton from "../common-components/CTAButton";
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
      "../../assets/Events/Inaugration/Inaugration_cake_02.webp",
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
      "../../assets/Events/Annual Conference/IMG-20250605-WA0005.webp",
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
      "../../assets/Events/Essex Visit/Essex001.webp",
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

  useEffect(() => {
    if (window.location.pathname === "/events") {
      setSelectedGroup(null);
    }
  }, []);

  useEffect(() => {
    const checkPath = () => {
      const parts = window.location.pathname.split("/").filter(Boolean);
      const last = parts[parts.length - 1];
      const match = eventGroups.find((g) => g.key === last);
      setSelectedGroup(match ? match.key : null);
    };

    checkPath();
    const onPop = () => checkPath();
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
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

  return (
    <Box sx={pageStyles}>
      <Container maxWidth="xl">
        {!selectedData && (
          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              // FIX: horizontal padding so title doesn't touch edges on mobile
              px: { xs: 2, sm: 0 },
            }}
          >
            {/* FIX: responsive font size */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem", lg: "3.75rem" },
              }}
            >
              Events Gallery
            </Typography>

            <Typography
              sx={{
                maxWidth: 760,
                color: "text.secondary",
                lineHeight: 1.7,
                margin: "0 auto",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Choose a card below to open its photo set inside the Events page.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              <CTAButton
                text="Back to Gallery"
                size="large"
                isBack
                onClick={() => {
                  if (typeof setActiveTab === "function") {
                    setActiveTab("Gallery");
                    try {
                      window.history.pushState({}, "", "/gallery");
                    } catch (e) {}
                    window.scrollTo({ top: 0, left: 0 });
                  } else {
                    try {
                      window.history.back();
                    } catch (e) {}
                  }
                }}
              />
            </Box>
          </Box>
        )}

        {!selectedData ? (
          <Box
            sx={{
              display: "grid",
              // FIX: added sm breakpoint — 2 columns on tablets instead of jumping 1→3
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 2.5, sm: 3, md: 4 },
            }}
          >
            {eventGroups.map((group) => (
              <Card
                key={group.key}
                sx={{
                  borderRadius: 2,
                  minHeight: { xs: 300, sm: 360, md: 430 },
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
                  onClick={() => {
                    const url = `/events/${group.key}`;
                    try {
                      window.history.pushState({}, "", url);
                    } catch (e) {}
                    setSelectedGroup(group.key);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
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

                  {/* FIX: responsive padding in card overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 2, md: 3 },
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.7))",
                      color: "#fff",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                      }}
                    >
                      {group.title}
                    </Typography>
                    <Typography
                      sx={{
                        opacity: 0.9,
                        fontSize: { xs: "0.82rem", sm: "0.9rem", md: "1rem" },
                      }}
                    >
                      {group.description}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        ) : null}

        {selectedData && SelectedComponent && (
          <SelectedComponent
            setActiveTab={setActiveTab}
            onBack={() => setSelectedGroup(null)}
          />
        )}
      </Container>
    </Box>
  );
}

export default EventsGallery;