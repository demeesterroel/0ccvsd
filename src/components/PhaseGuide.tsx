"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface PhaseGuideProps {
    phaseTitle: string;
    imageSrc: string;
    children: React.ReactNode;
    color?: string; // Hex color for accents
}

export default function PhaseGuide({ phaseTitle, imageSrc, children, color = "#2D2D2D" }: PhaseGuideProps) {
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Pin the image container while scrolling through content
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                pin: imageContainer.current,
                scrub: true,
            });

            // Fade in effect
            gsap.from(imageContainer.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                }
            })

        },
        { scope: container }
    );

    return (
        <section ref={container} className="relative grid min-h-screen w-full grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-24">
            {/* Left Column: Narrative Content */}
            <div className="flex flex-col justify-center space-y-12 py-24">
                <div className="sticky top-24 z-10 block md:hidden">
                    <h2 className="text-xl font-bold uppercase tracking-widest" style={{ color }}>{phaseTitle}</h2>
                </div>

                {children}
            </div>

            {/* Right Column: Sticky Image */}
            <div ref={imageContainer} className="relative hidden h-[calc(100vh-6rem)] flex-col items-center justify-center md:flex">
                <h2 className="absolute top-0 text-4xl font-bold uppercase tracking-widest opacity-20" style={{ color }}>{phaseTitle}</h2>
                <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl bg-white p-4 shadow-xl">
                    <Image
                        src={imageSrc}
                        alt={phaseTitle}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
