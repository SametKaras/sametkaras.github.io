"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge, GlowPanel } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

interface Skills {
    languages: string[];
    frameworks: string[];
    gameAndSimulation: string[];
    tools: string[];
}

interface AboutContentProps {
    skills: Skills;
}

// Hook for skill badge glow effect
function useSkillGlow() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLSpanElement>) => {
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
        (e: React.PointerEvent<HTMLSpanElement>) => {
            if (prefersReducedMotion) return;
            e.currentTarget.style.setProperty("--glow-opacity", "1");
        },
        [prefersReducedMotion]
    );

    const handlePointerLeave = useCallback(
        (e: React.PointerEvent<HTMLSpanElement>) => {
            e.currentTarget.style.setProperty("--glow-opacity", "0");
            e.currentTarget.style.setProperty("--glow-x", "50%");
            e.currentTarget.style.setProperty("--glow-y", "50%");
        },
        []
    );

    return { handlePointerMove, handlePointerEnter, handlePointerLeave };
}

export function AboutContent({ skills }: AboutContentProps) {
    const { handlePointerMove, handlePointerEnter, handlePointerLeave } = useSkillGlow();

    const skillGroups = [
        { title: "Languages", items: skills.languages },
        { title: "Frameworks", items: skills.frameworks },
        { title: "Game & Simulation", items: skills.gameAndSimulation },
        { title: "Tools", items: skills.tools },
    ];

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
        >
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {skillGroups.map((group) => (
                    <GlowPanel
                        key={group.title}
                        className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    onPointerMove={handlePointerMove}
                                    onPointerEnter={handlePointerEnter}
                                    onPointerLeave={handlePointerLeave}
                                    className="glow-button inline-flex items-center px-3 py-1 text-sm rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </GlowPanel>
                ))}
            </div>
        </motion.div>
    );
}
