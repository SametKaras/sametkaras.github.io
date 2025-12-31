"use client";

import { forwardRef, useCallback, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    external?: boolean;
}

// Simple glow handler for buttons
function useButtonGlow() {
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

    return { handlePointerMove, handlePointerEnter, handlePointerLeave };
}

/**
 * Button component with cursor-following glow effect
 * Supports primary/secondary/ghost variants and internal/external links
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            href,
            external,
            children,
            ...props
        },
        ref
    ) => {
        const { handlePointerMove, handlePointerEnter, handlePointerLeave } = useButtonGlow();

        const baseStyles =
            "glow-button inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary:
                "bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--accent-hover)]",
            secondary:
                "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--accent)]/30",
            ghost:
                "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]",
        };

        const sizes = {
            sm: "text-sm px-4 py-2 gap-2",
            md: "text-sm px-6 py-3 gap-2",
            lg: "text-base px-8 py-4 gap-3",
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            if (external) {
                return (
                    <motion.a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        onPointerMove={handlePointerMove}
                        onPointerEnter={handlePointerEnter}
                        onPointerLeave={handlePointerLeave}
                    >
                        {children}
                    </motion.a>
                );
            }
            return (
                <Link href={href} passHref legacyBehavior>
                    <motion.a
                        className={classes}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        onPointerMove={handlePointerMove}
                        onPointerEnter={handlePointerEnter}
                        onPointerLeave={handlePointerLeave}
                    >
                        {children}
                    </motion.a>
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref}
                className={classes}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
