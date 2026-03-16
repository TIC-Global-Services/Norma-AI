"use client";

import { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

import ContainerLayout from "../layout/containerLayout"


gsap.registerPlugin(ScrollToPlugin);

export default function Navbar(){

    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

    const textStyle = "text-[24px] md:text-[16px] md:leading-[18px] md:tracking-[-0.16px] text-[#FFFFFF]"


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


    return(
        <nav className="w-full absolute top-0 left-0 z-30 ">

            <ContainerLayout>

                <button onClick={()=>setIsMenuClicked(true)} className={`md:hidden w-14 aspect-square ml-auto cursor-pointer mt-6 mr-6 overflow-hidden rounded-full border-[2px] border-white relative flex items-center justify-center ${isMenuClicked ? 'hidden' : ''}`}>
                        <img src="/assets/img/logo/logo.png" alt="logo" className="w-full scale-470 object-fill" />
                </button>

                <div className={`w-full flex flex-col items-start md:flex-row md:items-center justify-between md:py-[2.27%]  ${isMenuClicked ? '' : 'hidden md:flex'}`}>

                    {/* Mobile Menu Bar */}
                    <button onClick={()=>setIsMenuClicked(false)} className="md:hidden w-14 aspect-square ml-auto mt-6 mr-6 cursor-pointer overflow-hidden rounded-full border-[2px] border-white relative flex items-center justify-center">
                        {/* <img src="/assets/img/logo/logo.png" alt="logo" className="w-full scale-470 object-fill" /> */}
                        <span className="text-[40px] text-white">X</span>
                    </button>
                    

                    {/* Left side of Navbar */}
                    <ul className="flex flex-col md:flex-row items-start flex-nowrap gap-4 md:gap-8 md:items-center mb-4 md:mb-0 mt-20 md:mt-0 ml-10 md:ml-0">
                        <li onClick={()=>toHIW()} className={`${textStyle} cursor-pointer`}>
                            <a >How it Works</a>
                        </li>
                        <li onClick={()=>toPS()} className={`${textStyle} cursor-pointer`}>
                            <a >Platform Scope</a>
                        </li>
                        <li onClick={()=>toROIC()} className={`${textStyle} cursor-pointer`}>
                            <a >
                                ROI Calculator
                            </a>
                        </li>
                        <li onClick={()=>toFAQ()} className={`${textStyle} cursor-pointer`}>
                            <a >
                                FAQ
                            </a>
                        </li>
                    </ul>

                    {/* Right side of Navbar */}
                    <div className=" flex flex-col md:flex-row items-start  md:items-center gap-4 md:gap-8 mb-20 md:mb-0 ml-10 md:ml-0">

                        <a className={`${textStyle}`} href="">Login</a>

                        <button className={`${textStyle} px-4 py-2 md:px-8 md:py-4 bg-[#FFFFFF33] rounded-full cursor-pointer hover:bg-[#FFFFFF]/40 hover:duration-500 active:bg-[#FFFFFF33]`}>Start a Conversation</button>

                    </div>

                </div>

            </ContainerLayout>

        </nav>
    )
}