"use client";


import { useState } from "react";
import { motion } from "framer-motion";

type QandAProps = {
    question:string,
    answer:string,
}

export default function QandA({question, answer}:QandAProps){

    const [isClicked, setIsClicked] = useState<boolean>(false);

    return(
        <div className="w-full">

            {/* Question */}
                < div onClick={()=>{setIsClicked(!isClicked)}} className="w-[53.33%] md:w-auto md:w-fit px-[20.5px] md:px-[2.244%] py-[20px] md:py-[1.5%] mt-[15.5px] md:mt-[1.25%] mb-[15.5px] md:mb-[1.25%] bg-[#FFFFFF1A] rounded-[14px] text-[14px] leading-[16px]  md:text-[16px md:leading-[20px] tracking-[0%] text-[#FFFFFF] cursor-pointer">
                <p>{question}</p>
                </div>

            {/* Answer */}
            <motion.p

            initial={{ display: isClicked ? "" : "none"}}
            animate={{ display: isClicked ? "" : "none"}}
            transition={{duration:0.5, delay:0.1, ease:"easeIn"}}

            onClick={()=>{setIsClicked(false)}} className={`w-full ml-auto md:max-w-[67.08%] bg-[#FFFFFF4D] px-[20.5px] md:px-[2.93%] py-[20px] md:py-[1.5%] md:mt-[1.75%] md:mb-[1.75%] bg-[#FFFFFF4D] rounded-[14px] text-[14px] leading-[16px] md:text-[16px] leading-[20px] md:tracking-[-2%] text-[#000000] cursor-pointer`}>{answer}</motion.p>

        </div>
    )
}