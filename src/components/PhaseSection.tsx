"use client";

import { useRef, ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Step {
    title: string;
    content: ReactNode;
}

interface PhaseSectionProps {
    id: string;
    title: string;
    mainImageSrc: string;
    steps: Step[];
    color?: string;
    visualization?: ReactNode;
}

export default function PhaseSection({ id, title, mainImageSrc, steps, color = "#2D2D2D", visualization }: PhaseSectionProps) {
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);

    // Unified layout: Removed GSAP pinning for sticky image
    // as requested for single one-page scroll flow.

    return (
        <section id={id} ref={container} className="relative flex flex-col w-full items-center py-24">
            {/* 1. Section Title */}
            <div className="mb-12 px-6 md:px-0 text-center w-full max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight" style={{ color }}>{title}</h2>
            </div>

            {/* 2. Visualization (Diagram) - Centered & Large */}
            <div className="relative w-full overflow-hidden mb-24 flex justify-center">
                <div className="relative w-full max-w-[1200px] flex items-center justify-center p-4 md:p-10">
                    {visualization ? (
                        visualization
                    ) : (
                        <div className="relative h-[60vh] w-full">
                            <Image
                                src={mainImageSrc}
                                alt={title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Steps (Narrative Content) - Linear Flow below Diagram */}
            <div className="flex flex-col w-full max-w-3xl mx-auto px-6 md:px-0">
                {steps.map((step, index) => {
                    // Create a valid ID from the title for deep linking
                    const stepId = step.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                    return (
                        <div key={index} id={stepId} className="mb-32 min-h-[20vh] transition-opacity hover:opacity-100">
                            <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm font-bold text-gray-500 shrink-0">
                                    {index + 1}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                            </div>
                            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">
                                {step.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
