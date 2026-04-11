

import QandA from "./Reusable/QandA";

export default function Questions(){


    const data = [
        { 
            question:"Can you do insurance checks on the calls?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question:"Can you collect debt & handle payment plans?",
            answer:"Automated reminders, real-time balance tracking, and escalation workflows streamline recovery, while configurable repayment options allow installments, custom schedules, or partial payments. Recovery stays systematic, and repayment stays organized."
        },
        {
            question:"Can you work with my existing phone line & number?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question:"How cost-effective is it compared to hiring staff?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question:"Is the AI available 24/7?",
            answer:"yeLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    return(
        <section id="FAQ" className="relative w-full px-[5%] md:px-[4.1667%] pt-[10%] md:pt-[4.1667%] bg-black ">

            {/* Overlay blur shaders */}
            <div className=" w-full absolute top-0 left-0  -translate-y-[50%] md:-translate-y-[71.43%]">
                <div
                className="w-full aspect-768/140 md:aspect-1440/140 bg-[#000000]"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 40%, black 70%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 40%, black 70%, transparent 100%)",
                }}
                />
            </div>


            {/* LOGO */}
            <div className="w-[25%] md:w-[10.606%] aspect-square overflow-hidden -translate-x-[30%] md:translate-x-[20%] translate-y-[14.29%] ">

                <img src="/assets/img/logo/logo.png" alt="logo" className="w-full h-full object-cover scale-200" />

            </div>


            {/* Content Container */}
            <div className="w-full flex items-start flex-wrap md:flex-nowrap md:gap-[10.31%] md:ml-[0.95%] pb-[10%] md:mt-[2%] md:pb-[13.79%]">

                <h2 className="w-[40.53%] mr-auto md:mr-0 md:mx-auto md:mx-0 text-[20px] leading-[24px] tracking-[-0.36px] md:text-[36px] md:leading-[39.6px] md:tracking-[-0.36px] text-[#FFFFFFE5] lg:w-[21.9%] md:w-[20.9848%]">Frequently Asked  Questions</h2>


                <div className="w-full md:w-[62.66%] pt-[40px] md:pt-0">

                    {
                        data.map((data, id)=>(
                            <div key={id} className="w-full">
                                <QandA question={data.question} answer={data.answer} />
                            </div>
                        ))
                    }

                </div>

            </div>

            

        </section>
    )
}