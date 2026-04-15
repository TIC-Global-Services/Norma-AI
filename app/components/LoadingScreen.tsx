"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoCubeRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const ring3Ref = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(logoCubeRef.current, {
        rotateX: -20,
        rotateY: 45,
        scale: 0.5,
        opacity: 0,
      });

      // Animate logo cube entrance
      gsap.to(logoCubeRef.current, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Continuous rotation animation
      gsap.to(logoCubeRef.current, {
        rotateY: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      // Ring animations
      const rings = [ring1Ref.current, ring2Ref.current, ring3Ref.current];
      rings.forEach((ring, i) => {
        gsap.set(ring, { opacity: 0, scale: 0.8 });
        gsap.to(ring, {
          opacity: 0.6 - i * 0.15,
          scale: 1,
          duration: 0.8,
          delay: 0.5 + i * 0.2,
          ease: "power2.out",
        });

        // Continuous rotation for rings
        gsap.to(ring, {
          rotateZ: i % 2 === 0 ? 360 : -360,
          duration: 10 + i * 2,
          repeat: -1,
          ease: "none",
        });
      });

      // Particle animation
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, i) => {
          gsap.set(particle, {
            opacity: 0,
            scale: 0,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            z: Math.random() * 200 - 100,
          });

          gsap.to(particle, {
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
            duration: 1,
            delay: i * 0.05,
            ease: "power2.out",
          });

          // Float animation
          gsap.to(particle, {
            y: "-=30",
            x: "+=20",
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1,
          });
        });
      }

      // Progress bar animation
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 2.5,
          ease: "power2.inOut",
          onUpdate: function () {
            const currentProgress = Math.round(this.progress() * 100);
            setProgress(currentProgress);
          },
          onComplete: () => {
            // Exit animation
            gsap.to(containerRef.current, {
              opacity: 0,
              scale: 1.1,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                if (onComplete) onComplete();
              },
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-white/40 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate3d(${(Math.random() - 0.5) * 300}px, ${
          (Math.random() - 0.5) * 300
        }px, ${(Math.random() - 0.5) * 200}px)`,
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(147, 51, 234, 0.3) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Grid floor effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "rotateX(60deg) translateY(-50%)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Main 3D container */}
      <div
        className="relative w-40 h-40 mb-12"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Orbiting rings */}
        <div
          ref={ring1Ref}
          className="absolute inset-0 border border-white/20 rounded-full"
          style={{
            transform: "rotateX(70deg) scale(2)",
            boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)",
          }}
        />
        <div
          ref={ring2Ref}
          className="absolute inset-0 border border-white/15 rounded-full"
          style={{
            transform: "rotateY(70deg) scale(1.6)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
        />
        <div
          ref={ring3Ref}
          className="absolute inset-0 border border-white/10 rounded-full"
          style={{
            transform: "rotateX(-70deg) scale(2.4)",
            boxShadow: "0 0 40px rgba(236, 72, 153, 0.2)",
          }}
        />

        {/* 3D Logo Cube */}
<div
  ref={logoCubeRef}
  className="absolute inset-0 flex items-center justify-center"
  style={{
    transformStyle: "preserve-3d",
    transform: "rotateX(-20deg) rotateY(45deg)",
  }}
>
  {/* Front */}
  <div
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      transform: "translateZ(32px)",
      background: "rgba(10, 10, 10, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(6px)",
      boxShadow: "0 0 30px rgba(85, 45, 246, 0.6)",
    }}
  >
    <img
      src="/assets/img/logo/Normalogo.svg"
      alt="Norma Logo"
      className="w-40 h-40 object-contain"
      style={{
        filter: "drop-shadow(0 0 10px #552df6)",
      }}
    />
  </div>

  {/* Back */}
  <div
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      transform: "translateZ(-32px) rotateY(180deg)",
      background: "rgba(10, 10, 10, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    }}
  >
    <img
      src="/assets/img/logo/Normalogo.svg"
      className="w-40 h-40 opacity-40"
    />
  </div>

  {/* Right */}
  <div
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      transform: "rotateY(90deg) translateZ(32px)",
      background: "rgba(10, 10, 10, 0.4)",
    }}
  >
    <img
      src="/assets/img/logo/Normalogo.svg"
      className="w-40 h-40 opacity-60"
    />
  </div>

  {/* Left */}
  <div
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      transform: "rotateY(-90deg) translateZ(32px)",
      background: "rgba(10, 10, 10, 0.4)",
    }}
  >
    <img
      src="/assets/img/logo/Normalogo.svg"
      className="w-40 h-40 opacity-60"
    />
  </div>

  {/* Top */}
  <div
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      transform: "rotateX(90deg) translateZ(32px)",
      background: "rgba(10, 10, 10, 0.3)",
    }}
  >
    <img
      src="/assets/img/logo/Normalogo.svg"
      className="w-40 h-40 opacity-40"
    />
  </div>

  {/* Bottom */}
  <div
    className="absolute w-16 h-16 flex items-center justify-center"
    style={{
      transform: "rotateX(-90deg) translateZ(32px)",
      background: "rgba(10, 10, 10, 0.3)",
    }}
  >
    <img
      src="/assets/img/logo/Normalogo.svg"
      className="w-40 h-40 opacity-30"
    />
  </div>

  {/* Inner glow */}
  <div
    className="absolute w-8 h-8 rounded-full"
    style={{
      transform: "translateZ(0)",
      background:
        "radial-gradient(circle, rgba(85, 45, 246, 0.9) 0%, transparent 70%)",
      boxShadow: "0 0 40px rgba(85, 45, 246, 0.8)",
    }}
  />
</div>

        {/* Floating particles */}
        <div
          ref={particlesRef}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {particles}
        </div>
      </div>

      {/* Brand text */}
      <div className="relative mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
          NORMA
        </h1>
        <p className="text-white/50 text-sm mt-2 tracking-[0.3em] uppercase">
          Loading Experience
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(147, 51, 234, 1), rgba(59, 130, 246, 1), rgba(236, 72, 153, 1))",
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.8)",
            width: "0%",
          }}
        />
      </div>

      {/* Progress percentage */}
      <span
        ref={progressTextRef}
        className="mt-4 text-white/60 text-sm font-mono"
      >
        {progress}%
      </span>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/20" />
    </div>
  );
}
