"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowPanelProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    className?: string;
    children: React.ReactNode;
    as?: "div" | "article" | "section";
}

/**
 * GlowPanel - A wrapper component for static panels with cursor-following glow effect
 * Use for: education cards, experience cards, skills panels, info blocks
 */
export function GlowPanel({
    className,
    children,
    as = "div",
    ...props
}: GlowPanelProps) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLElement>) => {
            if (prefersReducedMotion) return;
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            target.style.setProperty("--glow-x", `${x}%`);
            target.style.setProperty("--glow-y", `${y}%`);
        },
        [prefersReducedMotion]
    );

    const handlePointerEnter = useCallback(
        (e: React.PointerEvent<HTMLElement>) => {
            if (prefersReducedMotion) return;
            e.currentTarget.style.setProperty("--glow-opacity", "1");
        },
        [prefersReducedMotion]
    );

    const handlePointerLeave = useCallback(
        (e: React.PointerEvent<HTMLElement>) => {
            e.currentTarget.style.setProperty("--glow-opacity", "0");
            e.currentTarget.style.setProperty("--glow-x", "50%");
            e.currentTarget.style.setProperty("--glow-y", "50%");
        },
        []
    );

    const Component = motion[as];

    return (
        <Component
            className={cn("glow-card", className)}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            {...props}
        >
            {children}
        </Component>
    );
}
