"use client";

import React, { useRef, useState, useEffect } from "react";

interface ScalableDiagramWrapperProps {
    /** The "native" width of the diagram content in pixels. */
    nativeWidth: number;
    /** The "native" height of the diagram content in pixels. */
    nativeHeight: number;
    children: React.ReactNode;
    className?: string;
}

export default function ScalableDiagramWrapper({
    nativeWidth,
    nativeHeight,
    children,
    className = "",
}: ScalableDiagramWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    // Calculates the scale based on container width vs native width
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const parentWidth = containerRef.current.offsetWidth;
                const newScale = Math.min(parentWidth / nativeWidth, 1); // Only scale down, never up (optional)
                // Use Math.min(..., 1) if we don't want to blow up small SVGs on huge screens.
                // Or simply: const newScale = parentWidth / nativeWidth; if we want full width always.
                // Let's stick to full-width responsive behavior (up and down) or max-width constraint from parent.

                // For this use case ("fit in screen"), generally we want it to shrink. 
                // We'll allow scaling up too if the native resolution allows, but capping at 1 
                // keeps it crisp if nativeWidth is the max design width.
                // Let's allow shrinking, but cap at 1.0 to avoid blurriness, unless specified otherwise.
                setScale(newScale);
            }
        };

        // Initial measurement
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [nativeWidth]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden flex justify-center ${className}`}
            style={{
                height: nativeHeight * scale, // Adjust container height dynamically
            }}
        >
            <div
                className="origin-top"
                style={{
                    width: nativeWidth,
                    height: nativeHeight,
                    transform: `scale(${scale})`,
                }}
            >
                {children}
            </div>
        </div>
    );
}
