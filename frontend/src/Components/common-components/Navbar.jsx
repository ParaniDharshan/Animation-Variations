import React, { useState } from "react";
import {
  AppBar, Toolbar, IconButton, Button, Typography, Box,
  Drawer, List, ListItem, ListItemButton, ListItemText, Divider,
  Tooltip, useScrollTrigger,
} from "@mui/material";
import {
  Menu as MenuIcon, Close as CloseIcon,
  DarkMode as DarkModeIcon, LightMode as LightModeIcon,
} from "@mui/icons-material";
import { PRIMARY, SECONDARY, BOOKING_URL, NAV_LINKS } from "../../Constants.js";
import CRKL_LOGO from "../../assets/CRKL_WEB_LOGO-removebg-preview.png";

function Navbar({ mode, toggleMode, activeTab, setActiveTab }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });
  const isDark = mode === "dark";

  const navigate = (link) => {
    setActiveTab(link);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

{/* Concerns see full answer */ }

  React.useEffect(() => {
    const handler = (e) => {
      if (!e || !e.detail) return;
      setActiveTab(e.detail);
      setDrawerOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('navigateTab', handler);
    return () => window.removeEventListener('navigateTab', handler);
  }, [setActiveTab]);

  return (
    <>
      <AppBar
        position="fixed" elevation={trigger ? 4 : 0}
        sx={{
          backdropFilter: "blur(14px)",
          background: isDark
            ? trigger ? "rgba(10,25,41,0.97)" : "rgba(10,25,41,0.7)"
            : trigger ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.75)",
          borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(29,137,200,0.12)"}`,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box
            onClick={() => navigate("Home")}
            sx={{ flexGrow: 1, cursor: "pointer", display: "flex", alignItems: "baseline", gap: 1 }}
          >
            <Box
              component="img"
              src={CRKL_LOGO}
              alt="CRKL Inc. Logo"
              sx={{
                height: { xs: 40, md: 50 }, // responsive sizing
                width: "auto",
                display: "block",
              }}
            />
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.25, alignItems: "center", flexWrap: "nowrap" }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link} onClick={() => navigate(link)}
                sx={{
                  color: activeTab === link ? PRIMARY : isDark ? "rgba(255,255,255,0.8)" : "rgba(20,40,60,0.8)",
                  fontWeight: activeTab === link ? 700 : 500,
                  borderBottom: activeTab === link ? `2px solid ${PRIMARY}` : "2px solid transparent",
                  borderRadius: 0, px: 1, pb: 0.25,
                  minWidth: "auto",
                  whiteSpace: "nowrap",
                  fontSize: "0.86rem",
                  "&:hover": { color: PRIMARY, background: "transparent" },
                }}
              >
                {link}
              </Button>
            ))}
            <Tooltip title={isDark ? "Light mode" : "Dark mode"}>
              <IconButton onClick={toggleMode} sx={{ ml: 1, color: isDark ? SECONDARY : PRIMARY }}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1, alignItems: "center" }}>
            <IconButton onClick={toggleMode} sx={{ color: isDark ? SECONDARY : PRIMARY }}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: isDark ? "#fff" : "#1d3a5a" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2, px: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography sx={{ fontWeight: 800, background: `linear-gradient(90deg,${PRIMARY},${SECONDARY})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              CRKL Inc.
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <Divider />
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link} disablePadding>
                <ListItemButton onClick={() => navigate(link)} selected={activeTab === link} sx={{ borderRadius: 2, my: 0.25 }}>
                  <ListItemText primary={link} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button fullWidth variant="contained" href={BOOKING_URL} target="_blank"
            sx={{ mt: 2, background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})` }}>
            Book a Discovery Call
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;