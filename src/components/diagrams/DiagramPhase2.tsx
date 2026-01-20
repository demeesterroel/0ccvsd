"use client";

import { motion } from "framer-motion";
import React from "react";

import ScalableDiagramWrapper from "./ScalableDiagramWrapper";

export default function DiagramPhase2() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <ScalableDiagramWrapper nativeWidth={1100} nativeHeight={400}>
            <div className="relative w-[1100px] pb-4 pt-10 px-4">
                <div className="relative flex flex-col items-start pb-[60px]">

                    {/* Feedback Loop Layer (Background) */}
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        viewBox="0 0 1100 350"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <marker id="arrowhead-up" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto">
                                <path d="M5,0 L10,10 L0,10 Z" fill="#f6f0d5" />
                            </marker>
                        </defs>
                        {/* The loop path from the HTML */}
                        {/* HTML was: <path d="M850,210 V280 H250 V210" ... /> */}
                        {/* Adjusted slightly for scaling if needed, but keeping absolute coordinates for now based on min-width */}
                        <path
                            d="M850,180 V250 H250 V180"
                            fill="none"
                            stroke="#f6f0d5"
                            strokeWidth="20"
                        />
                        <path d="M250,185 L230,210 L270,210 Z" fill="#f6f0d5" />
                    </svg>

                    {/* Flow Row */}
                    <div className="flex items-center relative z-10 mb-5">

                        {/* Phase I Input Arrow */}
                        <motion.div
                            className="flex flex-col w-[180px] -mr-[15px] z-[1]"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-[#f6f0d5] h-[140px] relative flex items-center pl-[15px] mb-[10px]" style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}>
                                <div className="w-[80%] pr-[10px]">
                                    <h3 className="text-left text-[15px] uppercase font-extrabold text-[#5d2a2c] m-0 leading-[1.2]">Phase I:<br />Perspective Value Hierarchy</h3>
                                </div>
                            </div>
                            <div className="pl-[5px] text-[13px] text-[#5d2a2c]">
                                Stakeholder<br />Values & Norms<br />Ethical Requirements
                            </div>
                        </motion.div>

                        {/* Nodes and Connectors */}
                        <StepNode title="Analysis" delay={0.2} onClick={() => scrollTo("analysis-synthesis")}>
                            <svg className="w-[48px] h-[48px] stroke-[#5d2a2c] stroke-2 fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </StepNode>

                        <Connector delay={0.3} />

                        <StepNode title="Synthesis" delay={0.4} onClick={() => scrollTo("analysis-synthesis")}>
                            <svg className="w-[48px] h-[48px] stroke-[#5d2a2c] stroke-2 fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                            </svg>
                        </StepNode>

                        <Connector delay={0.5} />

                        <StepNode title="Simulation" delay={0.6} onClick={() => scrollTo("simulation")}>
                            <svg className="w-[48px] h-[48px] stroke-[#5d2a2c] stroke-2 fill-none" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                                <polyline points="7 10 10 7 14 12 17 8" />
                                <circle cx="16" cy="13" r="1.5" />
                            </svg>
                        </StepNode>

                        <Connector delay={0.7} />

                        <StepNode title="Evaluation" delay={0.8} onClick={() => scrollTo("simulation")}>
                            <svg className="w-[48px] h-[48px] stroke-[#5d2a2c] stroke-2 fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        </StepNode>

                        <Connector delay={0.9} />

                        <StepNode title="Decision" delay={1.0}>
                            <svg className="w-[48px] h-[48px] stroke-[#5d2a2c] stroke-2 fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v19m-4-15h8l1 2.5-1 2.5h-8l-1-2.5 1-2.5zm-3 7h8l1 2.5-1 2.5H5l-1-2.5 1-2.5z" />
                            </svg>
                        </StepNode>

                        {/* Output Arrow */}
                        <motion.div
                            className="bg-[#f6f0d5] h-[140px] w-[180px] flex items-center justify-center pl-[30px] pr-[10px] -ml-[10px] z-[1]"
                            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-left text-[14px] font-extrabold text-[#5d2a2c] m-0 leading-[1.2]">Validated<br />Prototype<br />ready for<br />Integration</h3>
                        </motion.div>

                    </div>

                    {/* Feedback Text */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 text-center pt-[10px] w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[16px] mb-[4px] font-extrabold text-[#5d2a2c]">Iterative Refinement</h3>
                        <p className="text-[14px] text-[#5d2a2c] m-0">Incorporating insights for<br />process improvement</p>
                    </motion.div>

                </div>
            </div>
        </ScalableDiagramWrapper>
    );
}

function StepNode({ title, children, delay, onClick }: { title: string, children: React.ReactNode, delay: number, onClick?: () => void }) {
    return (
        <motion.div
            className={`w-[140px] h-[140px] bg-[#fbe0e2] rounded-full flex flex-col items-center justify-center gap-[10px] shadow-sm z-[3] relative shrink-0 ${onClick ? 'cursor-pointer' : ''}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "#fad0d3" }}
            onClick={onClick}
        >
            {children}
            <h3 className="text-[16px] font-extrabold text-[#5d2a2c] m-0 text-center leading-[1.2]">{title}</h3>
        </motion.div>
    );
}

function Connector({ delay }: { delay: number }) {
    return (
        <motion.svg
            className="w-[40px] h-[60px] -mx-[5px] z-[1] shrink-0"
            viewBox="0 0 40 60"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay, duration: 0.3 }}
            viewport={{ once: true }}
        >
            <path d="M0,15 L40,30 L0,45 Z" fill="#f6f0d5" />
        </motion.svg>
    );
}
