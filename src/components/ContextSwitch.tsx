"use client";

import { thesisContent } from "@/data/thesisContent";
import { useState } from "react";
import { Play } from "lucide-react";

export default function ContextSwitch() {
    const data = thesisContent.phase3;
    const [context, setContext] = useState<"hospital" | "careHome">("hospital");

    const currentLogic = data.guidelines[context];
    const isHospital = context === "hospital";

    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center bg-void p-10 text-clinical">
            <div className="mb-10 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent-c">
                    PHASE III: {data.concept.toUpperCase()}
                </h2>
                <p className="mt-2 text-xs text-gray-500">{data.definition}</p>
            </div>

            <div className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
                {/* Video Player Placeholder / Visualization */}
                <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-black">
                    <div className={`absolute inset-0 bg-gradient-to-br ${isHospital ? 'from-accent-a/20' : 'from-accent-b/20'} to-transparent transition-colors duration-500`}></div>

                    <div className="z-10 flex flex-col items-center gap-4">
                        <div className="rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                            <Play className="fill-white text-white" />
                        </div>
                        <p className="text-xs tracking-widest text-gray-400">
                            SCENARIO: {isHospital ? "HOSPITAL CORRIDOR" : "CARE HOME HALLWAY"}
                        </p>
                    </div>

                    <div className="absolute bottom-4 left-4 font-mono text-xs">
                        <p className={`${isHospital ? "text-accent-a" : "text-gray-600"}`}>VELOCITY: {isHospital ? "0.85 m/s" : "0.0 m/s"}</p>
                        <p className={`${!isHospital ? "text-accent-b" : "text-gray-600"}`}>OBSTACLE_DIST: 1.2m</p>
                    </div>
                </div>

                {/* Logic Controller */}
                <div className="flex flex-col justify-center">
                    <h3 className="mb-6 text-xl text-gray-400">ACTIVE LOGIC KERNEL</h3>

                    <div className={`mb-8 border-l-4 p-6 transition-all duration-300 ${isHospital ? 'border-accent-a bg-accent-a/5' : 'border-accent-b bg-accent-b/5'}`}>
                        <div className="mb-4">
                            <span className="text-xs font-bold tracking-widest text-gray-500">CONSTRAINT</span>
                            <p className={`text-2xl font-bold ${isHospital ? 'text-accent-a' : 'text-accent-b'}`}>
                                {currentLogic.constraint}
                            </p>
                        </div>
                        <div className="mb-4">
                            <span className="text-xs font-bold tracking-widest text-gray-500">BEHAVIOR</span>
                            <p className="text-xl text-white">
                                {currentLogic.behavior}
                            </p>
                        </div>
                        <div className="space-y-2">
                            {currentLogic.specs.map((spec, i) => (
                                <div key={i} className="flex items-center gap-2 font-mono text-sm text-gray-400">
                                    <span className={`h-1.5 w-1.5 rounded-full ${isHospital ? 'bg-accent-a' : 'bg-accent-b'}`}></span>
                                    {spec}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Switch Control */}
                    <div className="rounded-lg bg-gray-900 p-2">
                        <div className="relative flex h-12 w-full cursor-pointer items-center rounded bg-black p-1" onClick={() => setContext(isHospital ? "careHome" : "hospital")}>
                            {/* Sliding Background */}
                            <div
                                className={`absolute h-10 w-[calc(50%-4px)] rounded shadow-lg transition-all duration-300 ${isHospital ? 'left-1 bg-accent-a' : 'left-[calc(50%+2px)] bg-accent-b'}`}
                            ></div>

                            <div className={`z-10 flex-1 text-center text-xs font-bold tracking-widest transition-colors duration-300 ${isHospital ? 'text-white' : 'text-gray-500'}`}>
                                HOSPITAL
                            </div>
                            <div className={`z-10 flex-1 text-center text-xs font-bold tracking-widest transition-colors duration-300 ${!isHospital ? 'text-white' : 'text-gray-500'}`}>
                                CARE HOME
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
