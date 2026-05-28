import { useCallback, useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

import "./Masonry.css";
import TeamCard from "./TeamCard";

const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((query) => matchMedia(query).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((query) => matchMedia(query).addEventListener("change", handler));
    return () => queries.forEach((query) => matchMedia(query).removeEventListener("change", handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, size];
};

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [loadedIds, setLoadedIds] = useState(() => new Set());
  const hasMounted = useRef(false);

  const { grid, containerHeight } = useMemo(() => {
    if (!width) return { grid: [], containerHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    const mapped = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.height / 2;
      const y = colHeights[col];
      colHeights[col] += height;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    return { grid: mapped, containerHeight: Math.ceil(Math.max(...colHeights, 0)) };
  }, [columns, items, width]);

  const getInitialPosition = useCallback(
    (item) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return { x: item.x, y: item.y };

      const direction =
        animateFrom === "random"
          ? ["top", "bottom", "left", "right"][Math.floor(Math.random() * 4)]
          : animateFrom;

      switch (direction) {
        case "top":    return { x: item.x, y: -200 };
        case "left":   return { x: -200, y: item.y };
        case "right":  return { x: window.innerWidth + 200, y: item.y };
        case "center": return { x: containerRect.width / 2 - item.w / 2, y: containerRect.height / 2 - item.h / 2 };
        default:       return { x: item.x, y: item.y + 100 };
      }
    },
    [animateFrom, containerRef]
  );

  useLayoutEffect(() => {
    if (!grid.length) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;

      gsap.set(selector, { width: item.w, height: item.h });

      if (!hasMounted.current) {
        const { x: ix, y: iy } = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            x: ix,
            y: iy,
            opacity: 0,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            x: item.x,
            y: item.y,
            opacity: 1,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.6,
            ease: "power3.out",
            delay: index * Math.min(stagger, 0.03),
          }
        );
      } else {
        gsap.to(selector, {
          x: item.x,
          y: item.y,
          duration: Math.min(duration, 0.35),
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleImageLoad = useCallback((id) => {
    setLoadedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const handleMouseEnter = useCallback(
    (e, item) => {
      if (scaleOnHover) {
        gsap.to(`[data-key="${item.id}"]`, { scale: hoverScale, duration: 0.3, ease: "power2.out" });
      }
      if (colorShiftOnHover) {
        const overlay = e.currentTarget.querySelector(".color-overlay");
        if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
      }
    },
    [scaleOnHover, hoverScale, colorShiftOnHover]
  );

  const handleMouseLeave = useCallback(
    (e, item) => {
      if (scaleOnHover) {
        gsap.to(`[data-key="${item.id}"]`, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
      if (colorShiftOnHover) {
        const overlay = e.currentTarget.querySelector(".color-overlay");
        if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
      }
    },
    [scaleOnHover, colorShiftOnHover]
  );

  return (
    <div
      ref={containerRef}
      className="list"
      style={{ height: containerHeight ? `${containerHeight}px` : undefined }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onClick={() => window.open(item.url, "_blank", "noopener")}
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseLeave={(e) => handleMouseLeave(e, item)}
        >
            <div className="item-img">
            { (item.image ?? item.img) ? (
              <img
                src={item.image ?? item.img}
                alt={item.name || ""}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onLoad={() => handleImageLoad(item.id)}
                className={`item-photo${loadedIds.has(item.id) ? " item-photo--loaded" : ""}`}
              />
            ) : (
              <div className={`item-photo item-photo--placeholder`} style={{background: '#dbeef8', width:'100%', height:'100%', borderRadius:8}} />
            )}
            {(item.name || item.role || item.email || item.linkedinUrl) && (
              <TeamCard {...item} />
            )}
            {colorShiftOnHover && (
              <div
                className="color-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0,
                  pointerEvents: "none",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;