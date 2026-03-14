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
          end: "+=800",
        },
      });

      tl.from(mobileRef.current, {
        yPercent: 80,
        ease: "sine.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen md:pt-[6.94%] bg-black"
    >
      {/* TOP TITLE CONTENT */}
      <div className="w-full md:w-[45.14%] text-center mx-auto px-5 md:px-0 mt-20 md:mt-0">
        <h2 className="text-[30px] md:text-[50px] md:leading-[36px] md:tracking-[0%] text-[#FFFFFF] md:pb-[4.62%]">
          Experience Norma
        </h2>
        <p className="text-[16px] md:text-[20px] md:leading-[24px] md:tracking-[0%] text-[#FFFFFF99]">
          Natural conversations with patients, clear confirmations at every
          step, and complete audit trails for full transparency.
        </p>
      </div>

      <div className="md:w-[25.56%] aspect-[368/705] mx-auto overflow-hidden">
        <img
          ref={mobileRef}
          src="/assets/img/ExperienceNorma/mobileImage.png"
          alt="mobile image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}