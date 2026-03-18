"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { motion } from "framer-motion";

import ContainerLayout from "../layout/containerLayout";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuClicked === true) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuClicked]);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const textStyle =
    "text-[24px] md:text-[16px] md:leading-[18px] md:tracking-[-0.16px] text-[#FFFFFF]";

  const toHIW = () => {
    gsap.to(window, {
      scrollTo: "#HowItWorks",
      ease: "power2.inOut",
      duration: 1,
    });
  };

  const toROIC = () => {
    gsap.to(window, {
      scrollTo: "#ROICalculator",
      ease: "power2.inOut",
      duration: 1,
    });
  };

  const toPS = () => {
    gsap.to(window, {
      scrollTo: "#PlatformScope",
      ease: "power2.inOut",
      duration: 1,
    });
  };

  const toFAQ = () => {
    gsap.to(window, {
      scrollTo: "#FAQ",
      ease: "power2.inOut",
      duration: 1,
    });
  };

  return (
    <nav
      className={`w-full ${
        isMenuClicked ? "h-full bg-black/80 blur-[1px]" : ""
      } absolute top-0 left-0 z-[9999] `}
    >
      <ContainerLayout>
        <button
          onClick={() => setIsMenuClicked(true)}
          className={`md:hidden w-full  ml-auto cursor-pointer mt-6 mr-6 overflow-hidden rounded-full  relative flex gap-4 items-center justify-end ${
            isMenuClicked ? "hidden" : ""
          }`}
        >
          <a
            href=""
            className="text-white text-[14px] leading-[18px] tracking-[-0.16px]"
          >
            Login
          </a>
          <svg
            className="w-[5%] aspect-square"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.75C0 3.55109 0.0790176 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3H15.25C15.4489 3 15.6397 3.07902 15.7803 3.21967C15.921 3.36032 16 3.55109 16 3.75C16 3.94891 15.921 4.13968 15.7803 4.28033C15.6397 4.42098 15.4489 4.5 15.25 4.5H0.75C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790176 4.13968 0 3.94891 0 3.75ZM0 8C0 7.80109 0.0790176 7.61032 0.21967 7.46967C0.360322 7.32902 0.551088 7.25 0.75 7.25H15.25C15.4489 7.25 15.6397 7.32902 15.7803 7.46967C15.921 7.61032 16 7.80109 16 8C16 8.19891 15.921 8.38968 15.7803 8.53033C15.6397 8.67098 15.4489 8.75 15.25 8.75H0.75C0.551088 8.75 0.360322 8.67098 0.21967 8.53033C0.0790176 8.38968 0 8.19891 0 8ZM0.75 11.5C0.551088 11.5 0.360322 11.579 0.21967 11.7197C0.0790176 11.8603 0 12.0511 0 12.25C0 12.4489 0.0790176 12.6397 0.21967 12.7803C0.360322 12.921 0.551088 13 0.75 13H15.25C15.4489 13 15.6397 12.921 15.7803 12.7803C15.921 12.6397 16 12.4489 16 12.25C16 12.0511 15.921 11.8603 15.7803 11.7197C15.6397 11.579 15.4489 11.5 15.25 11.5H0.75Z"
              fill="white"
            />
          </svg>
        </button>

        <motion.div
          initial={{
            clipPath: isDesktop
              ? "inset(0 0 0 0)"
              : isMenuClicked
              ? "inset(0 0 0 0)"
              : "inset(0 0 100% 0 )",
          }}
          animate={{
            clipPath: isDesktop
              ? "inset(0 0 0 0)"
              : isMenuClicked
              ? "inset(0 0 0 0)"
              : "inset(0 0 100% 0 )",
          }}
          transition={{
            duration: isDesktop ? 0 : 1,
            delay: isDesktop ? 0 : 0.2,
            ease: "easeInOut",
          }}
          className={`w-full ${
            isMenuClicked ? "" : ""
          }  flex flex-col items-start md:flex-row md:items-center justify-between md:py-[2.27%]  ${
            isMenuClicked ? "" : "hidden md:flex"
          }`}
        >
          {/* Mobile Menu Bar */}

          <button
            onClick={() => setIsMenuClicked(false)}
            className={`md:hidden w-full  ml-auto cursor-pointer mt-6 mr-6 overflow-hidden rounded-full  relative flex gap-4 items-center justify-end ${
              isMenuClicked ? "" : "hidden"
            }`}
          >
            <p className="text-xl text-white">X</p>
          </button>

          {/* Left side of Navbar */}
          <ul className="flex  flex-col md:flex-row items-start flex-nowrap gap-10 md:gap-8 md:items-center mb-10 md:mb-0 mt-20 md:mt-0 ml-10 md:ml-0">
            <li
              onClick={() => {
                setIsMenuClicked(false);
                toHIW();
              }}
              className={`${textStyle} cursor-pointer`}
            >
              <a>How it Works</a>
            </li>
            <li
              onClick={() => {
                setIsMenuClicked(false);
                toPS();
              }}
              className={`${textStyle} cursor-pointer`}
            >
              <a>Platform Scope</a>
            </li>
            <li
              onClick={() => {
                setIsMenuClicked(false);
                toROIC();
              }}
              className={`${textStyle} cursor-pointer`}
            >
              <a>ROI Calculator</a>
            </li>
            <li
              onClick={() => {
                setIsMenuClicked(false);
                toFAQ();
              }}
              className={`${textStyle} cursor-pointer`}
            >
              <a>FAQ</a>
            </li>
          </ul>

          {/* Right side of Navbar */}
          <div className=" flex flex-col md:flex-row items-start  md:items-center gap-4 md:gap-8 mb-20 md:mb-0 ml-10 md:ml-0">
            <a className={`${textStyle}`} href="">
              Login
            </a>

            <button
              className={`${textStyle} hidden md:block px-4 py-2 md:px-8 md:py-4 bg-[#FFFFFF33] rounded-full cursor-pointer hover:bg-[#FFFFFF]/40 hover:duration-500 active:bg-[#FFFFFF33]`}
            >
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </ContainerLayout>
    </nav>
  );
}