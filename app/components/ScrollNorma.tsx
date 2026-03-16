"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll"

export default function ScrollNorma() {

  const height = window.innerHeight;

  const translateValue = height < 800 ? 'xl:-translate-y-[20%]' : 'xl:-translate-y-[10%]';



  return (
    <section id="ROICalculator" className="w-full bg-black overflow-clip">

        <div className={`w-full md:-translate-y-[30%] md:pt-[25%] ${translateValue} 2xl:-translate-y-0 2xl:pt-0 `}>

            <MacbookScroll
        src='/assets/img/ScrollNorma/Norma_ROI.png'
        title={
          <h2 className="md:text-[40px] md:leading-[44px] md:tracking-[1%] text-[#FFFFFF] mx-auto text-center">
            Calculate Your Norma ROI
          </h2>
        }
        showGradient={false}
      />

      </div>
      
    </section>
  )
}