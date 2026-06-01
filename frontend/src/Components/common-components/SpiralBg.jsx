import React from "react";
import { Box } from "@mui/material";

function SpiralBg() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        "& .spin": { transformOrigin: "center", animation: "spinSlow 28s linear infinite" },
        "& .spin-rev": { transformOrigin: "center", animation: "spinSlowRev 20s linear infinite" },
        "@keyframes spinSlow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "@keyframes spinSlowRev": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      }}
    >
      <svg width="700" height="700" style={{ position: "absolute", top: -120, right: -180 }} viewBox="0 0 700 700">
        <g className="spin" style={{ transformOrigin: "350px 350px" }}>
          <circle cx="350" cy="350" r="280" fill="none" stroke="rgba(29,137,200,0.22)" strokeWidth="2.5" strokeDasharray="18 10" />
          <circle cx="350" cy="350" r="220" fill="none" stroke="rgba(62,184,175,0.18)" strokeWidth="2" strokeDasharray="12 14" />
          <circle cx="350" cy="350" r="160" fill="none" stroke="rgba(29,137,200,0.14)" strokeWidth="1.75" strokeDasharray="8 16" />
        </g>
        <g className="spin-rev" style={{ transformOrigin: "350px 350px" }}>
          <circle cx="350" cy="350" r="310" fill="none" stroke="rgba(62,184,175,0.16)" strokeWidth="3" strokeDasharray="6 20" />
        </g>
      </svg>
      <svg width="500" height="500" style={{ position: "absolute", bottom: -80, left: -100 }} viewBox="0 0 500 500">
        <g className="spin-rev" style={{ transformOrigin: "250px 250px" }}>
          <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(62,184,175,0.2)" strokeWidth="2.25" strokeDasharray="14 12" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="rgba(29,137,200,0.15)" strokeWidth="1.75" strokeDasharray="8 18" />
        </g>
      </svg>
    </Box>
  );
}

export default SpiralBg;