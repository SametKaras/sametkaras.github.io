"use client";

import { useEffect, useRef, useState } from "react";

/**
 * GlobalBackground Component
 * 
 * Creates a premium, multi-layered tech-inspired background across the entire site.
 * 
 * LAYERS:
 * 1. Base gradient - Deep, rich dark gradient with subtle color variation
 * 2. Light fields - Large, soft radial light sources (accent-derived)
 * 3. Tech grid - Faint vector field / dot matrix pattern
 * 4. Noise texture - Subtle grain for material feel
 * 
 * INTERACTIONS:
 * - Slow parallax response to scroll position
 * - Subtle light field shift following cursor (global)
 * - All interactions are slow/calm, not reactive
 * 
 * PERFORMANCE:
 * - CSS-only layers (no WebGL)
 * - Throttled JS for cursor/scroll tracking
 * - Respects prefers-reduced-motion
 */
export function GlobalBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        if (mediaQuery.matches) return;

        let scrollY = 0;
        let mouseX = 0.5;
        let mouseY = 0.5;
        let rafId: number;
        let lastUpdate = 0;
        const throttleMs = 50; // Update every 50ms max

        const updateBackground = () => {
            if (!containerRef.current) return;

            // Apply subtle transforms based on scroll and cursor
            const scrollOffset = scrollY * 0.02;
            const cursorOffsetX = (mouseX - 0.5) * 20;
            const cursorOffsetY = (mouseY - 0.5) * 20;

            containerRef.current.style.setProperty("--scroll-offset", `${scrollOffset}px`);
            containerRef.current.style.setProperty("--cursor-x", `${50 + cursorOffsetX}%`);
            containerRef.current.style.setProperty("--cursor-y", `${50 + cursorOffsetY}%`);
        };

        const handleScroll = () => {
            scrollY = window.scrollY;
            const now = Date.now();
            if (now - lastUpdate > throttleMs) {
                lastUpdate = now;
                rafId = requestAnimationFrame(updateBackground);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            const now = Date.now();
            if (now - lastUpdate > throttleMs) {
                lastUpdate = now;
                rafId = requestAnimationFrame(updateBackground);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Initial update
        updateBackground();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            mediaQuery.removeEventListener("change", handleChange);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="global-background"
            aria-hidden="true"
            style={{
                "--scroll-offset": "0px",
                "--cursor-x": "50%",
                "--cursor-y": "50%",
            } as React.CSSProperties}
        >
            {/* Layer 1: Rich dark gradient base */}
            <div className="global-bg-gradient" />

            {/* Layer 2: Light fields (large soft radial glows) */}
            <div className="global-bg-lightfield global-bg-lightfield-1" />
            <div className="global-bg-lightfield global-bg-lightfield-2" />
            <div className="global-bg-lightfield global-bg-lightfield-3" />

            {/* Layer 3: Tech grid pattern */}
            <div className="global-bg-grid" />

            {/* Layer 4: Noise texture overlay */}
            <div className="global-bg-noise" />

            {/* Layer 5: Vignette for depth */}
            <div className="global-bg-vignette" />
        </div>
    );
}
