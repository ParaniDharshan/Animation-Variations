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

import React, { useRef, useEffect } from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CTAButton from "../common-components/CTAButton"; // adjust path if needed
import { PRIMARY, SECONDARY } from "../../Constants.js";   // your colour tokens

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
  color1    = PRIMARY,
  color2    = SECONDARY,
  speed     = 0.015,
  amplitude = 50,
  waveCount = 4,
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

    const waves = Array.from({ length: waveCount }, (_, i) => ({
      freq  : 0.006 + i * 0.002,
      amp   : amplitude - i * 8,
      offset: i * Math.PI * 0.7,
      yBase : 0.55 + i * 0.09,
      color : i % 2 === 0 ? color1 : color2,
      alpha : 0.13 - i * 0.02,
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
        ctx.fillStyle   = w.color;
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
  color1    = PRIMARY,
  color2    = SECONDARY,
  blobCount = 6,
  speed     = 0.003,
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

    const blobs = Array.from({ length: blobCount }, (_, i) => ({
      x    : 0.1 + Math.random() * 0.8,
      y    : 0.1 + Math.random() * 0.8,
      r    : 0.25 + Math.random() * 0.2,
      ox   : Math.random() * Math.PI * 2,
      oy   : Math.random() * Math.PI * 2,
      vx   : 0.3 + Math.random() * 0.5,
      vy   : 0.25 + Math.random() * 0.4,
      color: i % 2 === 0 ? color1 : color2,
    }));

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;
      blobs.forEach((b) => {
        const cx   = (b.x + Math.sin(t * b.vx + b.ox) * 0.22) * W;
        const cy   = (b.y + Math.cos(t * b.vy + b.oy) * 0.18) * H;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r * Math.min(W, H));
        grad.addColorStop(0,   b.color + "30");
        grad.addColorStop(0.5, b.color + "14");
        grad.addColorStop(1,   "transparent");
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
  color      = PRIMARY,
  dotSize    = 2,
  gap        = 28,
  glowRadius = 140,
}) {
  const ref      = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx    = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const r         = canvas.getBoundingClientRect();
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
          ctx.fillStyle   = color;
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
  color      = PRIMARY,
  beamCount  = 18,
  speed      = 0.005,
  maxOpacity = 0.18,
}) {
  const ref = useRef(null);

  const theme = useTheme();

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
      const W  = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const R  = Math.max(W, H) * 0.85;

      // pick color that works with current theme when no explicit color provided
      const baseColor = color || (theme?.palette?.primary?.main ?? PRIMARY);
      const secondaryColor = theme?.palette?.secondary?.main || SECONDARY;

      for (let i = 0; i < beamCount; i++) {
        const angle = (i / beamCount) * Math.PI * 2 + t;
        const bw    = ((Math.PI * 2) / beamCount) * 0.32;
        const op    = (Math.sin(t * 2.5 + i * 1.1) * 0.5 + 0.5) * maxOpacity;

        const x1 = cx + Math.cos(angle - bw) * R;
        const y1 = cy + Math.sin(angle - bw) * R;
        const x2 = cx + Math.cos(angle + bw) * R;
        const y2 = cy + Math.sin(angle + bw) * R;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();

        const gr  = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
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
  color     = PRIMARY,
  gridSize  = 40,
  scanSpeed = 0.008,
  ringCount = 7,
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
      t += scanSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W    = canvas.width, H = canvas.height;
      const cx   = W / 2, cy = H / 2;
      const maxR = Math.max(W, H) * 0.62;

      // Grid clipped to circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.07;
      ctx.lineWidth   = 0.5;
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
        ctx.lineWidth   = 0.5;
        ctx.stroke();
      }

      // Radar sweep
      const scanR = maxR * ((t % (Math.PI * 2)) / (Math.PI * 2));
      const sg    = ctx.createRadialGradient(cx, cy, Math.max(0, scanR - 40), cx, cy, scanR + 8);
      sg.addColorStop(0,    color + "00");
      sg.addColorStop(0.75, color + "00");
      sg.addColorStop(0.9,  SECONDARY + "25");
      sg.addColorStop(1,    SECONDARY + "08");
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, scanR + 8, 0, Math.PI * 2);
      ctx.fillStyle = sg;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, scanR, 0, Math.PI * 2);
      ctx.strokeStyle = SECONDARY + "90";
      ctx.lineWidth   = 1.5;
      ctx.stroke();

      // Centre dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle   = SECONDARY + "80";
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
        ctx.globalAlpha = 0.05 + (1 - i / ringCount) * 0.09;
        ctx.lineWidth   = 0.75;
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
