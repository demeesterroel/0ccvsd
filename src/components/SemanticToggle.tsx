"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { thesisContent } from "@/data/thesisContent";

export default function SemanticToggle() {
    const [sliderValue, setSliderValue] = useState(50);
    const data = thesisContent.phase1;

    // Calculate opacity based on slider
    // 0 = Engineer (Left) -> 100 = Nurse (Right)
    const isBridgeVisible = sliderValue > 40 && sliderValue < 60;

    return (
        <section className="relative flex h-screen w-full flex-col bg-void text-clinical">
            <div className="absolute top-10 w-full text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent-c">
                    PHASE I: {data.concept.toUpperCase()}
                </h2>
                <p className="mt-2 text-xs text-gray-500">{data.definition}</p>
            </div>

            <div className="flex h-full w-full">
                {/* ENGINEER VIEW (LEFT) */}
                <div
                    className="flex flex-1 flex-col items-center justify-center border-r border-gray-800 bg-[#0a0a0a] p-10 font-mono text-accent-c"
                    style={{ opacity: sliderValue < 50 ? 1 : 1 - (sliderValue - 50) / 50 }}
                >
                    <h3 className="mb-8 text-xl tracking-widest">ENGINEER_VIEW</h3>
                    <div className="rounded-lg border border-accent-c/30 bg-black/50 p-6 shadow-[0_0_30px_rgba(51,153,255,0.1)]">
                        <pre className="text-sm">
                            {`{
  "event": "interaction",
  "status": "ACK",
  "timestamp": 17092301,
  "signal": "LED_BLINK"
}`}
                        </pre>
                    </div>
                    <p className="mt-6 text-center text-xs text-gray-500 max-w-xs">
                        {data.dataPoints[0].engineerDefinition}
                    </p>
                </div>

                {/* NURSE VIEW (RIGHT) */}
                <div
                    className="flex flex-1 flex-col items-center justify-center bg-[#0f0f0f] p-10 font-sans text-accent-b"
                    style={{ opacity: sliderValue > 50 ? 1 : 1 - (50 - sliderValue) / 50 }}
                >
                    <h3 className="mb-8 text-xl tracking-widest">NURSE VIEW</h3>
                    <div className="relative rounded-2xl rounded-bl-none border border-accent-b/30 bg-accent-b/10 p-6 shadow-[0_0_30px_rgba(0,204,102,0.1)]">
                        <p className="text-lg italic">&quot;I feel heard.&quot;</p>
                    </div>
                    <p className="mt-6 text-center text-xs text-gray-500 max-w-xs">
                        {data.dataPoints[0].nurseDefinition}
                    </p>
                </div>
            </div>

            {/* OVERLAY: PVH Artifact (The Bridge) */}
            <div
                className={`absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isBridgeVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="border border-white/20 bg-black p-8 text-center shadow-2xl">
                    <h3 className="mb-4 text-xl font-bold text-white">{data.artifact.title}</h3>
                    <div className="flex flex-col gap-2">
                        <div className="rounded bg-accent-b px-4 py-2 font-bold text-black">{data.artifact.topLayer}</div>
                        <div className="flex justify-center"><ArrowRightLeft className="rotate-90 text-gray-500" /></div>
                        {data.artifact.translationChain.map((item, i) => (
                            <div key={i} className="rounded border border-gray-700 bg-gray-900 px-3 py-1 text-sm text-gray-300">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SLIDER CONTROL */}
            <div className="absolute bottom-20 left-1/2 w-96 -translate-x-1/2">
                <label className="mb-2 block text-center text-xs font-bold tracking-widest text-gray-500">
                    TRANSLATION LAYER
                </label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="h-2 w-full appearance-none rounded-lg bg-gray-800 outline-none accent-white"
                />
                <div className="mt-2 flex justify-between text-[10px] text-gray-600">
                    <span>RAW DATA</span>
                    <span>HUMAN EXPERIENCE</span>
                </div>
            </div>
        </section>
    );
}
