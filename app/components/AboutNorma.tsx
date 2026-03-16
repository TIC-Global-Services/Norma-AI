"use client";

import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useRef, useEffect } from "react";

import ContainerLayout from "../layout/containerLayout"


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function AboutNorma(){

    let containerRef = useRef(null);
    let secondContainerRef = useRef(null);

    useEffect(()=>{

        let split = SplitText.create(".textStyle", {
            type:"words, chars"
        })

        let secondSplit = SplitText.create(".textSecondStyle", {
            type:"words, chars"
        })

         let tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            pin: false,
            scrub: 2,
            start:"35.5% bottom",
            end: "bottom bottom", 
            markers:false
        }
    });

        tl.from(split.chars, {
        color: "#FFFFFF66",
        stagger: 0.01
    })

    .to(secondSplit.chars, {
        color: "#552DF6",
        stagger: 0.08
    });
    
    
    },[])


    return(
        <section id="PlatformScope" className="w-full bg-black">

            <ContainerLayout>


                <div  ref={containerRef} className="w-full md:pt-[4.55%] md:pb-[18.94%]">

                    {/* LOGO */}
                    <div className="hidden md:block md:w-[10.61%] aspect-square overflow-hidden md:mb-[3.79%] ">

                        <img src="/assets/img/logo/logo.png" alt="logo" className="w-full h-full object-cover scale-200" />

                    </div>

                    <div className="w-full pt-[50%] md:pt-0 px-[5%] md:px-0 md:pl-[5.30%] md:pr-[8.48%]">

                        <h2 className="textStyle text-[25px] md:text-[54px] md:leading-[64px] md:tracking-[-0.5px] text-[#FFFFFF] text-center md:text-left break-words whitespace-normal">
                            Healthcare doesn't need more software. <br />
                            It needs less friction. <br />
                            It needs systems that work seamlessly where people already are. <br />

                        </h2>

                        <h2 ref={secondContainerRef} className="textSecondStyle text-[25px] text-center md:text-left md:text-[50px] md:leading-[64px] md:tracking-[-0.5px] text-[#FFFFFF66] mt-5">That's exactly what NORMA does.</h2>


                    </div>

                </div>

            </ContainerLayout>
            
        </section>
    )
}