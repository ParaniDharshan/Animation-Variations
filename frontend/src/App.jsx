import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./Components/common-components/Navbar";
import Footer from "./Components/common-components/Footer";
import ScrollToTop from "./Components/common-components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import OfficeGallery from "./Components/gallery-components/OfficeGallery";
import TeamGallery from "./Components/gallery-components/TeamGallery";
import EventsGallery from "./Components/gallery-components/EventsGallery";
import WhyCRKL from "./pages/WhyCRKL";
import Contact from "./pages/Contact";
import Animation4 from "./pages/Animation4";
import Animation6 from "./pages/Animation6";
import Animation7 from "./pages/Animation7";
import Animation8 from "./pages/Animation8";
import { PRIMARY, SECONDARY } from "./Constants.js";
import Animation9 from "./pages/Animation9.jsx";
import Animation10 from "./pages/Animation10.jsx";
import Animation11 from "./pages/Animation11.jsx";
import Animation12 from "./pages/Animation12.jsx";
import Animation13 from "./pages/Animation13.jsx";

const buildTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: PRIMARY },
      secondary: { main: SECONDARY },
      background: {
        default: mode === "dark" ? "#0a1929" : "#f0f9ff",
        paper:   mode === "dark" ? "#0d2137" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      h1: { fontFamily: "'Sora', 'sans-serif'", fontWeight: 800 },
      h2: { fontFamily: "'Sora', 'sans-serif'", fontWeight: 700 },
      h3: { fontFamily: "'Sora', 'sans-serif'", fontWeight: 700 },
      h4: { fontFamily: "'Sora', 'sans-serif'", fontWeight: 600 },
      h5: { fontFamily: "'Sora', 'sans-serif'", fontWeight: 600 },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 600, borderRadius: 10 } } },
      MuiCard:   { styleOverrides: { root: { borderRadius: 12 } } },
    },
  });

export default function App() {
  const [mode, setMode] = useState("light");
  const [activeTab, setActiveTab] = useState("a1");
  const theme = buildTheme(mode);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case "a1": return <Home />;
      case "a2": return <About />;
      case "a3": return <Services />;
      case "a4": return <Animation4 />;
      case "a5": return <Contact />;
      case "a6": return <Animation6 />;
      case "a7": return <Animation7 />;
      case "a8": return <Animation8 />;
      case "a9": return <Animation9 />;
      case "a10": return <Animation10 />;
      case "a11": return <Animation11 />;
      case "a12": return <Animation12 />;
      case "a13": return <Animation13 />;
      case "Gallery":     return <Gallery setActiveTab={setActiveTab} />;
      case "Office":      return <OfficeGallery setActiveTab={setActiveTab} />;
      case "Team":        return <TeamGallery setActiveTab={setActiveTab} />;
      case "Events":      return <EventsGallery setActiveTab={setActiveTab} />;
      default:              return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} toggleMode={()=>setMode(m=>m==="light"?"dark":"light")} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{renderTab()}</main>
      <Footer mode={mode} />
      <ScrollToTop />
    </ThemeProvider>
  );
}