import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import memoji from "../../assets/memoji.png";

const Hero = () => {
  const circle1Ref = useRef(null);
  const square1Ref = useRef(null);
  const triangle1Ref = useRef(null);
  const triangle2Ref = useRef(null);
  const welcomeRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Floating SVGs animations
    gsap.to(circle1Ref.current, {
      y: -20,
      x: 10,
      rotate: 0,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(square1Ref.current, {
      y: 15,
      x: -10,
      rotate: 0,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(triangle1Ref.current, {
      y: -25,
      rotate: 45,
      duration: 6,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(triangle2Ref.current, {
      y: 20,
      rotate: -30,
      duration: 7,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Welcome text animation
    gsap.fromTo(
      welcomeRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, delay: 0.3, duration: 1 }
    );

    // Buttons animation: hover & click
    buttonRefs.current.forEach((btn) => {
      // Hover effect
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.2 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
      });

      // Click effect
      btn.addEventListener("mousedown", () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1 });
      });
      btn.addEventListener("mouseup", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.1 });
      });
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      id="home"
    >
      {/* Soft pastel gradient blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-white to-violet-300 dark:bg-[#071D3B] dark:bg-none blur-3xl opacity-40 -z-10"></div>

      {/* Floating SVG Circles */}
      <div ref={circle1Ref} className="absolute top-20 left-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      <div ref={square1Ref} className="absolute bottom-20 right-12">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="2"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" />
        </svg>
      </div>

      <div ref={triangle1Ref} className="absolute top-1/2 left-1/4">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
        >
          <polygon points="12,2 22,22 2,22" />
        </svg>
      </div>

      <div ref={triangle2Ref} className="absolute bottom-1/3 right-1/4">
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FBBF24"
          strokeWidth="2"
        >
          <polygon points="12,2 22,22 2,22" />
        </svg>
      </div>

      {/* Avatar */}
      <div className="w-32 h-32 p-4 rounded-full bg-violet-100 flex items-center justify-center mb-5">
        <img
          src={memoji}
          alt="avatar"
          className="w-24 h-24 rounded-full relative z-10"
        />
      </div>

      {/* Welcome Text */}
      <span
        ref={welcomeRef}
        className="inline-block bg-gradient-to-r from-purple-200 to-blue-200 text-purple-700 px-4 py-1 rounded-full mb-4 font-medium"
      >
        Welcome my portfolio
      </span>

      {/* Name & Role */}
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight max-w-3xl mb-4 relative z-10 text-gray-900 dark:text-white">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
          Noman
        </span>
      </h1>
      <h3 className="text-xl sm:text-2xl font-medium mb-4 relative z-10 text-gray-700 dark:text-gray-300">
        Web Developer specializing in Laravel & React JS
      </h3>

      {/* Description */}
      <p className="text-lg max-w-xl text-gray-600 dark:text-gray-300 mb-6 relative z-10">
        I build modern, responsive web applications with a focus on user
        experience and performance.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4 relative z-10">
        <button
          ref={(el) => (buttonRefs.current[0] = el)}
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-md transition-transform"
        >
          Get in Touch
        </button>
        <button
          ref={(el) => (buttonRefs.current[1] = el)}
          className="bg-white text-black font-semibold px-6 py-3 rounded-md transition-transform"
        >
          View Project
        </button>
      </div>
    </section>
  );
};

export default Hero;
