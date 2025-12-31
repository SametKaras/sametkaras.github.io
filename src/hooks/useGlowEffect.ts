"use client";

import { useCallback, useRef, useEffect, useState } from "react";

/**
 * Hook to create cursor-following glow effect on elements
 * Sets CSS variables --glow-x, --glow-y, --glow-opacity on the element
 * Respects prefers-reduced-motion
 */
export function useGlowEffect<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<T>) => {
            if (prefersReducedMotion || !ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            ref.current.style.setProperty("--glow-x", `${x}%`);
            ref.current.style.setProperty("--glow-y", `${y}%`);
        },
        [prefersReducedMotion]
    );

    const handlePointerEnter = useCallback(() => {
        if (prefersReducedMotion || !ref.current) return;
        ref.current.style.setProperty("--glow-opacity", "1");
    }, [prefersReducedMotion]);

    const handlePointerLeave = useCallback(() => {
        if (!ref.current) return;
        ref.current.style.setProperty("--glow-opacity", "0");
        // Reset position to center
        ref.current.style.setProperty("--glow-x", "50%");
        ref.current.style.setProperty("--glow-y", "50%");
    }, []);

    return {
        ref,
        glowProps: {
            onPointerMove: handlePointerMove,
            onPointerEnter: handlePointerEnter,
            onPointerLeave: handlePointerLeave,
        },
    };
}
