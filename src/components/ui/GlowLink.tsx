"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
}

/**
 * GlowLink - An anchor element with subtle cursor-following glow effect
 * Use for: social links, footer links, any standalone anchor elements
 */
export function GlowLink({
    children,
    className,
    ...props
}: GlowLinkProps) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLAnchorElement>) => {
            if (prefersReducedMotion) return;
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            target.style.setProperty("--glow-x", `${x}%`);
        },
        [prefersReducedMotion]
    );

    const handlePointerEnter = useCallback(
        (e: React.PointerEvent<HTMLAnchorElement>) => {
            if (prefersReducedMotion) return;
            e.currentTarget.style.setProperty("--glow-opacity", "1");
        },
        [prefersReducedMotion]
    );

    const handlePointerLeave = useCallback(
        (e: React.PointerEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.setProperty("--glow-opacity", "0");
            e.currentTarget.style.setProperty("--glow-x", "50%");
        },
        []
    );

    return (
        <a
            className={cn("glow-link", className)}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            {...props}
        >
            {children}
        </a>
    );
}
