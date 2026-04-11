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

      tl.from(
        mobileRef.current, {
        yPercent: 80,
        ease: "sine.out"
      }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen pt-[16%] md:pt-[6.94%] bg-black overflow-hidden"
    >
      {/* TOP TITLE CONTENT */}
      <div className="w-full md:w-[45.14%] text-center mx-auto px-10 md:px-0 mt-24 md:mt-0 pb-[60px] md:pb-0">
        <h2 className="text-[24px] md:text-[50px] leading-[36px] tracking-[0%] text-[#FFFFFF] pb-[12px] md:pb-[4.62%]">
          Experience Norma
        </h2>
        <p className="text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] tracking-[0%] text-[#FFFFFF99]">
          Natural conversations with patients, clear confirmations at every
          step, and complete audit trails for full transparency.
        </p>
      </div>

      <div className="relative w-[55.47%] md:w-[24.56%] md:mt-[2%] aspect-[368/705] mx-auto overflow-hidden">
        <img
          ref={mobileRef}
          src="/assets/img/ExperienceNorma/mobileImage.png"
          alt="mobile image"
          className="w-full h-full object-cover"
        />
        {/* <div
          className="w-full  absolute bottom-0 left-0 h-[80%] translate-y-[60%]  md:aspect-1440/240  blur-[8px] bg-black border-b-1 border-black"
        /> */}

      </div>
      {/* <div
        className="w-full absolute bottom-0 left-0  md:aspect-1440/240 translate-y-[80%] blur-[20px] bg-black"
      />*/}

      {/* Overlay blur shaders */}
      <div className=" w-full absolute bottom-0 left-0 h-[60%] translate-y-[62%] md:translate-y-[90%]">
        <div
          className="w-full aspect-768/140 md:aspect-1440/140 bg-[#000000]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 40%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 40%, black 70%, transparent 100%)",
          }}
        />
      </div>



    </section>
  );
}