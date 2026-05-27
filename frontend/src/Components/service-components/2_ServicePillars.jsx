import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SERVICES } from "../../constants";
import { useTheme, alpha } from "@mui/material/styles";

const SERVICE_MEDIA = {
  "Accounting & Finance": new URL("../../assets/Videos/Accounting & Finance.mp4", import.meta.url).href,
  "Tax Services": new URL("../../assets/Videos/Tax Services.mp4", import.meta.url).href,
  "IT Services": new URL("../../assets/Videos/IT Services.mp4", import.meta.url).href,
};

export default function ServicePillars() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getItemKey  = (item) => (typeof item === "string" ? item : item.title);
  const getItemDesc = (item, title) =>
    typeof item === "object" && item.description
      ? item.description
      : `Detailed support for ${title.toLowerCase()} is handled here. You can replace this text with custom copy later.`;

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        px: { xs: 2, md: 5 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          Our Services
        </Typography>
        <Typography sx={{ opacity: 0.7, mt: 1 }}>
          Practical, scalable teams and systems that support your day-to-day operations.
        </Typography>
      </Box>
      {SERVICES.map((s, i) => {
        const isReverse = i % 2 !== 0;

        const VideoCol = (
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              minHeight: { xs: 200, md: 320 },
              backgroundColor: "#000",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {SERVICE_MEDIA[s.title] && (
              <Box
                component="video"
                src={SERVICE_MEDIA[s.title]}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                  "&:hover": { transform: "scale(1.04)" },
                }}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.18) 100%)",
              }}
            />
          </Box>
        );

        const TextCol = (
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              p: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              {s.title}
            </Typography>

            <Typography sx={{ opacity: 0.72, lineHeight: 1.85, mb: 2, fontWeight: 600 }}>
              {s.summary}
            </Typography>

            {/* MUI Accordion */}
            <Box>
              {s.items.map((item, idx) => {
                const key  = getItemKey(item);
                const desc = getItemDesc(item, s.title);
                const panelId = `${i}-${idx}`;

                return (
                  <Accordion
                    key={key}
                    expanded={expanded === panelId}
                    onChange={handleChange(panelId)}
                    disableGutters
                    elevation={0}
                    sx={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                          backgroundColor: alpha(s.color, 0.06),
                        },
                      }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <AddIcon
                          sx={{
                            color: s.color,
                            fontSize: 22,
                            transition: "transform 0.25s ease",
                            transform:
                              expanded === panelId
                                ? "rotate(45deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      }
                        sx={{
                        px: 1,
                        minHeight: 48,
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          transform: "none !important",
                        },
                        "&:hover": { backgroundColor: alpha(s.color, 0.06) },
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, fontSize: "0.97rem" }}>
                        {key}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails sx={{ px: 1, pt: 0, pb: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.78, lineHeight: 1.7 }}
                      >
                        {desc}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Box>
        );

        const cardBg =
          theme.palette.mode === "dark"
            ? `linear-gradient(135deg, ${alpha(s.color, 0.06)}, ${alpha(
                theme.palette.background.paper,
                0.06
              )})`
            : `linear-gradient(135deg, ${alpha(s.color, 0.07)}, ${alpha(
                theme.palette.background.paper,
                0.97
              )})`;

        const cardBoxShadow =
          theme.palette.mode === "dark"
            ? "0 8px 40px rgba(0,0,0,0.6)"
            : "0 8px 40px rgba(15,40,70,0.10)";

        const cardBorder = `1px solid ${alpha(s.color, 0.2)}`;

        return (
          <Box
            key={i}
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: cardBoxShadow,
              border: cardBorder,
              background: cardBg,
              display: "flex",
              flexDirection: { xs: "column", md: isReverse ? "row-reverse" : "row" },
              minHeight: { md: 320 },
            }}
          >
            {VideoCol}
            {TextCol}
          </Box>
        );
      })}
    </Box>
  );
}