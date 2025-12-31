"use client";

import { motion } from "framer-motion";
import { Button, Badge, GlowPanel } from "@/components/ui";
import { personal, skills } from "@/data/personal";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export function AboutPreview() {
    const allSkills = [
        ...skills.languages.slice(0, 2),
        ...skills.frameworks.slice(0, 2),
        ...skills.gameAndSimulation,
    ];

    return (
        <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            About Me
                        </h2>
                        <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
                            {personal.bioShort} I bring engineering rigor and creative vision to every project.
                        </p>
                        <Button href="/about" variant="secondary">
                            Learn more about me
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M2 7h10M8 3l4 4-4 4" />
                            </svg>
                        </Button>
                    </motion.div>

                    {/* Skills visual with GlowPanel */}
                    <motion.div
                        className="relative"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        transition={{ delay: 0.2 }}
                    >
                        <GlowPanel
                            className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                        >
                            <h3 className="text-lg font-semibold mb-6">Core Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {allSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={viewportOnce}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    >
                                        <Badge className="text-sm py-1.5 px-4">{skill}</Badge>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-[var(--border)]">
                                <div>
                                    <p className="text-3xl font-bold text-[var(--accent)]">6+</p>
                                    <p className="text-sm text-[var(--text-muted)]">Projects completed</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[var(--accent)]">4</p>
                                    <p className="text-sm text-[var(--text-muted)]">Focus areas</p>
                                </div>
                            </div>
                        </GlowPanel>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
