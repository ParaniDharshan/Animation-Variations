import React from "react";
import { useMemo, useState } from "react";
import { Box, Button } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import CategoryGallery from "./CategoryGallery";
import { SECONDARY } from "../../constants";
import { teamItems } from "./TeamCard";

function TeamGallery(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const activeColor = isDark ? theme.palette.primary.light : theme.palette.primary.main;
  const inactiveColor = isDark ? theme.palette.text.secondary : theme.palette.text.primary;
  const dividerColor = alpha(theme.palette.divider, isDark ? 0.75 : 1);

  // REMOVED: redundant useEffect preload loop.
  // Masonry now handles image loading per-item with native <img loading="lazy">
  // and fetchPriority — no manual preloading needed here.

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return teamItems;
    return teamItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <CategoryGallery
      title="Team Gallery"
      subtitle="The people who support the daily work and delivery."
      chipLabel="Team Gallery"
      items={filteredItems}
      accent={SECONDARY}
      centered
      backButtonPosition="top"
      actions={
        <Box
          sx={{
            width: "100%",
            backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "transparent",
            borderBottom: `1px solid ${dividerColor}`,
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {["All", "IT", "Finance"].map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                flex: 1,
                minWidth: 0,
                py: 2,
                borderRadius: 0,
                textTransform: "none",
                fontWeight: selectedCategory === category ? 800 : 700,
                fontSize: { xs: "0.95rem", sm: "1.08rem" },
                color: selectedCategory === category ? activeColor : inactiveColor,
                backgroundColor: "transparent",
                borderBottom:
                  selectedCategory === category
                    ? `4px solid ${activeColor}`
                    : "4px solid transparent",
                transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: alpha(activeColor, isDark ? 0.08 : 0.04),
                  borderBottomColor:
                    selectedCategory === category ? activeColor : alpha(activeColor, 0.18),
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
      }
      {...props}
    />
  );
}

export default TeamGallery;