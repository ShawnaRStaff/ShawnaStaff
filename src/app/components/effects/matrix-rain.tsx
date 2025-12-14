"use client";
import { useEffect, useRef, useState } from "react";

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
  respawnDelay: number; 
  active: boolean; 
}

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(0);
  const columnsRef = useRef<Column[]>([]);
  const animationRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const fontSize = 10;
    const columnWidth = 14;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    const initColumns = () => {
      const columnCount = Math.floor(canvas.width / columnWidth);
      columnsRef.current = [];

      for (let i = 0; i < columnCount; i++) {
        columnsRef.current.push(createColumn(i, columnWidth, fontSize, canvas.height, true));
      }
    };

    const createColumn = (
      index: number,
      colWidth: number,
      fSize: number,
      canvasHeight: number,
      isInitial: boolean = false
    ): Column => {
      // Long trails that can span much of the viewport
      const length = Math.floor(Math.random() * 60) + 20; // 20-80 characters

      // Much wider speed variation (0.5x to 4x)
      const speed = Math.random() * 3 + 0.5; // 0.5 - 3.5 pixels per frame

      return {
        x: index * colWidth + (colWidth - fSize) / 2,
        // Initial columns start at random heights, new columns start above screen
        y: isInitial
          ? Math.random() * canvasHeight * 2 - canvasHeight
          : -length * fSize - Math.random() * canvasHeight,
        speed,
        chars: Array.from({ length }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
        length,
        respawnDelay: 0,
        active: isInitial ? Math.random() > 0.15 : false, // 85% of initial columns active
      };
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      frameCountRef.current++;

      // Slightly stronger fade for crisper trails
      ctx.fillStyle = "rgba(10, 10, 10, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set up crisp text rendering
      ctx.font = `bold ${fontSize}px "JetBrains Mono", "Courier New", monospace`;
      ctx.textBaseline = "top";

      columnsRef.current.forEach((column, colIndex) => {
        // Handle respawn delay
        if (!column.active) {
          if (column.respawnDelay > 0) {
            column.respawnDelay--;
          } else {
            column.active = true;
          }
          return;
        }

        column.chars.forEach((char, i) => {
          const y = column.y + i * fontSize;

          if (y < -fontSize || y > canvas.height + fontSize) return;

          const isHead = i === column.chars.length - 1;
          const distanceFromHead = column.chars.length - 1 - i;

          // Reset shadow for each character
          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";

          if (isHead) {
            // Bright white head with glow
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = "#00ff88";
            ctx.shadowBlur = 4;
          } else if (distanceFromHead === 1) {
            // Second character - bright green
            ctx.fillStyle = "#00ff88";
            ctx.shadowBlur = 1;
          } else if (distanceFromHead < 4) {
            // Near head - bright green, slight exponential fade
            const alpha = Math.pow(0.85, distanceFromHead - 1);
            ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
          } else {
            // Trail - exponential fade (more dramatic than linear)
            const fadeRatio = Math.pow(
              1 - (distanceFromHead - 3) / (column.length - 3),
              1.8 // Exponential factor for more dramatic fade
            );
            const alpha = Math.max(0.1, fadeRatio * 0.7);
            ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
          }

          ctx.fillText(char, column.x, y);
        });

        // Reset shadow after drawing
        ctx.shadowBlur = 0;

        column.y += column.speed;

        // Reset column when it goes off screen
        if (column.y > canvas.height + column.length * fontSize) {
          // Shorter delay for more active columns (0-60 frames = 0-1 second at 60fps)
          const delay = Math.floor(Math.random() * 60);
          columnsRef.current[colIndex] = createColumn(colIndex, columnWidth, fontSize, canvas.height);
          columnsRef.current[colIndex].respawnDelay = delay;
          columnsRef.current[colIndex].active = false;
        }

        // Slightly higher mutation rate for more dynamism
        if (Math.random() < 0.05) {
          const randomIndex = Math.floor(Math.random() * (column.chars.length - 1)); // Don't mutate head
          column.chars[randomIndex] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cycleDuration = 12000;
    const fadeInStart = 0.42;
    const fadeInEnd = 0.48;
    const fadeOutStart = 0.52;
    const fadeOutEnd = 0.58;
    const maxOpacity = 0.25;

    const updateOpacity = () => {
      const progress = (Date.now() % cycleDuration) / cycleDuration;

      let newOpacity = 0;
      if (progress >= fadeInStart && progress < fadeInEnd) {
        const fadeProgress = (progress - fadeInStart) / (fadeInEnd - fadeInStart);
        newOpacity = fadeProgress * maxOpacity;
      } else if (progress >= fadeInEnd && progress < fadeOutStart) {
        newOpacity = maxOpacity;
      } else if (progress >= fadeOutStart && progress < fadeOutEnd) {
        const fadeProgress = (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        newOpacity = (1 - fadeProgress) * maxOpacity;
      }

      setOpacity(newOpacity);
    };

    const interval = setInterval(updateOpacity, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity }}
    />
  );
}
