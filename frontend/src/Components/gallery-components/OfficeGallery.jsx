import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { alpha } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Masonry from "./Masonry";
import { useTheme } from "@mui/material/styles";
import { PRIMARY, HERO_BG } from "../../constants";

const officeItems = [
    { id: "office-1", img: new URL("../../assets/Office/Building.jpeg", import.meta.url).href, url: new URL("../../assets/Office/Building.jpeg", import.meta.url).href, height: 500 },
    { id: "office-2", img: new URL("../../assets/Office/Office space.jpg", import.meta.url).href, url: new URL("../../assets/Office/Office space.jpg", import.meta.url).href, height: 500 },
    { id: "office-3", img: new URL("../../assets/Office/Conference Hall.jpg", import.meta.url).href, url: new URL("../../assets/Office/Conference Hall.jpg", import.meta.url).href, height: 500 },
    { id: "office-4", img: new URL("../../assets/Office/Lobby.jpeg", import.meta.url).href, url: new URL("../../assets/Office/Lobby.jpeg", import.meta.url).href, height: 500 },
    { id: "office-5", img: new URL("../../assets/Office/Corrider.jpg", import.meta.url).href, url: new URL("../../assets/Office/Corrider.jpg", import.meta.url).href, height: 500 },
    { id: "office-6", img: new URL("../../assets/Office/offc spac2.jpg", import.meta.url).href, url: new URL("../../assets/Office/offc spac2.jpg", import.meta.url).href, height: 500 },
];

function OfficeGallery(props) {
    // Use the configured hero image from constants; if empty, show a blank hero (no default image)
    const heroImg = HERO_BG?.office;
    const hero = heroImg ? officeItems.find((it) => it.img === heroImg) : null;
    const galleryItems = hero ? officeItems.filter((it) => it.img !== hero.img) : officeItems;
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const titleColor = hero ? "common.white" : isDark ? "common.white" : "text.primary";
    const subtitleColor = hero ? "rgba(255,255,255,0.9)" : isDark ? "common.white" : "text.primary";

    return (
        <Box sx={{ background: 'transparent' }}>
            {/* Hero section with building image */}
            <Box
                sx={{
                    height: { xs: 260, md: 420 },
                    display: "flex",
                    alignItems: "center",
                    color: "common.white",
                    backgroundImage: hero ? `url(${hero.img})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    position: "relative",
                }}
            >
                {hero && (
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.42))",
                        }}
                    />
                )}

                <Container sx={{ position: "relative", zIndex: 2 }} maxWidth="xl">
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "flex-start", gap: 3 }}>
                        <Box sx={{ width: { md: "50%" } }}>
                            <Typography variant="h2" sx={{ fontWeight: 800, color: titleColor, mb: 1 }}>
                                Office
                            </Typography>
                            <Typography sx={{ maxWidth: 760, color: subtitleColor, lineHeight: 1.6 }}>
                                A closer look at the workspace and setup behind the brand.
                            </Typography>

                            <Box sx={{ mt: 2 }}>
                                <Button
                                    variant="contained"
                                    startIcon={<ArrowBack />}
                                    aria-label="Back to Gallery"
                                    onClick={() => {
                                        props.setActiveTab?.("Gallery");
                                        window.scrollTo({ top: 0, left: 0 });
                                    }}
                                    sx={{
                                        backgroundColor: PRIMARY,
                                        color: "common.white",
                                        px: 3,
                                        py: 1.15,
                                        fontSize: "0.98rem",
                                        fontWeight: 800,
                                        borderRadius: 999,
                                        textTransform: "none",
                                        boxShadow: "0 8px 24px rgba(15,40,70,0.12)",
                                        '&:hover': { filter: 'brightness(0.95)' },
                                    }}
                                >
                                    Back to Gallery
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }} />
                    </Box>
                </Container>
            </Box>

            {/* Gallery section below hero */}
            <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
                <Box
                    sx={{
                        p: { xs: 1, md: 2 },
                        borderRadius: 2,
                    }}
                >
                    <Masonry items={galleryItems} colorShiftOnHover blurToFocus />
                </Box>
            </Container>
        </Box>
    );
}

export default OfficeGallery;
