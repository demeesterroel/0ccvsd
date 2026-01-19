"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

interface InteractiveMapProps {
    src: string;
    alt: string;
    caption?: string;
}

export default function InteractiveMap({ src, alt, caption }: InteractiveMapProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-8 w-full">
            <div
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative aspect-video w-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain p-4"
                    />
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="rounded-full bg-white p-3 shadow-lg">
                        <Maximize2 size={20} className="text-gray-600" />
                    </div>
                </div>
            </div>
            {caption && <p className="mt-2 text-center text-xs text-gray-400">{caption}</p>}

            {/* Lightbox Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm p-4 md:p-10" onClick={() => setIsOpen(false)}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-8 top-8 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                    >
                        <X size={24} />
                    </button>
                    <div className="relative h-full w-full">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
