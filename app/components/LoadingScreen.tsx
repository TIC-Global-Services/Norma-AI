"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Prevent scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const prog = { val: 0 };
    const tl = gsap.timeline();

    // Text Fill
    tl.fromTo(
      "#text-lit",
      { attr: { y: 160, height: 0 } },
      { attr: { y: 0, height: 160 }, duration: 5, ease: "power2.inOut" },
      0
    )
      .fromTo(
        "#text-glow",
        { attr: { y: 200 }, opacity: 1 },
        { attr: { y: -80 }, opacity: 0, duration: 5, ease: "power2.inOut" },
        0
      )

      // Logo Fill
      .fromTo(
        "#logo-lit",
        { attr: { y: 580, height: 0 } },
        { attr: { y: 400, height: 180 }, duration: 5, ease: "power2.inOut" },
        4.5
      )
      .fromTo(
        "#logo-glow",
        { attr: { y: 580 }, opacity: 1 },
        { attr: { y: 330 }, opacity: 0, duration: 5, ease: "power2.inOut" },
        4.5
      )

      //Progress counter
      .to(
        prog,
        {
          val: 100,
          duration: 10,
          ease: "linear",
          onUpdate: () => setProgress(Math.floor(prog.val)),
        },
        0
      )

      //Exit fade
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete,
      });
  }, [onComplete]);

  const logoPaths = [
    "M564.3,430c0-.3,0-.5-.2-.8s-2.8-1.6-3.3-1.5c-20.1,9.6-35,27.9-40.3,49.6-8.2,33,6.5,69.9,37.2,85.3s2.7,1.4,3.2,1.4,2.9-1.1,3.1-1.3.2-.5.2-.8c-4.5-1.7-8.8-4.2-12.7-6.9-36.8-26-40.1-81.1-7.3-111.8,5.8-5.4,12.6-10,19.9-13.1ZM561.3,442.5c3.2-3,6.8-5.6,10.6-7.9v-.5s-2.8-1.8-2.8-1.8c-11.8,7.7-21.9,19.2-27.6,32.2-14.4,32.4-4.8,72.9,24.5,93.2.5.3,2.9,2,3.2,1.9l2.8-1.6c0-.2,0-.4,0-.5-.2-.2-2.6-1.6-3.1-1.9-37.8-25.7-40.9-82.2-7.5-113ZM578.5,441.8c.4-.3,1.2-.7,1.2-1.2s-1.5-1.8-1.7-1.9-.5-.2-.9-.1c-.6.2-5.2,4.9-6,5.7-27,29.3-26.6,75.9,1,104.7,1.1,1.2,2.6,2.7,3.9,3.7s1,.9,1.6.9,2.5-1.8,2-2.3c-9.1-7.7-16.2-18-20.4-29.2-10.6-28.5-2.9-59.8,19.3-80.1ZM585.9,545c.3-.9,1.9-1.7,1.6-2.7-20.8-24.9-21.9-61.6-3.5-88.2,1.1-1.6,2.4-3.1,3.6-4.7.3-.6-1.6-2.7-2-2.7s-2.3,2.6-2.7,3.1c-20.3,27.3-20.7,65.9.4,92.8.4.5,2,2.8,2.7,2.4ZM594,533.3c.2,0,1.7-3,1.6-3.4-11.3-20.8-11.2-47,0-67.9,0-.6-.4-1.4-.7-2s-.8-1.6-1.4-1.5c-10.2,18.1-12.5,40-6.5,59.9s3.9,10.2,6.4,15c.2,0,.4,0,.5,0ZM602.1,480.2c-.3-.3-.7,1.6-.7,1.7-1.5,8.3-1.5,18.6-.2,27s.4,2.5.8,2.5c.3-.2.2-.5.3-.8,1.8-8,1.8-17.3.7-25.4-.2-1.6-.7-3.3-.9-4.9Z",
    "M557.3,426.1l-.5.6c-37.5,10.9-58.3,48.6-49.6,86.6,5.2,22.7,21.9,42,43.8,50,1.8.7,4,1.1,5.8,1.8s.3.2.5.4c0,.5-3.8,1.7-4.4,1.8-1.5.4-2.2.8-3.6,1.2-16,5.2-37.6,3.1-52.8-3.7-52.2-23.3-59.9-96.2-13.7-129.9,20.3-14.8,47.1-18.3,70.8-10.3,1.3.4,2.5,1,3.7,1.4ZM518.8,424.5c-7,.6-14.2,2.7-20.7,5.5-50.9,22.2-57.3,93.9-11.8,125.2,8,5.5,21.3,11.5,31,12.1.2,0,2,.1,1.5-.4-17.9-5.8-32.8-18.9-41.4-35.5s-11.4-46.6-1.7-67.8c7.5-16.3,21.7-30.2,38.2-37.2,1.3-.5,2.8-.9,4-1.4s.8-.5.8-.7ZM534.9,424.7c-4.4.2-8.9,1.3-13.1,2.6-24.1,7.5-42.7,28.1-47.9,52.7-8.2,38.9,14.2,76.9,53.1,86.1,1.1.3,7.7,1.7,8.3,1.3,0-.1,0-.2-.2-.3-1.4-.9-5.1-1.9-6.9-2.7-39-18-53.9-66.3-34.1-104.2,7.7-14.7,21.8-27.8,37.3-34s1.9-.5,2.7-.9.8-.5.8-.7ZM551,424.7c-4.9.4-10,1.6-14.6,3.2-54.6,18.8-64.7,93.6-17.9,127,8,5.7,21.3,11.5,31.2,12.3s1,0,1.5,0c0-.2-.2-.4-.4-.4-1.6-.8-3.9-1.4-5.7-2.2-33.2-14.9-49.6-51.8-41.2-87,5.4-22.7,21.3-41.2,42.4-50.7,1.6-.7,3.4-1.1,4.7-2.2Z",
    "M564.3,430c-7.4,3-14.1,7.7-19.9,13.1-32.8,30.7-29.5,85.8,7.3,111.8,3.9,2.8,8.2,5.2,12.7,6.9,0,.3,0,.6-.2.8s-2.7,1.4-3.1,1.3c-.6,0-2.6-1.1-3.2-1.4-30.7-15.4-45.4-52.3-37.2-85.3,5.4-21.6,20.3-40,40.3-49.6.5,0,3,1.2,3.3,1.5s.2.5.2.8Z",
    "M561.3,442.5c-33.4,30.7-30.3,87.2,7.5,113,.5.3,2.9,1.7,3.1,1.9s.1.4,0,.5l-2.8,1.6c-.4,0-2.7-1.6-3.2-1.9-29.4-20.3-39-60.8-24.5-93.2,5.8-13,15.8-24.4,27.6-32.2l2.8,1.8v.5c-3.8,2.3-7.3,5-10.6,7.9Z",
    "M578.5,441.8c-22.2,20.3-29.9,51.7-19.3,80.1,4.2,11.2,11.4,21.4,20.4,29.2.6.5-1.8,2.3-2,2.3-.6,0-1.1-.5-1.6-.9-1.2-1-2.7-2.5-3.9-3.7-27.6-28.8-28-75.4-1-104.7.8-.8,5.3-5.5,6-5.7s.6,0,.9.1,1.7,1.7,1.7,1.9c0,.6-.8.9-1.2,1.2Z",
    "M585.9,545c-.7.4-2.2-1.9-2.7-2.4-21.1-27-20.7-65.6-.4-92.8s2.3-3.1,2.7-3.1,2.3,2.1,2,2.7c-1.2,1.6-2.4,3.1-3.6,4.7-18.4,26.6-17.3,63.3,3.5,88.2.3,1-1.3,1.8-1.6,2.7Z",
    "M594,533.3c-.1,0-.3,0-.5,0-2.5-4.8-4.8-9.8-6.4-15-6-19.9-3.7-41.8,6.5-59.9.6-.1,1.1,1,1.4,1.5s.7,1.4.7,2c-11.2,20.9-11.3,47,0,67.9.1.5-1.5,3.3-1.6,3.4Z",
    "M602.1,480.2c.2,1.6.7,3.4.9,4.9,1.1,8.1,1.1,17.4-.7,25.4s0,.6-.3.8c-.3,0-.7-2.1-.8-2.5-1.4-8.3-1.4-18.6.2-27,0-.2.3-2,.7-1.7Z",
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
    >
      {/* LOGO */}
      <svg viewBox="450 400 180 180" className="w-32 md:w-48 mb-8">
        <defs>
          <radialGradient
            id="logoGlowGrad"
            cx="50%" cy="0%" r="70%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="logoShapeMask">
            <g fill="white">
              {logoPaths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
          </mask>
        </defs>

        {/* dim base */}
        <rect
          x="450" y="400" width="180" height="180"
          fill="#2c2c2c"
          mask="url(#logoShapeMask)"
        />
        {/* travelling glow bloom */}
        <rect
          id="logo-glow"
          x="450" y="580" width="180" height="80"
          fill="url(#logoGlowGrad)"
          mask="url(#logoShapeMask)"
          opacity="0"
        />
        {/* solid lit glow */}
        <rect
          id="logo-lit"
          x="450" y="580" width="180" height="0"
          fill="#552DF6"
          mask="url(#logoShapeMask)"
        />
      </svg>

      {/* TEXT */}
      <div className="flex flex-col items-center gap-2">
        {/* TEXT SVG */}
        <svg
          viewBox="0 0 800 160"
          className="w-[85vw] max-w-4xl h-auto"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient
              id="textGlowGrad"
              cx="50%" cy="0%" r="70%"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <mask id="textShapeMask">
              <text
                x="50%" y="50%"
                textAnchor="middle"
                fontSize="80"
                fontWeight="400"
                fill="white"
                letterSpacing="6"
                fontFamily="font-aeonik"
                dominantBaseline="middle"
              >
                Norma Ai
              </text>
            </mask>
          </defs>

          {/* dim base */}
          <rect
            x="0" y="0" width="800" height="160"
            fill="#2c2c2c"
            mask="url(#textShapeMask)"
          />
          {/* travelling glow bloom */}
          <rect
            id="text-glow"
            x="0" y="200" width="800" height="80"
            fill="url(#textGlowGrad)"
            mask="url(#textShapeMask)"
            opacity="0"
          />
          {/* solid lit region */}
          <rect
            id="text-lit"
            x="0" y="160" width="800" height="0"
            fill="#552DF6"
            mask="url(#textShapeMask)"
          />
        </svg>

        {/* Loading Progress */}
        <div className="text-center">
          <div className="text-white/60 text-sm font-mono tracking-widest">
            loading... {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}