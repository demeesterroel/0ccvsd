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
}

export default function PhaseSection({ id, title, mainImageSrc, steps, color = "#2D2D2D" }: PhaseSectionProps) {
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                pin: imageContainer.current,
                scrub: true,
            });
        },
        { scope: container }
    );

    return (
        <section id={id} ref={container} className="relative grid w-full grid-cols-1 md:grid-cols-2">
            {/* Scrollable Steps (Left) */}
            <div className="flex flex-col border-r border-gray-200 bg-background pt-24 pb-48">
                <div className="mb-24 px-10 md:px-20">
                    <h2 className="text-4xl font-bold uppercase tracking-tight" style={{ color }}>{title}</h2>
                </div>

                {steps.map((step, index) => (
                    <div key={index} className="mb-48 min-h-[50vh] px-10 md:px-20 opacity-80 transition-opacity hover:opacity-100">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs font-bold text-gray-500">
                                {index + 1}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        </div>
                        <div className="prose prose-sm prose-slate max-w-none">
                            {step.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sticky Image (Right) */}
            <div ref={imageContainer} className="relative hidden h-screen items-center justify-center bg-white md:flex">
                <div className="relative h-[80%] w-[80%]">
                    <Image
                        src={mainImageSrc}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
