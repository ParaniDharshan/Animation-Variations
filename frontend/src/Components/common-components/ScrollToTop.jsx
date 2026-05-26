import React from "react";
import { useScrollTrigger, Slide, Fab } from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";
import { PRIMARY, SECONDARY } from "../constants";

function ScrollToTop() {
  const trigger = useScrollTrigger({ threshold: 300, disableHysteresis: true });
  return (
    <Slide direction="up" in={trigger} unmountOnExit>
      <Fab
        size="medium"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          position: "fixed", bottom: 32, right: 32, zIndex: 9999,
          background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`, color: "#fff",
          "&:hover": { transform: "scale(1.1)", transition: "transform .2s" },
        }}
      >
        <ArrowUpIcon />
      </Fab>
    </Slide>
  );
}

export default ScrollToTop;