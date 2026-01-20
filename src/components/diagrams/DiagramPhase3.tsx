"use client";

import { motion } from "framer-motion";
import React from "react";

import ScalableDiagramWrapper from "./ScalableDiagramWrapper";

export default function DiagramPhase3() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <ScalableDiagramWrapper nativeWidth={900} nativeHeight={300}>
            <div className="relative w-[900px] px-4 py-8">
                <div className="relative flex items-center px-[60px] py-[40px]">

                    {/* Connector Background */}
                    <div className="absolute top-1/2 left-0 w-full h-[24px] bg-[#f4f0d9] -translate-y-1/2 z-0"></div>
                    {/* Connector Arrow Tip */}
                    <div className="absolute top-1/2 right-[-20px] -translate-y-1/2 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[40px] border-l-[#f4f0d9] z-0" />

                    {/* Steps */}
                    <StepPhase3
                        shape="hexagon"
                        title="Prototype Deployment"
                        delay={0}
                        width={150}
                        height={160}
                        viewBox="0 0 100 115"
                        path="M50 1 L99 28 L99 87 L50 114 L1 87 L1 28 Z"
                        onClick={() => scrollTo("prototype-deployment")}
                    >
                        <motion.svg viewBox="0 0 50 50" className="w-[48px] h-[48px] fill-none stroke-[#5ca54b] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                            <rect x="5" y="5" width="30" height="35" rx="2" stroke="var(--primary-green)" fill="#fff" opacity="0.9" />
                            <circle cx="20" cy="22" r="6" />
                            <path d="M20 19 L20 25 M17 22 L23 22" /> <rect x="30" y="5" width="6" height="35" rx="1" fill="#fff" /> <path d="M30 40 L33 45 L36 40" fill="none" /> <path d="M8 12 H28 M8 35 H25" strokeDasharray="2,2" />
                        </motion.svg>
                    </StepPhase3>

                    <StepPhase3
                        shape="circle"
                        title="Data Collection"
                        delay={0.2}
                        width={150}
                        height={150}
                        viewBox="0 0 100 100"
                        // Circle path approximation for SVG path if generic, or just use circle element in render
                        path="circle"
                        onClick={() => scrollTo("prototype-deployment")}
                    >
                        <motion.svg viewBox="0 0 50 50" className="w-[48px] h-[48px] fill-none stroke-[#5ca54b] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                            <circle cx="25" cy="12" r="8" fill="#fff" />
                            <path d="M25 4 L25 20 M17 12 H33 M20 7 Q25 10 30 7 M20 17 Q25 14 30 17" /> <path d="M25 20 L25 26 M15 26 L35 26 M15 26 L15 30 M35 26 L35 30" /> <rect x="8" y="30" width="14" height="10" rx="1" fill="#fff" />
                            <rect x="28" y="30" width="14" height="10" rx="1" fill="#fff" />
                            <line x1="15" y1="40" x2="15" y2="42" />
                            <line x1="11" y1="42" x2="19" y2="42" /> <line x1="35" y1="40" x2="35" y2="42" />
                            <line x1="31" y1="42" x2="39" y2="42" />
                        </motion.svg>
                    </StepPhase3>

                    <StepPhase3
                        shape="diamond"
                        title="Value Friction Detected"
                        subtitle={<>Intent &ne;<br />Perception</>}
                        delay={0.4}
                        width={160}
                        height={160}
                        viewBox="0 0 100 100"
                        path="M50,1 L99,50 50,99 1,50 Z" /* Corrected polygon points to path format */
                        isQuestion
                    >
                        {/* Diamond usually doesn't have an icon inside in the original HTML, it has a '?' on top, but the component structure allows children. The original has '?' absolute outside. */}
                    </StepPhase3>

                    <StepPhase3
                        shape="circle"
                        title="Guideline Synthesis"
                        subtitle="Friction Rules"
                        delay={0.6}
                        width={150}
                        height={150}
                        viewBox="0 0 100 100"
                        path="circle"
                    >
                        <motion.svg viewBox="0 0 50 50" className="w-[48px] h-[48px] fill-none stroke-[#5ca54b] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                            <path d="M15 35 L25 10 L35 35 Z" fill="#fff" opacity="0.9" />
                            <path d="M2 15 Q8 10 5 20 T10 25 T18 20" opacity="0.7" />
                            <path d="M2 25 Q6 20 8 30 T16 28" opacity="0.7" />
                            <path d="M32 18 L48 18 M45 15 L48 18 L45 21" /> <path d="M34 22 L48 22 M45 19 L48 22 L45 25" /> <path d="M36 26 L48 26 M45 23 L48 26 L45 29" /> <path d="M33 30 L48 30 M45 27 L48 30 L45 33" />
                        </motion.svg>
                    </StepPhase3>

                    <StepPhase3
                        shape="hexagon"
                        title="Design Guidelines"
                        delay={0.8}
                        width={150}
                        height={160}
                        viewBox="0 0 100 115"
                        path="M50 1 L99 28 L99 87 L50 114 L1 87 L1 28 Z"
                        onClick={() => scrollTo("design-guidelines")}
                    >
                        <motion.svg viewBox="0 0 50 50" className="w-[48px] h-[48px] fill-none stroke-[#5ca54b] stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                            <path d="M15 5 H30 L40 15 V40 H15 V5 Z" fill="#fff" />
                            <path d="M30 5 V15 H40" /> <line x1="20" y1="20" x2="35" y2="20" />
                            <line x1="20" y1="26" x2="35" y2="26" />
                            <line x1="20" y1="32" x2="30" y2="32" />
                        </motion.svg>
                    </StepPhase3>

                </div>
            </div>
        </ScalableDiagramWrapper>
    );
}

