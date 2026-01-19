"use client";

import { thesisContent } from "@/data/thesisContent";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

export default function CodeExcavator() {
    const data = thesisContent.phase2;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="flex h-screen w-full flex-col items-center justify-center bg-[#0d0d0d] p-10 text-clinical">
            <div className="mb-10 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent-a">
                    PHASE II: {data.concept.toUpperCase()}
                </h2>
                <p className="mt-2 text-xs text-gray-500">{data.definition}</p>
            </div>

            <div className="relative w-full max-w-2xl rounded-xl border border-gray-800 bg-[#050505] p-8 shadow-2xl">
                <div className="mb-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>

                <div className="font-mono text-sm leading-relaxed text-gray-400">
                    <p className="text-gray-600"># nav2_costmap_2d/params.yaml</p>
                    <p><span className="text-accent-c">inflation_layer:</span></p>
                    <p className="pl-4"><span className="text-blue-300">enabled:</span> true</p>
                    <p className="pl-4"><span className="text-blue-300">cost_scaling_factor:</span> 10.0</p>

                    <div className="my-4 border-l-2 border-accent-a pl-4">
                        <p className="text-gray-600"># THE HIDDEN TRADE-OFF (sm_mppi.py)</p>

                        <div
                            className="group relative cursor-help"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className={`transition-all duration-500 ${isHovered ? "blur-none" : "blur-sm"}`}>
                                <p>goal_cost = <span className="text-accent-b">2.0</span></p>
                                <p>social_momentum_cost = <span className="text-accent-a">-11.0</span></p>
                            </div>

                            {!isHovered && (
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold tracking-widest text-accent-a opacity-80 decoration-0">
                                    HOVER TO EXCAVATE
                                </div>
                            )}

                            {/* Annotation Pop-up */}
                            <div className={`absolute bottom-full left-0 mb-4 w-64 rounded bg-accent-a p-3 text-xs text-white shadow-[0_0_20px_#FF3333] transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"}`}>
                                <div className="mb-1 flex items-center gap-1 font-bold">
                                    <AlertCircle size={12} />
                                    <span>NORMATIVE VOID DETECTED</span>
                                </div>
                                {data.hiddenWeights.insight}
                                <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 bg-accent-a"></div>
                            </div>
                        </div>
                    </div>

                    <p className="pl-4"><span className="text-blue-300">inflation_radius:</span> 0.55</p>
                </div>
            </div>

            <div className="mt-8 max-w-md text-center">
                <h3 className="mb-2 font-bold text-white">{data.fallacy.title}</h3>
                <p className="text-sm text-gray-500">{data.fallacy.text}</p>
            </div>
        </section>
    );
}
