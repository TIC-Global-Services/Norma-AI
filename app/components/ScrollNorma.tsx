"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll"

export default function ScrollNorma() {

  const height = window.innerHeight;
  const translateValue = height < 800 ? 'xl:-translate-y-[30%]' : 'xl:-translate-y-[10%]';



  return (
    <section id="ROICalculator" className="w-full bg-black  overflow-clip ">

        <div className={`w-full -translate-y-[20%] scale-70`}>

            <MacbookScroll
        src='/assets/img/ScrollNorma/Norma_ROI.png'
        title={
          <h2 className="md:text-[40px]  md:leading-[44px] md:tracking-[1%] text-[#FFFFFF] mx-auto text-center">
            Calculate Your Norma ROI
          </h2>
        }
        showGradient={false}
      />

      </div>
      
    </section>
  )
}