function StepPhase3({
    shape,
    title,
    subtitle,
    delay,
    children,
    width,
    height,
    viewBox,
    path,
    isQuestion,
    onClick,
}: {
    shape: "hexagon" | "circle" | "diamond";
    title: string;
    subtitle?: React.ReactNode;
    delay: number;
    children?: React.ReactNode;
    width: number;
    height: number;
    viewBox: string;
    path: string;
    isQuestion?: boolean;
    onClick?: () => void;
}) {
    return (
        <motion.div
            className={`relative z-10 flex flex-col items-center justify-center text-center mx-[15px] shrink-0 ${shape === 'diamond' ? 'mx-[5px]' : ''} ${onClick ? 'cursor-pointer' : ''}`}
            style={{ width, height }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
        >
            {/* Background Shape */}
            <svg className="absolute top-0 left-0 w-full h-full fill-[#f4f0d9] stroke-[#5ca54b] stroke-[1.5] -z-10" viewBox={viewBox} preserveAspectRatio="none">
                {path === "circle" ? (
                    <circle cx="50" cy="50" r="49" />
                ) : (
                    <path d={path} />
                )}
            </svg>

            {/* Icon Wrapper */}
            <div className={`absolute h-[50px] w-[60px] flex justify-center items-end ${shape === 'diamond' ? '-top-[50px]' : '-top-[35px]'}`}>
                {isQuestion ? (
                    <div className="text-[48px] font-[900] text-[#5ca54b] leading-none absolute -top-[10px]">?</div>
                ) : children}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center w-full h-full p-[10px] box-border text-[#4a8a3c]">
                <h3 className={`m-0 leading-[1.2] font-extrabold capitalize ${shape === 'diamond' ? 'text-[16px] mt-0' : 'text-[17px] mt-[5px]'}`}>
                    {title}
                </h3>
                {subtitle && (
                    <p className="m-[4px] mt-0 text-[13px] text-[#7a9c68] leading-[1.2]">
                        {subtitle}
                    </p>
                )}
            </div>

        </motion.div>
    );
}
