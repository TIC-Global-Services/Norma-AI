"use client";

import { motion, AnimatePresence } from "framer-motion";

type QandAProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export default function QandA({ question, answer, isOpen, onToggle }: QandAProps) {
    return(
        <div className="w-full">
            {/* Question */}
            <div 
                onClick={onToggle} 
                className="w-[53.33%] md:w-auto md:w-fit px-[20.5px] md:px-[2.244%] py-[20px] md:py-[1.5%] mt-[15.5px] md:mt-[1.25%] mb-[15.5px] md:mb-[1.25%] bg-[#FFFFFF1A] rounded-[14px] text-[14px] leading-[16px] md:text-[16px] md:leading-[20px] tracking-[0%] text-[#FFFFFF] cursor-pointer"
            >
                <p>{question}</p>
            </div>

            {/* Answer with AnimatePresence for smooth exit animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={onToggle}
                        className="w-full ml-auto md:max-w-[67.08%] bg-[#FFFFFF4D] px-[20.5px] md:px-[2.93%] py-[20px] md:py-[1.5%] md:mt-[1.75%] md:mb-[1.75%] rounded-[14px] text-[14px] leading-[16px] md:text-[16px] md:leading-[20px] md:tracking-[-2%] text-[#000000] cursor-pointer"
                    >
                        {answer}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}