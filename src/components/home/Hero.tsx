"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { personal } from "@/data/personal";

export function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        // If reduced motion, show CTAs immediately
        if (prefersReducedMotion) {
            setHasScrolled(true);
            return;
        }

        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true);
            }
        };

        const handleKeydown = (e: KeyboardEvent) => {
            // Arrow keys, Page Up/Down, Space, Home, End
            const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"];
            if (scrollKeys.includes(e.key) && !hasScrolled) {
                setHasScrolled(true);
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: true });
        window.addEventListener("touchmove", handleScroll, { passive: true });
        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [hasScrolled, prefersReducedMotion]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent" />

            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                           linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <p className="text-[var(--text-muted)] text-sm md:text-base tracking-wide mb-6">
                    Software Developer • AI/CV • Unity/ROS • APIs
                </p>

                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
                    <span className="block">{personal.name.split(" ")[0]}</span>
                    <span className="block text-[var(--accent)]">{personal.name.split(" ")[1]}</span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
                    {personal.tagline}
                </p>

                {/* CTA buttons - fade in when user scrolls */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ pointerEvents: hasScrolled ? "auto" : "none" }}
                >
                    <Button href="/projects" size="lg">
                        View Projects
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                    </Button>

                    <Button href="#contact" variant="secondary" size="lg">
                        Get in Touch
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator - fades out when user scrolls */}
            <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={hasScrolled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: hasScrolled ? 0 : 0.3 }}
                style={{ pointerEvents: hasScrolled ? "none" : "auto" }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span
                        className="text-xs uppercase tracking-widest text-[var(--accent)]"
                        style={{
                            textShadow: "0 0 20px rgba(210, 255, 0, 0.4), 0 0 40px rgba(210, 255, 0, 0.2)"
                        }}
                    >
                        Scroll to explore
                    </span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            filter: "drop-shadow(0 0 8px rgba(210, 255, 0, 0.5))"
                        }}
                    >
                        <path d="M10 4v12M6 12l4 4 4-4" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
