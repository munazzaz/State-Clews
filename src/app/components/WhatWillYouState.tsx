"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function WhatWillYouState() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "end 0%"],
  });

  const videoRef = useRef<HTMLVideoElement | null>(null); // ✅ Typed ref

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play(); // Start playing when in view
          } else {
            videoElement.pause(); // Pause when out of view
          }
        });
      },
      { threshold: 0.5 } // Start when 50% of video is visible
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  // Fade in effect
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (

    <div ref={containerRef} className="relative  bg-cover bg-center  h-[750vh] z-[3500] bg-white"
   
    >

      {/* Sticky section that fades in but does not slide */}
      <motion.div
        className="sticky top-0 left-0 w-full h-screen hidden sm:flex items-center justify-center "   
        style={{ opacity}}
      >
         <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://framerusercontent.com/assets/cHLkL9lcFiPp1VpTt0oVvCdGnc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </motion.div>
      <motion.div
        className="sticky top-0 left-0 w-full h-screen flex sm:hidden items-center justify-center bg-white"
        style={{ opacity }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[70%] object-cover"
        >
          <source
            src="https://framerusercontent.com/assets/JvlveftguUlkCr8L5W5qiI8ZcM.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
