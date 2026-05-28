import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Masonry from "./Masonry";
import { useTheme } from "@mui/material/styles";
import { HERO_BG } from "../../constants";
import CTAButton from "../common-components/CTAButton";

const officeItems = [
    { id: "office-1", img: new URL("../../assets/Office/Building.webp", import.meta.url).href, url: new URL("../../assets/Office/Building.webp", import.meta.url).href, height: 500 },
    { id: "office-2", img: new URL("../../assets/Office/Office space.webp", import.meta.url).href, url: new URL("../../assets/Office/Office space.webp", import.meta.url).href, height: 500 },
    { id: "office-3", img: new URL("../../assets/Office/Conference Hall.webp", import.meta.url).href, url: new URL("../../assets/Office/Conference Hall.webp", import.meta.url).href, height: 500 },
    { id: "office-4", img: new URL("../../assets/Office/Lobby.webp", import.meta.url).href, url: new URL("../../assets/Office/Lobby.webp", import.meta.url).href, height: 500 },
    { id: "office-5", img: new URL("../../assets/Office/Corrider.webp", import.meta.url).href, url: new URL("../../assets/Office/Corrider.webp", import.meta.url).href, height: 500 },
    { id: "office-6", img: new URL("../../assets/Office/offc spac2.webp", import.meta.url).href, url: new URL("../../assets/Office/offc spac2.webp", import.meta.url).href, height: 500 },
];

function OfficeGallery(props) {
    const heroImg = HERO_BG?.office;
    const hero = heroImg ? officeItems.find((it) => it.img === heroImg) : null;
    const galleryItems = hero ? officeItems.filter((it) => it.img !== hero.img) : officeItems;
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const titleColor = hero ? "common.white" : isDark ? "common.white" : "text.primary";
    const subtitleColor = hero ? "rgba(255,255,255,0.9)" : isDark ? "common.white" : "text.primary";

    return (
        <Box sx={{ background: "transparent", pt: { xs: 4.5, md: 5 } }}>
            {/* Hero section */}
            <Box
                sx={{
                    // FIX: taller on xs so title + subtitle + button all fit
                    height: { xs: 340, sm: 380, md: 420 },
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

                {/* FIX: add px padding so text doesn't touch screen edges on mobile */}
                <Container sx={{ position: "relative", zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }} maxWidth="xl">
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: { xs: 2, md: 3 } }}>
                        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                            {/* FIX: responsive font size for h2 */}
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    color: titleColor,
                                    mb: 1,
                                    fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem", lg: "3.75rem" },
                                }}
                            >
                                Office
                            </Typography>
                            <Typography
                                sx={{
                                    maxWidth: 760,
                                    color: subtitleColor,
                                    lineHeight: 1.6,
                                    margin: "0 auto",
                                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                                }}
                            >
                                A closer look at the workspace and setup behind the brand.
                            </Typography>

                            <Box sx={{ mt: { xs: 2.5, md: 2 }, display: "flex", justifyContent: "center" }}>
                                <CTAButton
                                    text="Back to Gallery"
                                    size="large"
                                    isBack
                                    onClick={() => {
                                        if (typeof props.setActiveTab === "function") {
                                            props.setActiveTab("Gallery");
                                            try {
                                                window.history.pushState({}, "", "/gallery");
                                            } catch (e) {}
                                            window.scrollTo({ top: 0, left: 0 });
                                        } else {
                                            try { window.history.back(); } catch (e) {}
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
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
                    <Masonry items={galleryItems} colorShiftOnHover />
                </Box>
            </Container>
        </Box>
    );
}

export default OfficeGallery;