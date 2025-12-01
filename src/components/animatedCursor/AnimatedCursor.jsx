import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Define nebula colors
const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#C77DFF", "#FF4D6D", "#FFAA5C"];

const NebulaCursor = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Create a bigger particle
      const particle = document.createElement("div");
      particle.className = "nebula-particle";
      const size = Math.random() * 20 + 10; // 10-30px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.position = "fixed";
      particle.style.top = `${clientY - size / 2}px`;
      particle.style.left = `${clientX - size / 2}px`;
      particle.style.pointerEvents = "none";
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = 0.9;

      container.appendChild(particle);

      // Animate particle (burst + fade)
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 80, // spread farther
        y: (Math.random() - 0.5) * 80,
        scale: 0,
        opacity: 0,
        duration: 1.5 + Math.random(), // longer lifespan
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="nebula-cursor-container" />;
};

export default NebulaCursor;
