"use client";

import { useEffect, useState } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function ScrollNorma() {
  const [translateValue, setTranslateValue] = useState("xl:-translate-y-[10%]");

  useEffect(() => {
    const updateTranslate = () => {
      const height = window.innerHeight;
      setTranslateValue(
        height < 800 ? "xl:-translate-y-[30%]" : "xl:-translate-y-[10%]"
      );
    };

    updateTranslate();
    window.addEventListener("resize", updateTranslate);

    return () => window.removeEventListener("resize", updateTranslate);
  }, []);

  return (
    <section id="ROICalculator" className="w-full bg-black overflow-clip">
      <div
        className={`w-full md:-translate-y-[30%] md:pt-[25%] ${translateValue} 2xl:-translate-y-0 2xl:pt-0`}
      >
        <MacbookScroll
          src="/assets/img/ScrollNorma/Norma_ROI.png"
          title={
            <span className="md:text-[40px] md:leading-[44px] md:tracking-[1%] text-[#FFFFFF] mx-auto text-center">
              Calculate Your Norma ROI
            </span>
          }
          showGradient={false}
        />
      </div>
    </section>
  );
}