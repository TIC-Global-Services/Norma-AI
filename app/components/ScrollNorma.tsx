"use client";

import { useEffect, useState } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

// --- Screen dimension → translateY lookup ---
const translateByHeight: Record<number, string> = {
  600: "xl:-translate-y-[20%] md:-translate-y-[25%] md:scale-70",
  768: "xl:-translate-y-[17%]",
  800: "xl:-translate-y-[10%]",
  900: "xl:-translate-y-[10%]",
  1080: "xl:-translate-y-[-4%] xl:scale-140",
  1200: "xl:-translate-y-[-10%] xl:scale-140",
  1440: "xl:-translate-y-[5%]",
  1600: "xl:-translate-y-[-30%] xl:scale-150",
  2160: "xl:-translate-y-[0%] xl:scale-150",
};

const translateByWidth: Record<number, string> = {
  1280: "xl:-translate-y-[35%]",
  1366: "xl:-translate-y-[30%]",
  1440: "xl:-translate-y-[20%]",
  1536: "xl:-translate-y-[18%]",
  1600: "xl:-translate-y-[15%]",
  1920: "xl:-translate-y-[10%]",
  2256: "xl:-translate-y-[5%]",
  2560: "xl:-translate-y-[3%]",
  2880: "xl:-translate-y-[2%]",
  3840: "xl:-translate-y-[0%]",
};

// Helper: finds the closest key in a lookup object
function getClosestTranslate(
  lookup: Record<number, string>,
  value: number
): string {
  const keys = Object.keys(lookup).map(Number);
  const closest = keys.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  );
  return lookup[closest];
}

export default function ScrollNorma() {
  const [translateValue, setTranslateValue] = useState("xl:-translate-y-[10%]");

  useEffect(() => {
    function updateTranslate() {
      const height = window.innerHeight;
      const width = window.innerWidth;

      // Pick one depending on what you want to use
      const value = getClosestTranslate(translateByHeight, height);
      // const value = getClosestTranslate(translateByWidth, width);

      setTranslateValue(value);
    }

    updateTranslate(); // run once on mount
    window.addEventListener("resize", updateTranslate);

    return () => {
      window.removeEventListener("resize", updateTranslate);
    };
  }, []);

  return (
    <section id="ROICalculator" className="w-full bg-black overflow-clip">
      <div className={`w-full ${translateValue} scale-150 md:scale-80 `}>
        <MacbookScroll
          src="/assets/img/ScrollNorma/Norma_ROI.png"
          title={
            <span className="text-[20px] leading-[24px] tracking-[1%] md:text-[40px] md:leading-[44px] md:tracking-[1%] text-[#FFFFFF] mx-auto text-center">
              Calculate Your Norma ROI
            </span>
          }
          showGradient={false}
        />
      </div>
    </section>
  );
}