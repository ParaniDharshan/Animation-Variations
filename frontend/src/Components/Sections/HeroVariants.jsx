// ─────────────────────────────────────────────────────────────────────────────
// HeroVariants.jsx
// 6 Hero section variants — each uses a ReactBits-inspired canvas background.
//
// HOW TO USE:
//   1. Copy this file into your project (e.g. src/Components/sections/)
//   2. Pick ONE Hero export → replace your current <Hero /> in the page.
//   3. Optionally pass props on the background component to customise it.
//   4. The shared <HeroContent /> block holds your text — edit it once here.
//
// EXPORTS:
//   HeroWaves       — animated sine-wave fills
//   HeroColorBends  — drifting radial-gradient blobs
//   HeroDotGrid     — interactive dot grid (mouse reactive)
//   HeroBeams       — rotating circle-origin light beams
//   HeroGridScan    — circular grid with radar-style scan
//   HeroLineWaves   — concentric distorted-circle waves
//
// Each background is also exported standalone (WavesBg, ColorBendsBg …)
// so you can compose them into other sections.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CTAButton from "../common-components/CTAButton"; // adjust path if needed
import { PRIMARY, SECONDARY } from "../../Constants.js";   // your colour tokens
import { X } from "@mui/icons-material";

// ═════════════════════════════════════════════════════════════════════════════
// SHARED HERO CONTENT
// Edit your headline / body / CTA here — one place, used by all 6 variants.
// ═════════════════════════════════════════════════════════════════════════════
function HeroContent() {
  return (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={12} sx={{ order: { xs: 2, md: 1 } }}>
          <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "left" }}>

            <Chip
              label="Chesterfield, Missouri — U.S.-Managed"
              size="small"
              sx={{
                mb: 3,
                background: `${PRIMARY}18`,
                color: PRIMARY,
                fontWeight: 700,
                border: `1px solid ${PRIMARY}40`,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
                lineHeight: 1.25,
                mb: 3,
                fontWeight: 700,
                "& span": {
                  background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              Your books. <span>Our discipline.</span> Your growth.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, opacity: 0.85, mb: 4, lineHeight: 1.9 }}
            >
              <strong>CRKL Inc.</strong> helps U.S. small and mid-sized businesses manage{" "}
              <strong>accounting, finance, and IT operations</strong> through a structured, secure,
              and professionally managed outsourcing model. You work with a trusted{" "}
              <strong>U.S.-based partner.</strong> We handle the rest.
            </Typography>

            <CTAButton
              text="Book a Free Discovery Call"
              sub="No commitment. 30 minutes. Let's understand your business needs first."
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 1. WAVES BACKGROUND
// ─────────────────────────────────────────────────────────────────────────────
// Props
//   color1     {string}  hex — primary wave colour    default: PRIMARY
//   color2     {string}  hex — secondary wave colour  default: SECONDARY
//   speed      {number}  animation speed              default: 0.015
//   amplitude  {number}  wave height in px            default: 50
//   waveCount  {number}  number of wave layers        default: 4
// ═════════════════════════════════════════════════════════════════════════════
export function WavesBg({
  color1 = PRIMARY,
  color2 = SECONDARY,
  speed = 0.015,
  amplitude = 50,
  waveCount = 4,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const waves = Array.from({ length: waveCount }, (_, i) => ({
      freq: 0.006 + i * 0.002,
      amp: amplitude - i * 8,
      offset: i * Math.PI * 0.7,
      yBase: 0.55 + i * 0.09,
      color: i % 2 === 0 ? color1 : color2,
      alpha: 0.13 - i * 0.02,
    }));

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waves.forEach((w) => {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = canvas.height * w.yBase + Math.sin(x * w.freq + t + w.offset) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = w.color;
        ctx.globalAlpha = w.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function OrbitDotBg({
  color = PRIMARY,
  orbitColor = SECONDARY,
  speed = 0.02,
  radius = 140,
  dotSize = 7,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const orbitR = Math.min(W, H) * 0.18 + radius;
      const x = cx + Math.cos(t) * orbitR;
      const y = cy + Math.sin(t * 1.15) * orbitR * 0.72;

      ctx.beginPath();
      ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.strokeStyle = orbitColor;
      ctx.globalAlpha = 0.18;
      ctx.lineWidth = 2;
      ctx.setLineDash([18, 14]);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.95;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.95;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, dotSize + 16, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.08;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function HeroWaves() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ↓ Customise background props here */}
      <WavesBg color1={PRIMARY} color2={SECONDARY} speed={0.015} amplitude={50} waveCount={4} />
      <HeroContent />
    </Box>
  );
}

export function HeroOrbitDot() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <OrbitDotBg color={PRIMARY} orbitColor={SECONDARY} speed={0.02} radius={120} dotSize={7} />
      <HeroContent />
    </Box>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. COLOR BENDS BACKGROUND
// ─────────────────────────────────────────────────────────────────────────────
// Props
//   color1     {string}  hex — blob colour A   default: PRIMARY
//   color2     {string}  hex — blob colour B   default: SECONDARY
//   blobCount  {number}  number of blobs       default: 6
//   speed      {number}  drift speed           default: 0.003
// ═════════════════════════════════════════════════════════════════════════════
export function ColorBendsBg({
  color1 = PRIMARY,
  color2 = SECONDARY,
  blobCount = 6,
  speed = 0.003,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs = Array.from({ length: blobCount }, (_, i) => ({
      x: 0.1 + Math.random() * 0.8,
      y: 0.1 + Math.random() * 0.8,
      r: 0.25 + Math.random() * 0.2,
      ox: Math.random() * Math.PI * 2,
      oy: Math.random() * Math.PI * 2,
      vx: 0.3 + Math.random() * 0.5,
      vy: 0.25 + Math.random() * 0.4,
      color: i % 2 === 0 ? color1 : color2,
    }));

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      blobs.forEach((b) => {
        const cx = (b.x + Math.sin(t * b.vx + b.ox) * 0.22) * W;
        const cy = (b.y + Math.cos(t * b.vy + b.oy) * 0.18) * H;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r * Math.min(W, H));
        grad.addColorStop(0, b.color + "30");
        grad.addColorStop(0.5, b.color + "14");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, b.r * Math.min(W, H), 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function HeroColorBends() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ↓ Customise background props here */}
      <ColorBendsBg color1={PRIMARY} color2={SECONDARY} blobCount={6} speed={0.003} />
      <HeroContent />
    </Box>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 3. DOT GRID BACKGROUND  (mouse-reactive)
// ─────────────────────────────────────────────────────────────────────────────
// Props
//   color       {string}  hex — dot colour        default: PRIMARY
//   dotSize     {number}  base dot radius px       default: 2
//   gap         {number}  grid spacing px          default: 28
//   glowRadius  {number}  mouse glow reach px      default: 140
// ═════════════════════════════════════════════════════════════════════════════
export function DotGridBg({
  color = PRIMARY,
  dotSize = 2,
  gap = 28,
  glowRadius = 140,
}) {
  const ref = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      for (let x = gap / 2; x < canvas.width; x += gap) {
        for (let y = gap / 2; y < canvas.height; y += gap) {
          const dist = Math.hypot(x - mx, y - my);
          const glow = Math.max(0, 1 - dist / glowRadius);
          ctx.beginPath();
          ctx.arc(x, y, dotSize + glow * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.12 + glow * 0.6;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function HeroDotGrid() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ↓ Customise background props here */}
      <DotGridBg color={PRIMARY} dotSize={2} gap={28} glowRadius={140} />
      <HeroContent />
    </Box>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 4. BEAMS BACKGROUND  (circle beams)
// ─────────────────────────────────────────────────────────────────────────────
// Props
//   color       {string}  hex — beam colour     default: PRIMARY
//   beamCount   {number}  number of beams       default: 18
//   speed       {number}  rotation speed        default: 0.005
//   maxOpacity  {number}  peak beam opacity     default: 0.18
// ═════════════════════════════════════════════════════════════════════════════
export function BeamsBg({
  color = PRIMARY,
  beamCount = 18,
  speed = 0.005,
  maxOpacity = 0.18,
}) {
  const ref = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const R = Math.max(W, H) * 0.85;

      // pick color that works with current theme when no explicit color provided
      const baseColor = color || (theme?.palette?.primary?.main ?? PRIMARY);
      const secondaryColor = theme?.palette?.secondary?.main || SECONDARY;

      for (let i = 0; i < beamCount; i++) {
        const angle = (i / beamCount) * Math.PI * 2 + t;
        const bw = ((Math.PI * 2) / beamCount) * 0.32;
        const op = (Math.sin(t * 2.5 + i * 1.1) * 0.5 + 0.5) * maxOpacity;

        const x1 = cx + Math.cos(angle - bw) * R;
        const y1 = cy + Math.sin(angle - bw) * R;
        const x2 = cx + Math.cos(angle + bw) * R;
        const y2 = cy + Math.sin(angle + bw) * R;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();

        const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
        const a16 = Math.round(op * 255).toString(16).padStart(2, "0");
        gr.addColorStop(0, baseColor + a16);
        gr.addColorStop(1, baseColor + "00");
        ctx.fillStyle = gr;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function HeroBeams() {
  const theme = useTheme();
  const baseColor = theme?.palette?.primary?.main || PRIMARY;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ↓ Customise background props here */}
      <BeamsBg color={baseColor} beamCount={18} speed={0.005} maxOpacity={0.18} />
      <HeroContent />
    </Box>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 5. GRID SCAN BACKGROUND  (circle grid / radar)
// ─────────────────────────────────────────────────────────────────────────────
// Props
//   color      {string}  hex — grid + scan colour   default: PRIMARY
//   gridSize   {number}  grid cell size px           default: 40
//   scanSpeed  {number}  radar sweep speed           default: 0.008
//   ringCount  {number}  concentric rings            default: 7
// ═════════════════════════════════════════════════════════════════════════════
export function GridScanBg({
  color = PRIMARY,
  gridSize = 40,
  scanSpeed = 0.008,
  ringCount = 7,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pulseRadius = (progress, maxR) => {
      if (progress < 0.38) {
        const eased = progress / 0.38;
        return maxR * Math.pow(eased, 0.8);
      }

      if (progress < 0.58) {
        return maxR;
      }

      const eased = (progress - 0.58) / 0.42;
      return maxR * (1 - Math.pow(eased, 0.9));
    };

    const draw = () => {
      t += scanSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const maxR = Math.min(W, H) * 0.35;
      const progress = (Math.sin(t) + 1) / 2;

      // Grid clipped to circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.07;
      ctx.lineWidth = 0.5;
      for (let x = ((cx % gridSize) + gridSize) % gridSize; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = ((cy % gridSize) + gridSize) % gridSize; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.restore();

      // Concentric rings
      for (let i = 1; i <= ringCount; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / ringCount) * i, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.09;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Radar sweep
      const scanR = pulseRadius(progress, maxR);
      const sg = ctx.createRadialGradient(cx, cy, Math.max(0, scanR - 40), cx, cy, scanR + 8);
      sg.addColorStop(0, color + "00");
      sg.addColorStop(0.75, color + "00");
      sg.addColorStop(0.9, SECONDARY + "25");
      sg.addColorStop(1, SECONDARY + "08");
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, scanR + 8, 0, Math.PI * 2);
      ctx.fillStyle = sg;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, scanR, 0, Math.PI * 2);
      ctx.strokeStyle = SECONDARY + "90";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Centre dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = SECONDARY + "80";
      ctx.globalAlpha = 1;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function HeroGridScan() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ↓ Customise background props here */}
      <GridScanBg color={PRIMARY} gridSize={40} scanSpeed={0.008} ringCount={7} />
      <HeroContent />
    </Box>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 6. LINE WAVES BACKGROUND  (circle waves)
// ─────────────────────────────────────────────────────────────────────────────
// Props
//   color      {string}  hex — ring colour       default: PRIMARY
//   ringCount  {number}  number of ring layers   default: 14
//   speed      {number}  wave animation speed    default: 0.022
//   amplitude  {number}  wave distortion px      default: 10
// ═════════════════════════════════════════════════════════════════════════════
export function LineWavesBg({
  color     = PRIMARY,
  ringCount = 14,
  speed     = 0.022,
  amplitude = 10,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx    = canvas.getContext("2d");
    let raf, t   = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W    = canvas.width, H = canvas.height;
      const cx   = W / 2, cy = H / 2;
      const maxR = Math.max(W, H) * 0.55;

      for (let i = 1; i <= ringCount; i++) {
        const baseR  = (maxR / ringCount) * i;
        const phase  = t - i * 0.28;
        const steps  = Math.max(180, Math.round(baseR * 2.5));

        ctx.beginPath();
        for (let j = 0; j <= steps; j++) {
          const angle = (j / steps) * Math.PI * 2;
          const wave  =
            amplitude * Math.sin(angle * 4 + phase) * 0.7 +
            amplitude * 0.4 * Math.sin(angle * 2 - phase * 0.6);
          const r  = baseR + wave;
          const px = cx + Math.cos(angle) * r;
          const py = cy + Math.sin(angle) * r;
          j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.08 + (1 - i / ringCount) * 0.09;
        ctx.lineWidth   = 2;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function HeroLineWaves() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        mb: { xs: 6, md: 8 },
        pt: { xs: 10, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ↓ Customise background props here */}
      <LineWavesBg color={PRIMARY} ringCount={14} speed={0.022} amplitude={10} />
      <HeroContent />
    </Box>
  );
}

//7th page animation from common components

//8th page animation from Sections folder

//9th animation
export function CirclePulseBg({
  color = PRIMARY,
  pulseCount = 5,
  speed = 0.002,
  maxRadiusRatio = 0.75,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;

      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const maxR = Math.min(W, H) * maxRadiusRatio;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < pulseCount; i++) {
        const progress = (t + i / pulseCount) % 1;

        // smooth growth
        const radius = progress * maxR;

        // fade out
        const alpha = 1 - progress;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);

        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * 0.6;
        ctx.lineWidth = 2;

        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      // center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        transform: "translateX(50%)",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        borderRadius: "50%", // ensures visual circle
      }}
    />
  );
}

//10th animation
export function OrbitalRingsBg({
  color = SECONDARY,
  ringCount = 4,
  particleCount = 3,
  speed = 0.01,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    let raf;
    let t = 0;


    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;

      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const maxR = W * 0.35;

      ctx.clearRect(0, 0, W, H);

      for (let i = 1; i <= ringCount; i++) {
        const r = (maxR / ringCount) * i;

        // rotation offset
        const rotation = t * (0.5 + i * 0.2);

        // ✅ draw ring
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.15;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // ✅ orbiting particles
        for (let p = 0; p < particleCount; p++) {
          const angle =
            (p / particleCount) * Math.PI * 2 + rotation;

          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;

          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.9;
          ctx.fill();
        }
      }

      // ✅ glowing center core
      const pulse = Math.sin(t * 4) * 2;

      ctx.beginPath();
      ctx.arc(cx, cy, 6 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowBlur = 20;
      ctx.shadowColor = color;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        transform: "translateX(50%)",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        borderRadius: "50%",
      }}
    />
  );
}

//11th animation
export function SpiralVortexBg({
  color = PRIMARY,
  dotCount = 220,
  turns = 6,
  speed = 0.012,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const maxR = Math.min(W, H) * 0.44;

      for (let i = 0; i < dotCount; i++) {
        const frac = i / dotCount;
        const angle = frac * Math.PI * 2 * turns + t;
        const r = frac * maxR;

        const breathe = Math.sin(frac * Math.PI * 4 + t * 2) * 0.5 + 0.5;
        const dotR = 1.2 + breathe * 3.5;

        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;

        ctx.beginPath();
        ctx.arc(x, y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.15 + frac * 0.7;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // glowing center
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30);
      grad.addColorStop(0, color + "cc");
      grad.addColorStop(1, color + "00");
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

//12th animation
export function ArcBurstBg({
  color1 = PRIMARY,
  color2 = SECONDARY,
  layers = 5,
  arcsPerLayer = 8,
  speed = 0.018,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const maxR = Math.min(W, H) * 0.44;

      for (let l = 0; l < layers; l++) {
        const layerOffset = l / layers;
        const progress = (t * 0.3 + layerOffset) % 1;
        const r = progress * maxR;
        const alpha = (1 - progress) * 0.75;
        const arcLen = (Math.PI * 2 / arcsPerLayer) * (0.25 + progress * 0.15);
        const rotOffset = t * (l % 2 === 0 ? 1 : -0.7) + l * 0.8;
        const color = l % 2 === 0 ? color1 : color2;

        for (let a = 0; a < arcsPerLayer; a++) {
          const baseAngle = (a / arcsPerLayer) * Math.PI * 2 + rotOffset;
          ctx.beginPath();
          ctx.arc(cx, cy, r, baseAngle, baseAngle + arcLen);
          ctx.strokeStyle = color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 2.5 - progress * 1.5;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;

      // pulsing core
      const pulse = (Math.sin(t * 4) * 0.5 + 0.5) * 8;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18 + pulse);
      g.addColorStop(0, color1 + "ff");
      g.addColorStop(0.5, color1 + "80");
      g.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 18 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

export function LissajousWebBg({
  freqA = 3,
  freqB = 2,
  speed = 0.004,
  steps = 600,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      const rx = W * 0.4, ry = H * 0.4;
      const cx = W / 2, cy = H / 2;

      ctx.lineWidth = 1.2;
      for (let i = 0; i < steps; i++) {
        const pct = i / steps;
        const phi = pct * Math.PI * 2;
        const x = cx + rx * Math.sin(freqA * phi + t);
        const y = cy + ry * Math.sin(freqB * phi);

        const hue = (pct * 280 + t * 40) % 360;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue}, 90%, 68%)`;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      }

      // bright rider dot
      const px = cx + rx * Math.sin(freqA * t + t);
      const py = cy + ry * Math.sin(freqB * t);
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.globalAlpha = 0.9;
      ctx.fill();

      const glow = ctx.createRadialGradient(px, py, 0, px, py, 22);
      glow.addColorStop(0, "#ffffff55");
      glow.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(px, py, 22, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.globalAlpha = 1;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", opacity: 0.85 }}
    />
  );
}

export function ArcRotateBg({ color = "#06b6d4" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf, t = 0;

    const resize = () => {
      const size = Math.min(canvas.offsetWidth, canvas.offsetHeight);
      if (!size) return;
      canvas.width = size;
      canvas.height = size;
    };

    resize();

    const draw = () => {
      t += 0.02;

      const W = canvas.width;
      const cx = W / 2;

      ctx.clearRect(0, 0, W, W);

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(
          cx,
          cx,
          W * (0.25 + i * 0.1),
          t + i,
          t + i + Math.PI * 0.7
        );

        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, [color]);

  return <canvas ref={ref}
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />;
}

export function ScrollCircleBg({
  color = "#6366f1",
}) {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // ✅ track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ compute movement
  const translateY = scrollY * 0.3;   // vertical movement
  const translateX = scrollY * 0.05;  // slight horizontal drift
  const scale = 1 + scrollY * 0.0005; // subtle zoom

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: `
          translate(-50%, ${translateY}px)
          scale(${scale})
        `,
        width: 500,
        height: 500,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,

        // ✅ soft gradient (readable)
        background: `radial-gradient(circle at center, ${color}33, ${color}05 70%, transparent 100%)`,

        // ✅ optional blur glow
        filter: "blur(20px)",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// THEME TOKENS
// ─────────────────────────────────────────────────────────────
const THEMES = {
  blue: {
    primary:   "#1d89c8",
    secondary: "#3eb8af",
  },
  teal: {
    primary:   "#3eb8af",
    secondary: "#1d89c8",
  },
  gold: {
    primary:   "#e6a817",
    secondary: "#3eb8af",
  },
  violet: {
    primary:   "#7c3aed",
    secondary: "#3eb8af",
  },
};

// ─────────────────────────────────────────────────────────────
// CRKL_ANIMS — inject this <style> once at app root
// ─────────────────────────────────────────────────────────────
export const CRKL_ANIMS = `
  /* ── 1. OrbitingDots ── */
  @keyframes crklOrbit1 {
    from { transform: rotate(0deg)   translateX(var(--r1,115px)) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(var(--r1,115px)) rotate(-360deg); }
  }
  @keyframes crklOrbit2 {
    from { transform: rotate(0deg)   translateX(var(--r2,185px)) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(var(--r2,185px)) rotate(-360deg); }
  }
  @keyframes crklOrbit3 {
    from { transform: rotate(0deg)   translateX(var(--r3,258px)) rotate(0deg); }
    to   { transform: rotate(-360deg) translateX(var(--r3,258px)) rotate(360deg); }
  }

  /* ── 2. SpiralPulse ── */
  @keyframes crklPulse {
    0%   { transform: scale(0.25); opacity: 0.75; }
    100% { transform: scale(1.7);  opacity: 0; }
  }

  /* ── 3. HelixWave ── */
  @keyframes crklHelix {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── 4. BreathingCircle ── */
  @keyframes crklBreathe {
    0%,100% { transform: scale(1);    opacity: var(--bmin, 0.18); }
    50%     { transform: scale(1.22); opacity: var(--bmax, 0.28); }
  }

  /* ── 5. RotatingArc ── */
  @keyframes crklArcCW  { to { transform: rotate(360deg);  } }
  @keyframes crklArcCCW { to { transform: rotate(-360deg); } }
`;

// Helper: inject keyframes once
const INJECTED = { current: false };
function useAnimStyles() {
  if (typeof document !== "undefined" && !INJECTED.current) {
    const tag = document.createElement("style");
    tag.textContent = CRKL_ANIMS;
    document.head.appendChild(tag);
    INJECTED.current = true;
  }
}

export function OrbitingDots({
  isDark = true,
  theme = "blue",
  cx = "62%",
  cy = "50%",
  radii  = [115, 185, 258],
  counts = [3, 5, 7],
  speeds = [11, 17, 26],
  sizes  = [13, 11, 8],
}) {
  useAnimStyles();
  const { primary, secondary } = THEMES[theme] || THEMES.blue;
 
  const colors = [
    isDark ? `${primary}cc`   : `${primary}99`,
    isDark ? `${secondary}bb` : `${secondary}80`,
    isDark ? `${primary}33` : `${primary}22`,
  ];
  const anims = ["crklOrbit1", "crklOrbit2", "crklOrbit3"];
 
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {radii.map((r, ri) =>
        Array.from({ length: counts[ri] }).map((_, di) => {
          const delay = -((speeds[ri] / counts[ri]) * di);
          const initAngle = (360 / counts[ri]) * di;
          return (
            <div
              key={`${ri}-${di}`}
              style={{
                position: "absolute",
                top: cy, left: cx,
                width: sizes[ri], height: sizes[ri],
                borderRadius: "50%",
                background: colors[ri],
                transformOrigin: "0 0",
                animation: `${anims[ri]} ${speeds[ri]}s linear infinite`,
                animationDelay: `${delay}s`,
                transform: `rotate(${initAngle}deg) translateX(${r}px) rotate(-${initAngle}deg)`,
                [`--r${ri + 1}`]: `${r}px`,
              }}
            />
          );
        })
      )}
    </div>
  );
}
 
// ─────────────────────────────────────────────────────────────
// 3. HelixWave
// props: isDark, theme="blue", bottom="18%", speed=18
// ─────────────────────────────────────────────────────────────
export function HelixWave({
  isDark = true,
  theme = "blue",
  bottom = "18%",
  speed = 18,
}) {
  useAnimStyles();
  const { primary, secondary } = THEMES[theme] || THEMES.blue;
 
  const W = 1200; const H = 80; const freq = 5; const amp = 22;
  const wave1 = Array.from({ length: W * 2 + 1 }, (_, x) => {
    const y = H / 2 + amp * Math.sin((x / W) * freq * Math.PI * 2);
    return `${x === 0 ? "M" : "L"} ${x} ${y.toFixed(2)}`;
  }).join(" ");
  const wave2 = Array.from({ length: W * 2 + 1 }, (_, x) => {
    const y = H / 2 + amp * Math.sin((x / W) * freq * Math.PI * 2 + Math.PI * 0.6);
    return `${x === 0 ? "M" : "L"} ${x} ${y.toFixed(2)}`;
  }).join(" ");
 
  return (
    <div
      style={{
        position: "absolute",
        bottom,
        left: 0,
        width: "200%",
        height: 80,
        animation: `crklHelix ${speed}s linear infinite`,
        pointerEvents: "none",
        opacity: 1
      }}
    >
      <svg
        viewBox={`0 0 ${W * 2} ${H}`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
      >
        <path d={wave1} fill="none" stroke={isDark ? `${secondary}55` : `${primary}40`} strokeWidth="1.8" />
        <path d={wave2} fill="none" stroke={isDark ? `${primary}40` : `${secondary}30`} strokeWidth="1.2" strokeDasharray="6 5" />
      </svg>
    </div>
  );
}
 
// ─────────────────────────────────────────────────────────────
// 5. RotatingArc
// props: isDark, theme="blue", cx="50%", cy="50%"
//        arcs=[{r, dash, dur, dir, width}]
// ─────────────────────────────────────────────────────────────
export function RotatingArc({
  isDark = true,
  theme = "blue",
  cx = "50%",
  cy = "50%",
  arcs = [
    { r: 95,  dash: "40 20",  dur: "14s",  dir: "CW",  width: 1.5 },
    { r: 145, dash: "60 30",  dur: "20s",  dir: "CCW", width: 1.2 },
    { r: 210, dash: "25 45",  dur: "32s",  dir: "CW",  width: 0.8 },
    { r: 295, dash: "80 50",  dur: "42s",  dir: "CCW", width: 0.6 },
  ],
}) {
  useAnimStyles();
  const { primary, secondary } = THEMES[theme] || THEMES.blue;
 
  const colors = [
    isDark ? `${primary}55`          : `${primary}42`,
    isDark ? `${secondary}45`        : `${secondary}35`,
    isDark ? "rgba(255,255,255,0.12)": "rgba(29,137,200,0.15)",
    isDark ? `${primary}30`          : `${primary}25`,
  ];
 
  const diam = (arcs[arcs.length - 1]?.r || 295) * 2 + 60;
 
  return (
    <div
      style={{
        position: "absolute",
        top: cy, left: cx,
        width: diam, height: diam,
        marginTop: -diam / 2, marginLeft: -diam / 2,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <svg
        viewBox={`0 0 ${diam} ${diam}`}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        {arcs.map((arc, i) => (
          <circle
            key={i}
            cx={diam / 2} cy={diam / 2}
            r={arc.r}
            fill="none"
            stroke={colors[i % colors.length]}
            strokeWidth={arc.width}
            strokeDasharray={arc.dash}
            style={{
              transformOrigin: `${diam / 2}px ${diam / 2}px`,
              animation: `crklArc${arc.dir} ${arc.dur} linear infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// USAGE EXAMPLE in your page file:
//
//   import { HeroWaves } from "./HeroVariants";       // pick one
//   // import { HeroColorBends } from "./HeroVariants";
//   // import { HeroDotGrid    } from "./HeroVariants";
//   // import { HeroBeams      } from "./HeroVariants";
//   // import { HeroGridScan   } from "./HeroVariants";
//   // import { HeroLineWaves  } from "./HeroVariants";
//
//   export default function Home() {
//     return (
//       <>
//         <HeroWaves />
//         {/* rest of page */}
//       </>
//     );
//   }
// ─────────────────────────────────────────────────────────────────────────────
