"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useRef, useEffect, useState } from "react";

import ContainerLayout from "../layout/containerLayout"


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Footer(){

    let triggerContainer = useRef(null);
    const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true);

    useEffect(()=>{
         const split = SplitText.create(".typeText", {
        type: "chars"
    })

    gsap.from(split.chars, {
        display:"none",
        duration:0.5,
        autoAlpha:0,
        stagger:0.15,
        scrollTrigger:{
            trigger: triggerContainer.current
        },
        onComplete:()=>setIsCursorVisible(false)
    })

    },[])
    
   const toHIW = () =>{
    gsap.to(window, {
        scrollTo:"#HowItWorks",
        ease:"power2.inOut",
        duration:1,
    })
   }

   const toROIC = () =>{
    gsap.to(window, {
        scrollTo:"#ROICalculator",
        ease:"power2.inOut",
        duration:1,
    })
   }


   const toPS = () =>{
    gsap.to(window, {
        scrollTo:"#PlatformScope",
        ease:"power2.inOut",
        duration:1,
    })
   }

   const toFAQ = () =>{
    gsap.to(window, {
        scrollTo:"#FAQ",
        ease:"power2.inOut",
        duration:1,
    })
   }


    const textStyle = "text-[13px] md:text-[16px] md:leading-[20px] md:tracking-[-2%] text-[#FFFFFF]"

    return(
        <footer className="w-full h-[50vh] md:h-auto bg-[url('/assets/img/Footer/bgImage.png')] bg-cover overflow-hidden relative">

            

            <div className="w-full ">

                {/* Content Container */}
                <div className="w-full h-full md:px-[4.17%] pt-[6%] md:pt-[4.17%] md:pb-[2.78%] ">

                    {/* Top Links */}
                    <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center">

                        {/* Left side links */}
                        <ul className="flex items-center gap-10 mb-6 md:mb-0 mx-auto md:mx-0">
                           <li onClick={()=>toHIW()} className={`${textStyle} text-[13px] whitespace-nowrap cursor-pointer`}>
                            <a >
                                How it Works
                            </a>
                            </li> 
                           <li onClick={()=>toPS()} className={`${textStyle} text-[13px] whitespace-nowrap cursor-pointer`}>
                            <a>
                                Platform Scope
                            </a>
                            </li> 
                           <li onClick={()=>toROIC()} className={`${textStyle} text-[13px] whitespace-nowrap cursor-pointer`}>
                            <a>
                                ROI Calculator
                            </a>
                            </li> 
                           <li onClick={()=>toFAQ()} className={`${textStyle} text-[13px] whitespace-nowrap cursor-pointer`}>
                            <a >
                                FAQ
                            </a>
                            </li> 
                        </ul>

                        {/* Right side Social Links */}
                        <ul className="flex items-center gap-10 mb-14 md:mb-0 mx-auto md:mx-0">
                           <li className={`${textStyle}`}>
                            <a href="">
                                Instagram
                            </a>
                            </li> 
                           <li className={`${textStyle}`}>
                            <a href="">
                                LinkedIn
                            </a>
                            </li> 
                           <li className={`${textStyle}`}>
                            <a href="">
                                Twitter
                            </a>
                            </li> 
                           <li className={`${textStyle}`}>
                            <a href="">
                                Facebook
                            </a>
                            </li> 
                        </ul>

                    </div>

                    {/* Middle Content */}

                    <div className="md:w-[70%] mx-auto md:pt-[9.17%] md:pb-[10.45%] mb-10 md:mb-0">

                        <p className="text-center md:text-[30px] md:leading-[34px] md:tracking-[-0.36px] text-[#FFFFFFCC]  ">Got a question?</p>

                        <h2 ref={triggerContainer} className=" text-center m-0 text-[60px] md:text-[clamp(160px,13.8vw,200px)] whitespace-nowrap md:leading-[200px] md:tracking-[-4%] text-[#FFFFFFCC]"><span className="typeText">Ask Norma </span>{isCursorVisible ? <span className="">|</span> : ''}</h2> 

                    </div>



                    {/* Bottom Links */}

                    <div className="w-full flex justify-between flex-wrap md:flex-nowrap items-center">

                        <p className={`${textStyle} mb-4 md:mb-0 mx-auto md:mx-0`}>2026 Norma AI. Built for healthcare. Designed for trust.</p>

                        <div className="flex flex-wrap md:flex-nowrap gap-6 mb-4 md:mb-0 mx-auto md:mx-0" >

                            <div className="flex gap-2 mx-auto md:mx-0">

                                <button className={` ${textStyle} md:w-[24px] aspect-square rounded-full bg-[#FFFFFF4D] flex items-center justify-center`}>
                                    M
                                </button>

                                <p className={`${textStyle}`}><a href="href:Support@normaai.one" target="_blank">Support@normaai.one</a></p>

                            </div>


                            <div className="flex  gap-2 mx-auto md:mx-0">

                                <button className={`${textStyle} md:w-[24px] aspect-square rounded-full bg-[#FFFFFF4D] flex items-center justify-center`}>
                                    T
                                </button>

                                <p className={`${textStyle} whitespace-nowrap`}><a href="tel:+971 9876543210">+91 9876543210</a></p>

                            </div>
                            

                        </div>

                        <p className={`${textStyle} mx-auto md:mx-0`}>Designed and Developed by <a href="https://www.theinternetcompany.one/" target="_blank">TIC Global Services</a></p>

                    </div>

                </div>


            </div>

        </footer>
    )
}