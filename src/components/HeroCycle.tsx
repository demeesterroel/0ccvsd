"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import DiagramOCC from "./diagrams/DiagramOCC";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCycle() {
    const container = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(
        () => {
            // Rotation Animation on Scroll
            gsap.to(imageRef.current, {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
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
            <div className="relative h-[600px] w-[600px] md:h-[800px] md:w-[800px] flex items-center justify-center">
                <div ref={imageRef} className="w-full h-full scale-90 md:scale-100">
                    <DiagramOCC onNodeClick={scrollToSection} />
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
