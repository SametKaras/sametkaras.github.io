"use client";

import { forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface SectionProps {
    children: ReactNode;
    className?: string;
    container?: boolean;
    animate?: boolean;
    id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, animate = true, children, id }, ref) => {
        const content = container ? (
            <div className="max-w-7xl mx-auto px-6">{children}</div>
        ) : (
            children
        );

        if (animate) {
            return (
                <motion.section
                    ref={ref}
                    id={id}
                    className={cn("py-24 md:py-32", className)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeInUp}
                >
                    {content}
                </motion.section>
            );
        }

        return (
            <section ref={ref} id={id} className={cn("py-24 md:py-32", className)}>
                {content}
            </section>
        );
    }
);

Section.displayName = "Section";
