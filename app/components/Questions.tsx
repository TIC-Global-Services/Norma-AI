"use client";

import QandA from "./Reusable/QandA";
import { useState } from "react";

export default function Questions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const data = [
        { 
            question:"What is Norma?",
            answer:"Norma is an AI-powered patient coordinator that works on WhatsApp and voice. She handles appointment bookings, reminders, cancellations, and patient queries 24/7, without any human intervention. Think of her as a receptionist who never sleeps, never forgets, and handles 200+ patient interactions a day."
        },
        {
            question:"Do patients need to download an app?",
            answer:"No. Norma works entirely on WhatsApp, which patients already have. Zero friction, zero onboarding for patients."
        },
        {
            question:"Will Norma replace my front desk staff?",
            answer:"No. Norma handles the repetitive, high-volume tasks so your staff can focus on what actually requires a human. Most clinics see their admin workload drop by over an hour per day."
        },
        {
            question:"Is patient data safe?",
            answer:"Yes. Norma uses AES-256 encryption and a PHI Guard that anonymizes all patient data before it reaches the AI layer. Patient information is never exposed to the LLM. We are designed with HIPAA, NABH, and DHA compliance principles in mind."
        },
        {
            question:"What happens if a patient has an emergency?",
            answer:"Norma has a deterministic emergency gate, if a patient mentions anything that signals a medical emergency, she immediately bypasses the AI and directs them to emergency services while alerting the clinic. This is hardcoded, not AI-dependent."
        },
        {
            question:"Does Norma connect to your existing HMS/EMR?",
            answer:"Yes. Norma integrates directly with your hospital management system for real-time appointment availability, patient records, and billing. She never books a slot that doesn't exist and never gives outdated information."
        },
        {
            question:"How long does it take to go live?",
            answer:"Most clinics are live within 48 hours of onboarding. No IT team required. No complex setup."
        },
        {
            question:"What languages does Norma speak?",
            answer:"Norma supports multiple languages including English, Hindi, and Arabic, with more on the way. She auto-detects the patient's language and responds accordingly."
        },
        {
            question:"Is Norma just a WhatsApp bot?",
            answer:"No. A bot responds to keywords. Norma understands intent, remembers every patient across sessions, handles multi-turn conversations, and escalates intelligently when something is beyond her scope. The difference: a bot answers. Norma understands."
        },
        {
            question:"What if Norma makes a mistake?",
            answer:"Every response is grounded in real data from your HMS through an Evidence Ledger, she doesn't guess. If she doesn't have the information, she says so. For any action with serious consequences, she always asks for explicit confirmation first."
        },
        {
            question:"Can doctors use Norma too?",
            answer:"Yes. Norma has a separate doctor-facing layer with 23 specialized tools, from encounter notes to calendar sync to billing. Doctors can query their schedule, manage appointments, and handle admin tasks via WhatsApp in seconds."
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

                <h2 className="w-[40.53%] mr-auto md:mr-0 md:mx-auto md:mx-0 text-[20px] leading-[24px] tracking-[-0.36px] md:text-[36px] md:leading-[39.6px] md:tracking-[-0.36px] text-[#FFFFFFE5] lg:w-[21.9%] md:w-[20.9848%]">Frequently Asked Questions</h2>

                <div className="w-full md:w-[62.66%] pt-[40px] md:pt-0">
                    {
                        data.map((item, index) => (
                            <div key={index} className="w-full">
                                <QandA 
                                    question={item.question} 
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* Overlay blur shaders */}
            <div className=" w-full absolute bottom-0 left-0 translate-y-[50%] md:translate-y-[34.43%] z-[999]">
                <div
                className="w-full aspect-768/140 md:aspect-1440/140 bg-[#000000]"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 40%, black 70%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 40%, black 70%, transparent 100%)",
                }}
                />
            </div>

        </section>
    )
}