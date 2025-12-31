"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge, GlowCard } from "@/components/ui";
import { projects } from "@/data/projects";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { getCategoryColor, getCategoryLabel } from "@/lib/utils";

export function FeaturedProjects() {
    // Define the 4 domains and which categories map to them
    // Categories in JSON: "backend", "ai", "robotics", "unity", "unity-shaders", "unity-tools"
    const domains = [
        { name: "backend", categories: ["backend"] },
        { name: "ai", categories: ["ai"] },
        { name: "robotics", categories: ["robotics"] },
        { name: "unity", categories: ["unity", "unity-shaders", "unity-tools"] },
    ];

    // For each domain, pick the newest project (by year, then title as tiebreaker)
    const selectedSlugs = new Set<string>();
    const featuredProjects = domains
        .map((domain) => {
            const domainProjects = projects
                .filter((p) => domain.categories.includes(p.category) && !selectedSlugs.has(p.slug))
                .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

            const selected = domainProjects[0];
            if (selected) {
                selectedSlugs.add(selected.slug);
                // Debug: uncomment to verify selection
                // console.log(`[Featured] ${domain.name}: ${selected.title} (${selected.year})`);
            }
            return selected;
        })
        .filter((p): p is NonNullable<typeof p> => p !== undefined);

    // Debug: log final selection
    // console.log("[Featured] Total:", featuredProjects.length, featuredProjects.map(p => p.title));

    return (
        <section className="py-24 md:py-32 bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Featured Work
                        </h2>
                        <p className="text-[var(--text-muted)] max-w-xl">
                            Selected projects across AI, game development, robotics, and software systems
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                    >
                        View all projects
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Projects grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.slug}
                            variants={staggerItem}
                        >
                            <Link href={`/projects/${project.slug}`}>
                                <GlowCard
                                    className="group h-full flex flex-col p-6 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Project header */}
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <Badge className={getCategoryColor(project.category)}>
                                            {getCategoryLabel(project.category)}
                                        </Badge>
                                        <span className="text-sm text-[var(--text-muted)]">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Project title */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Project summary */}
                                    <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">
                                        {project.summary}
                                    </p>

                                    {/* Tech stack - flex-1 pushes CTA to bottom */}
                                    <div className="flex flex-wrap gap-1.5 flex-1">
                                        {project.stack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs text-[var(--text-muted)] bg-[var(--surface)] px-2 py-0.5 rounded h-fit"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.stack.length > 4 && (
                                            <span className="text-xs text-[var(--text-muted)] h-fit">
                                                +{project.stack.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Arrow indicator - always at bottom */}
                                    <div className="mt-6 flex items-center gap-2 text-sm text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                                        <span>View case study</span>
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="group-hover:translate-x-1 transition-transform"
                                        >
                                            <path d="M2 7h10M8 3l4 4-4 4" />
                                        </svg>
                                    </div>
                                </GlowCard>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
