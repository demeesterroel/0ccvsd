"use client";

import { motion } from "framer-motion";
import React from "react";

import ScalableDiagramWrapper from "./ScalableDiagramWrapper";

export default function DiagramPhase1() {
    return (
        <ScalableDiagramWrapper nativeWidth={1200} nativeHeight={320}>
            <div className="relative w-[1200px] pb-4 pt-10 px-4">
                <div className="relative flex items-center gap-4 py-8 px-10">
                    {/* Timeline Arrow Background */}
                    <div className="absolute top-[55%] left-0 w-full h-6 bg-[#F9F4D7] -translate-y-1/2 z-0">
                        {/* Arrow Head */}
                        <div
                            className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[40px] border-t-transparent border-b-[40px] border-b-transparent border-l-[40px] border-l-[#F9F4D7]"
                        />
                    </div>

                    {/* Nodes */}
                    <Phase1Node
                        shape="hexagon"
                        title="Context of Care Practice"
                        subtitle="Operational Constraints & Workflow"
                        delay={0}
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                        </svg>
                    </Phase1Node>

                    <Phase1Node
                        shape="circle"
                        title="Stakeholder Map"
                        subtitle="Actor Characterization"
                        delay={0.2}
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <circle cx="12" cy="12" r="3" />
                            <circle cx="12" cy="5" r="2" />
                            <circle cx="5" cy="18" r="2" />
                            <circle cx="19" cy="18" r="2" />
                            <line x1="12" y1="9" x2="12" y2="7" />
                            <line x1="9.5" y1="13.5" x2="6.5" y2="16.5" />
                            <line x1="14.5" y1="13.5" x2="17.5" y2="16.5" />
                        </svg>
                    </Phase1Node>

                    <Phase1Node
                        shape="circle"
                        title="Value Analysis"
                        subtitle="Semi-Structured Interviews"
                        delay={0.4}
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path d="M12 3v13" />
                            <path d="M5 10h14" />
                            <path d="M5 10l-2 5h4z" />
                            <path d="M19 10l-2 5h4z" />
                            <circle cx="14" cy="18" r="4" strokeWidth="2" fill="white" fillOpacity="0.1" />
                            <line x1="17" y1="21" x2="20" y2="24" strokeWidth="2.5" />
                        </svg>
                    </Phase1Node>

                    <Phase1Node
                        shape="diamond"
                        title="Semantic Gap"
                        subtitle={<>Nurse Def &ne;<br />Engineer Def</>}
                        delay={0.6}
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full" style={{ strokeWidth: 3 }}>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                    </Phase1Node>

                    <Phase1Node
                        shape="circle"
                        title="Prospective Value Hierarchy"
                        subtitle={<>Translation:<br />Tier 1 &xrarr; Tier 2</>}
                        delay={0.8}
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path d="M12 3L2 20h20L12 3z" />
                            <line x1="9" y1="9" x2="15" y2="9" />
                            <line x1="6" y1="14.5" x2="18" y2="14.5" />
                        </svg>
                    </Phase1Node>

                    <Phase1Node
                        shape="hexagon"
                        title="Design Requirements"
                        subtitle={<>Technical<br />Parameters<br />(Tier 3)</>}
                        delay={1.0}
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="8" x2="11" y2="8" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                            <line x1="8" y1="16" x2="16" y2="16" />
                            <circle cx="16" cy="8" r="2" />
                        </svg>
                    </Phase1Node>
                </div>
            </div>
        </ScalableDiagramWrapper>
    );
}

function Phase1Node({
    shape,
    title,
    subtitle,
    children,
    delay,
    onClick,
}: {
    shape: "hexagon" | "circle" | "diamond";
    title: string;
    subtitle: React.ReactNode;
    children: React.ReactNode;
    delay: number;
    onClick?: () => void;
}) {
    const getClipPath = () => {
        switch (shape) {
            case "hexagon":
                return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
            case "circle":
                return "circle(50% at 50% 50%)"; // Standard circle CSS
            case "diamond":
                return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
            default:
                return "none";
        }
    };

    const isDiamond = shape === "diamond";

    return (
        <motion.div
            className={`relative z-10 w-[190px] h-[210px] flex flex-col items-center justify-center text-center shrink-0 ${onClick ? 'cursor-pointer' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
        >
            <div className="flex z-20 w-[50px] h-[50px] mb-[15px] items-center justify-center">
                <div className="w-[48px] h-[48px] stroke-[#572A2A] stroke-2 fill-none stroke-linecap-round stroke-linejoin-round">
                    {children}
                </div>
            </div>

            {/* Background Shape */}
            <div
                className={`absolute top-[30px] left-0 w-full h-[180px] bg-[#CFE2F3] -z-10 transition-colors hover:bg-[#B6D4EE] ${
                    // Circle specific style to ensure it looks like a circle not an oval if clipped on rectangle
                    shape === 'circle' ? 'rounded-full' : ''
                    }`}
                style={{
                    clipPath: shape !== 'circle' ? getClipPath() : undefined,
                    transform: isDiamond ? "scale(0.95)" : "none",
                }}
            />

            <div className={`px-[20px] -mt-[10px] flex flex-col justify-center h-full text-[#572A2A] ${isDiamond ? 'px-[35px]' : ''}`}>
                <h3 className="text-[16px] font-extrabold m-0 mb-[5px] leading-[1.2]">{title}</h3>
                <div className="text-[13px] font-normal m-0 opacity-90 leading-[1.3]">{subtitle}</div>
            </div>
        </motion.div>
    );
}
