"use client";

import { motion } from "framer-motion";
import React from "react";

interface DiagramOCCProps {
    onNodeClick?: (sectionId: string) => void;
}

export default function DiagramOCC({ onNodeClick }: DiagramOCCProps) {
    const handleScroll = (id: string) => {
        if (onNodeClick) {
            onNodeClick(id);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="relative w-full max-w-[800px] aspect-[1/0.9] mx-auto select-none">
            {/* SVG Background Layer for Arrows */}
            <svg
                className="absolute top-0 left-0 w-full h-full z-10 overflow-visible pointer-events-none"
                viewBox="0 0 800 720"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="6"
                        markerHeight="6"
                        refX="5"
                        refY="3"
                        orient="auto"
                    >
                        <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#F3ECD0" />
                    </marker>
                </defs>

                <motion.path
                    d="M 530 140 Q 720 180 680 400"
                    fill="none"
                    stroke="#F3ECD0"
                    strokeWidth="35"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.polygon
                    points="650,380 710,380 680,440"
                    fill="#F3ECD0"
                    transform="rotate(-15 680 420)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                />

                <motion.path
                    d="M 580 600 Q 400 700 220 600"
                    fill="none"
                    stroke="#F3ECD0"
                    strokeWidth="35"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.polygon
                    points="190,580 250,580 220,640"
                    fill="#F3ECD0"
                    transform="rotate(70 220 620)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                />

                <motion.path
                    d="M 120 400 Q 80 180 270 140"
                    fill="none"
                    stroke="#F3ECD0"
                    strokeWidth="35"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1.0 }}
                />
                <motion.polygon
                    points="240,160 300,160 270,100"
                    fill="#F3ECD0"
                    transform="rotate(-65 270 120)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                />
            </svg>

            {/* Nodes Layer */}
            {/* Exploration Node */}
            <CycleNode
                className="top-0 left-1/2 -translate-x-1/2 bg-[#F0F6FA] border-[#CCDDE9]"
                onClick={() => handleScroll("exploration")}
                delay={0}
            >
                <div className="w-[clamp(40px,8vw,60px)] h-[clamp(40px,8vw,60px)] mb-2">
                    <svg viewBox="0 0 50 50" className="w-full h-full stroke-[#4A1E1E] fill-none stroke-2">
                        <path d="M15,15 H10 V25 A5,5 0 0,0 20,25 V35 H30 A5,5 0 0,0 30,25 H35 V15 H25 A5,5 0 0,0 15,15 Z" strokeLinejoin="round" />
                        <path d="M20,10 V15 M35,20 H40" strokeLinecap="round" />
                        <circle cx="32" cy="32" r="8" className="fill-white" />
                        <line x1="38" y1="38" x2="45" y2="45" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
                <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] font-extrabold text-[#4A1E1E] m-0 leading-tight">Exploration</h2>
                <p className="text-[clamp(0.75rem,1.8vw,1rem)] text-[#6D4C41] m-0 font-normal">The Value Domain</p>
            </CycleNode>

            {/* Development Node */}
            <CycleNode
                className="bottom-[5%] right-[5%] bg-[#FEF0F0] border-[#F4C0C0]"
                onClick={() => handleScroll("development")}
                delay={0.2}
            >
                <div className="w-[clamp(40px,8vw,60px)] h-[clamp(40px,8vw,60px)] mb-2">
                    <svg viewBox="0 0 60 60" className="w-full h-full stroke-[#4A1E1E] fill-none stroke-2">
                        <g transform="translate(15,15)">
                            <circle cx="10" cy="10" r="8" />
                            <circle cx="10" cy="10" r="3" />
                            <path d="M10,0 V4 M10,16 V20 M0,10 H4 M16,10 H20" />
                        </g>
                        <g transform="translate(30,30)">
                            <circle cx="10" cy="10" r="9" />
                            <circle cx="10" cy="10" r="3" />
                            <path d="M10,-1 V3 M10,17 V21 M-1,10 H3 M17,10 H21" />
                        </g>
                        <g transform="translate(35,10)">
                            <circle cx="8" cy="8" r="6" />
                            <path d="M8,0 V2 M8,14 V16 M0,8 H2 M14,8 H16" />
                        </g>
                    </svg>
                </div>
                <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] font-extrabold text-[#4A1E1E] m-0 leading-tight">Development</h2>
                <p className="text-[clamp(0.75rem,1.8vw,1rem)] text-[#6D4C41] m-0 font-normal">Technical Domain</p>
            </CycleNode>

            {/* Integration Node */}
            <CycleNode
                className="bottom-[5%] left-[5%] bg-[#E8F5E9] border-[#B9DDBD]"
                onClick={() => handleScroll("integration")}
                delay={0.4}
            >
                <div className="w-[clamp(40px,8vw,60px)] h-[clamp(40px,8vw,60px)] mb-2">
                    <svg viewBox="0 0 50 50" className="w-full h-full stroke-[#4A1E1E] fill-none stroke-2">
                        <path d="M10,10 H25 V25 H10 Z" />
                        <path d="M25,10 H40 V25 H25 Z" />
                        <path d="M10,25 H25 V40 H10 Z" />
                        <path d="M25,25 H40 V40 H25 Z" />
                        <circle cx="25" cy="17.5" r="3" className="fill-white" />
                        <circle cx="17.5" cy="25" r="3" className="fill-white" />
                        <circle cx="32.5" cy="25" r="3" className="fill-white" />
                        <circle cx="25" cy="32.5" r="3" className="fill-white" />
                    </svg>
                </div>
                <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] font-extrabold text-[#4A1E1E] m-0 leading-tight">Integration</h2>
                <p className="text-[clamp(0.75rem,1.8vw,1rem)] text-[#6D4C41] m-0 font-normal">
                    The Evaluation/<br />Context Design
                </p>
            </CycleNode>

            {/* Labels */}
            <div className="absolute top-[35%] left-[2%] text-right z-20 text-[#4A1E1E] text-[clamp(0.8rem,1.8vw,1.1rem)] leading-snug max-w-[220px]">
                Prospective Value Hierarchy<br />& Design Requirements
            </div>
            <div className="absolute top-[35%] right-[2%] text-left z-20 text-[#4A1E1E] text-[clamp(0.8rem,1.8vw,1.1rem)] leading-snug max-w-[220px]">
                Working Prototype &<br />Documented<br />Design Decisions
            </div>
            <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 text-center z-20 text-[#4A1E1E] text-[clamp(0.8rem,1.8vw,1.1rem)] leading-snug max-w-[220px]">
                Value Assessment<br />Results & Design Gaps
            </div>
        </div>
    );
}

function CycleNode({
    children,
    className,
    onClick,
    delay,
}: {
    children: React.ReactNode;
    className: string;
    onClick: () => void;
    delay: number;
}) {
    return (
        <motion.div
            className={`absolute z-20 w-[28%] aspect-square rounded-full flex flex-col justify-center items-center text-center border-[4px] border-solid p-4 shadow-lg cursor-pointer ${className}`}
            onClick={onClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    );
}
