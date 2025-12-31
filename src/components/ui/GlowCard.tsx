"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useGlowEffect } from "@/hooks";
import { cn } from "@/lib/utils";

interface GlowCardProps extends Omit<HTMLMotionProps<"article">, "ref"> {
    className?: string;
    children: React.ReactNode;
}

/**
 * Card component with cursor-following glow effect
 * Applies the glow-card CSS class and handles pointer events
 */
export function GlowCard({ className, children, ...props }: GlowCardProps) {
    const { ref, glowProps } = useGlowEffect<HTMLElement>();

    return (
        <motion.article
            ref={ref}
            className={cn("glow-card", className)}
            {...glowProps}
            {...props}
        >
            {children}
        </motion.article>
    );
}
