"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge, Section, GlowCard } from "@/components/ui";
import { projects, projectCategories } from "@/data/projects";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { getCategoryColor, getCategoryLabel, cn } from "@/lib/utils";

// Hook for filter pill glow effect
function useFilterGlow() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLButtonElement>) => {
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
        (e: React.PointerEvent<HTMLButtonElement>) => {
            if (prefersReducedMotion) return;
            e.currentTarget.style.setProperty("--glow-opacity", "1");
        },
        [prefersReducedMotion]
    );

    const handlePointerLeave = useCallback(
        (e: React.PointerEvent<HTMLButtonElement>) => {
            e.currentTarget.style.setProperty("--glow-opacity", "0");
            e.currentTarget.style.setProperty("--glow-x", "50%");
            e.currentTarget.style.setProperty("--glow-y", "50%");
        },
        []
    );

    return { handlePointerMove, handlePointerEnter, handlePointerLeave };
}

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const { handlePointerMove, handlePointerEnter, handlePointerLeave } = useFilterGlow();

    // Sort all projects by year (newest first), then by title for stable ordering
    const sortedProjects = [...projects].sort(
        (a, b) => b.year - a.year || a.title.localeCompare(b.title)
    );

    // Filter by category if selected
    const filteredProjects =
        activeCategory === "all"
            ? sortedProjects
            : sortedProjects.filter((p) => p.category === activeCategory);

    return (
        <div className="pt-24">
            <Section animate={false}>
                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Projects
                    </h1>
                    <p className="text-[var(--text-muted)] text-lg max-w-2xl">
                        A collection of work spanning AI research, Unity shaders & tools, game
                        development, robotics, and software systems.
                    </p>
                </motion.div>

                {/* Filters with glow effect */}
                <motion.div
                    className="flex flex-wrap gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            onPointerMove={handlePointerMove}
                            onPointerEnter={handlePointerEnter}
                            onPointerLeave={handlePointerLeave}
                            className={cn(
                                "glow-button px-4 py-2 text-sm font-medium rounded-lg border transition-colors",
                                activeCategory === category.id
                                    ? "bg-[var(--accent)] text-[var(--background)] border-[var(--accent)]"
                                    : "bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/30"
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    key={activeCategory}
                >
                    {filteredProjects.map((project) => (
                        <motion.div key={project.slug} variants={staggerItem}>
                            <Link href={`/projects/${project.slug}`}>
                                <GlowCard
                                    className="group h-full flex flex-col p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <Badge className={getCategoryColor(project.category)}>
                                            {getCategoryLabel(project.category)}
                                        </Badge>
                                        <span className="text-sm text-[var(--text-muted)]">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                        {project.title}
                                    </h2>

                                    {/* Summary */}
                                    <p className="text-[var(--text-muted)] text-sm mb-4">
                                        {project.summary}
                                    </p>

                                    {/* Tech stack - flex-1 pushes footer to bottom */}
                                    <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                                        {project.stack.slice(0, 5).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs text-[var(--text-muted)] bg-[var(--background)] px-2 py-0.5 rounded h-fit"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links - always at bottom */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)] mt-auto">
                                        {project.github && (
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.github, "_blank");
                                                }}
                                                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                                            >
                                                GitHub
                                            </span>
                                        )}
                                        {project.linkedin && (
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.linkedin, "_blank");
                                                }}
                                                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                                            >
                                                LinkedIn
                                            </span>
                                        )}
                                        <span className="ml-auto text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                                            View details
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="group-hover:translate-x-0.5 transition-transform"
                                            >
                                                <path d="M2 6h8M6 2l4 4-4 4" />
                                            </svg>
                                        </span>
                                    </div>
                                </GlowCard>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>
        </div>
    );
}
