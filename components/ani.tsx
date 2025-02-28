"use client";

import React, { useEffect, useState } from "react";
import Vivus from "vivus";

const LightningAnimation = () => {
  useEffect(() => {
    const animate = () => {
      const vivus = new Vivus("lightning-svg", {
        type: "oneByOne", // Sequential drawing
        duration: 20, // Speed of animation
        animTimingFunction: Vivus.EASE_OUT, // Smooth movement
        start: "autostart", // Auto-start
        selfDestroy: false, // Keeps styling
      }, function () {
        // Reverse animation after finishing (creates chase effect)
        vivus.play(-1, () => {
          setTimeout(() => animate(), 20); // Restart animation after short delay
        });
      });
    };

    animate();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg
        id="lightning-svg"
        width="250"
        height="250"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sky-500"
      >
        <path d="M13 2L3 14h7v8l11-12h-8V2z"></path>
      </svg>
    </div>
  );
};

export default LightningAnimation;
