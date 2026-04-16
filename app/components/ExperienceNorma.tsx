"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceNorma() {
  const containerRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=1400",
        },
      });

      tl.from(
        mobileRef.current, {
        yPercent: 70,
        ease: "sine.out"
      }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[100dvh] pt-[4%] md:pt-[6.94%] bg-black overflow-hidden"
    >
      {/* TOP TITLE CONTENT */}
      <div className="w-full md:w-[45.14%] text-center mx-auto px-10 md:px-0 mt-15 md:mt-0">
        <h2 className="text-[24px] md:text-[50px] leading-[36px] tracking-[0%] text-[#FFFFFF] pb-[12px] md:pb-[4.62%]">
          Experience Norma
        </h2>
        <p className="text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] tracking-[0%] text-[#FFFFFF99]">
          Natural conversations with patients, clear confirmations at every
          step, and complete audit trails for full transparency.
        </p>
      </div>

      <div className="relative w-full mx-auto overflow-hidden h-[75vh] md:h-[100vh]">
        <img
          ref={mobileRef}
          src="/assets/img/ExperienceNorma/normaMobile.png"
          alt="mobile image"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay blur shaders */}
      <div className="w-full absolute bottom-0 left-0 h-[45%] translate-y-[40%]">
        <div
          className="w-full h-full bg-[#000000]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, transparent 10%, black 25%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 10%, black 25%, black 60%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}