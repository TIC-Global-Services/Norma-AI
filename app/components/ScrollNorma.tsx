import { MacbookScroll } from "@/components/ui/macbook-scroll"

export default function ScrollNorma() {
  return (
    <section className="w-full bg-black overflow-clip">

        <div className="w-full lg:-translate-y-[30%] lg:pt-[32%]">

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