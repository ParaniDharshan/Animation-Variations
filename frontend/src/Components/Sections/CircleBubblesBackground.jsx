import React from "react";

const bubbles = [
  { id: 1, size: 220, top: "8%", left: "4%", duration: "12s", delay: "0s" },
  { id: 2, size: 160, top: "20%", left: "80%", duration: "14s", delay: "-3s" },
  { id: 3, size: 120, top: "70%", left: "10%", duration: "16s", delay: "-5s" },
  { id: 4, size: 180, top: "85%", left: "75%", duration: "13s", delay: "-2s" },
  { id: 5, size: 90, top: "50%", left: "45%", duration: "15s", delay: "-6s" },
  { id: 6, size: 140, top: "65%", left: "25%", duration: "18s", delay: "-4s" },
  { id: 7, size: 100, top: "35%", left: "65%", duration: "17s", delay: "-7s" },
  { id: 8, size: 200, top: "75%", left: "55%", duration: "20s", delay: "-10s" },
  { id: 9, size: 110, top: "15%", left: "60%", duration: "16s", delay: "-3s" },
  { id: 10, size: 130, top: "30%", left: "30%", duration: "19s", delay: "-6s" },
  { id: 11, size: 95, top: "60%", left: "75%", duration: "18s", delay: "-8s" },
  { id: 12, size: 170, top: "10%", left: "40%", duration: "22s", delay: "-5s" },
  { id: 13, size: 150, top: "80%", left: "20%", duration: "21s", delay: "-9s" },
  { id: 14, size: 85, top: "45%", left: "10%", duration: "14s", delay: "-4s" },
  { id: 15, size: 140, top: "25%", left: "50%", duration: "19s", delay: "-7s" }
];

const CircleBubblesBackground = ({ fullScreen = true }) => {
  const containerStyle = {
    position: fullScreen ? "fixed" : "absolute",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
    pointerEvents: "none",
    opacity: 0.52,
    filter: "saturate(0.9)",
    WebkitFilter: "saturate(0.9)",
  };

  const baseSpanStyle = {
    position: "absolute",
    display: "block",
    borderRadius: "50%",
    willChange: "transform",
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(1px)",
  };

  return (
    <div style={containerStyle} aria-hidden="true">
      {bubbles.map((bubble, index) => {
        const isEven = index % 2 === 0;
        const borderColor = isEven ? "rgba(29,137,200,0.32)" : "rgba(62,184,175,0.32)";
        const background = isEven
          ? "radial-gradient(circle at 30% 30%, rgba(62,184,175,0.7), rgba(29,137,200,0.4) 58%, rgba(29,137,200,0.2))"
          : "radial-gradient(circle at 70% 35%, rgba(29,137,200,0.36), rgba(62,184,175,0.16) 60%, rgba(62,184,175,0.05))";

        const style = {
          ...baseSpanStyle,
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          top: bubble.top,
          left: bubble.left,
          border: `1px solid ${borderColor}`,
          background,
          animationName: "bubble-float",
          animationDuration: bubble.duration,
          animationDelay: bubble.delay,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          transformOrigin: "center",
          opacity: 1,
        };

        return <span key={bubble.id} style={style} />;
      })}

      <style>{`@keyframes bubble-float {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  35% { transform: translate3d(10px, -14px, 0) scale(1.03); }
  70% { transform: translate3d(-14px, 10px, 0) scale(0.97); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

/* reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  span[style] { animation: none !important; }
}
`}</style>
    </div>
  );
};

export default CircleBubblesBackground;
