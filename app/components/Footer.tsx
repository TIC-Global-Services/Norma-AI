"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollToPlugin);

export default function Footer() {
  const triggerContainer = useRef<HTMLHeadingElement | null>(null);
  const typeTextRef = useRef<HTMLSpanElement | null>(null);
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    if (!typeTextRef.current || !triggerContainer.current) return;

    const split = SplitText.create(typeTextRef.current, {
      type: "chars",
    });

    const animation = gsap.from(split.chars, {
      display: "none",
      duration: 0.5,
      autoAlpha: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: triggerContainer.current,
      },
      onComplete: () => setIsCursorVisible(false),
    });

    return () => {
      animation.kill();
      split.revert();
    };
  }, []);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      scrollTo: id,
      ease: "power2.inOut",
      duration: 1,
    });
  };

  const textStyle =
    "text-[12px] leading-[16px] tracking-[-2%] md:text-[16px] md:leading-[20px] md:tracking-[-2%] text-[#FFFFFF]";

  const navButtonStyle = `${textStyle} whitespace-nowrap cursor-pointer bg-transparent border-0 p-0 m-0 no-underline decoration-transparent outline-none`;
  const linkStyle = `no-underline decoration-transparent hover:no-underline focus:no-underline active:no-underline`;

  return (
    <footer className="relative w-full min-h-[50vh] md:h-auto bg-[url('/assets/img/Footer/bgImage.png')] bg-cover overflow-hidden">
      <div className="w-full absolute top-0 left-0 -translate-y-[40%] md:-translate-y-[71.43%] xl:-translate-y-[60%] pointer-events-none z-[999]">
        <div
          className="w-full aspect-1440/140 bg-[#000000]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="w-full">
        <div className="w-full h-full md:px-[4.17%] pt-[60px] md:pt-[4.17%] md:pb-[2.78%]">
          {/* Top Links */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center ml-5 md:ml-0">
            {/* Left side links */}
            <ul className="flex items-center gap-[10px] md:gap-10 mb-3 md:mb-0 mr-auto">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("#HowItWorks")}
                  className={navButtonStyle}
                >
                  How it Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("#PlatformScope")}
                  className={navButtonStyle}
                >
                  Platform Scope
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("#ROICalculator")}
                  className={navButtonStyle}
                >
                  ROI Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("#FAQ")}
                  className={navButtonStyle}
                >
                  FAQ
                </button>
              </li>
            </ul>

            {/* Right side Social Links */}
            <ul className="flex items-center gap-[10px] md:gap-10 mb-14 md:mb-0 mr-auto md:mr-0 md:mx-auto">
              <li className={textStyle}>
                <a href="" className={linkStyle}>
                  Instagram
                </a>
              </li>
              <li className={textStyle}>
                <a href="" className={linkStyle}>
                  LinkedIn
                </a>
              </li>
              <li className={textStyle}>
                <a href="" className={linkStyle}>
                  Twitter
                </a>
              </li>
              <li className={textStyle}>
                <a href="" className={linkStyle}>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Content */}
          <div className="md:w-[70%] mx-auto md:pt-[9.17%] md:pb-[10.45%] py-[150px] mb-0 md:mb-0">
            <p className="text-center md:text-[30px] md:leading-[34px] md:tracking-[-0.36px] text-[#FFFFFFCC]">
              Got a question?
            </p>

            <h2
              ref={triggerContainer}
              className="text-center m-0 text-[60px] md:text-[clamp(160px,13.8vw,200px)] whitespace-nowrap md:leading-[200px] md:tracking-[-4%] text-[#FFFFFFCC] select-none no-underline decoration-transparent [text-decoration:none] [text-rendering:geometricPrecision] [-webkit-font-smoothing:antialiased] [backface-visibility:hidden] [transform:translateZ(0)]"
            >
              <span ref={typeTextRef} className="inline-block no-underline decoration-transparent [text-decoration:none]">
                Ask Norma
              </span>
              {isCursorVisible ? (
                <span className="inline-block no-underline decoration-transparent [text-decoration:none]">
                  |
                </span>
              ) : (
                ""
              )}
            </h2>
          </div>

          {/* Bottom Links */}
          <div className="w-full flex justify-between flex-wrap md:flex-nowrap items-center mb-20 md:mb-0">
            <p className={`${textStyle} mb-4 md:mb-0 mx-auto md:mx-0 order-2 md:order-1 tracking-[0%]`}>
              2026 Norma AI. Built for healthcare. Designed for trust.
            </p>

            <div className="flex flex-wrap md:flex-nowrap gap-6 mb-4 md:mb-0 mx-auto md:mx-0 order-1 md:order-2">
              <div className="flex items-center gap-2 mx-auto md:mx-0">
                <button
                  type="button"
                  className={`${textStyle} tracking-[0%] w-[24px] aspect-square rounded-full bg-[#FFFFFF4D] flex items-center justify-center`}
                >
                  M
                </button>

                <p className={`${textStyle} tracking-[0%]`}>
                  <a
                    href="mailto:Support@normaai.one"
                    target="_blank"
                    rel="noreferrer"
                    className={linkStyle}
                  >
                    Support@normaai.one
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-2 mx-auto md:mx-0">
                <button
                  type="button"
                  className={`${textStyle} tracking-[0%] w-[24px] aspect-square rounded-full bg-[#FFFFFF4D] flex items-center justify-center`}
                >
                  T
                </button>

                <p className={`${textStyle} tracking-[0%] whitespace-nowrap`}>
                  <a href="tel:+919876543210" className={linkStyle}>
                    +91 9876543210
                  </a>
                </p>
              </div>
            </div>

            <p className={`${textStyle} tracking-[0%] mx-auto md:mx-0 order-3 md:order-2`}>
              Designed and Developed by{" "}
              <a
                href="https://www.theinternetcompany.one/"
                target="_blank"
                rel="noreferrer"
                className={linkStyle}
              >
                TIC Global Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}