"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCycle() {
    const container = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(
        () => {
            // Rotation Animation
            gsap.to(imageRef.current, {
                rotation: 360,
                duration: 120, // Slow constant rotation
                repeat: -1,
                ease: "none",
            });
        },
        { scope: container }
    );

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={container}
            className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
        >
            <div className="relative h-[600px] w-[600px] overflow-hidden rounded-full shadow-2xl md:h-[800px] md:w-[800px]">
                {/* Placeholder for future SVG paths */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* SVG Overlays will go here */}
                </div>

                <Image
                    ref={imageRef}
                    src="/assets/0ccvsd_ines.png"
                    alt="The Generative Design Cycle"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Clickable Overlay Zones (Conceptual) */}
                <div className="absolute inset-0 z-20 flex flex-col">
                    <div
                        className="h-1/3 w-full cursor-pointer hover:bg-white/5"
                        onClick={() => scrollToSection("exploration")}
                        title="Go to Exploration"
                    />
                    <div
                        className="h-1/3 w-full cursor-pointer hover:bg-white/5"
                        onClick={() => scrollToSection("development")}
                        title="Go to Development"
                    />
                    <div
                        className="h-1/3 w-full cursor-pointer hover:bg-white/5"
                        onClick={() => scrollToSection("integration")}
                        title="Go to Integration"
                    />
                </div>
            </div>

            <div className="absolute bottom-10 z-30 text-center">
                <h1 className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">
                    The Methodology Guidebook
                </h1>
                <p className="mt-2 text-xs text-gray-300">Click the cycle to navigate</p>
            </div>
        </section>
    );
}
