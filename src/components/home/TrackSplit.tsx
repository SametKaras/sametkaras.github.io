"use client";

import { motion } from "framer-motion";
import { Badge, GlowPanel } from "@/components/ui";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export function TrackSplit() {
    const focusSkills = ["PyTorch", "OpenCV", "Unity", "ROS", "Computer Vision"];

    return (
        <section className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Where Vision Meets Motion
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
                        Building intelligent systems that see, think, and move — from computer vision research to autonomous robotics and immersive game worlds.
                    </p>
                </motion.div>

                {/* Single focused card with GlowPanel */}
                <GlowPanel
                    className="group relative p-10 lg:p-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="mb-8 text-center">
                        {/* Gradient divider: left line — CORE FOCUS — right line */}
                        <div className="flex items-center justify-center gap-4 mb-6 -mt-2">
                            {/* Left gradient line */}
                            <div
                                className="flex-1 h-px max-w-24"
                                style={{
                                    background: "linear-gradient(90deg, transparent 0%, rgba(210, 255, 0, 0.15) 50%, rgba(210, 255, 0, 0.4) 100%)"
                                }}
                            />
                            {/* Gradient text */}
                            <span
                                className="text-xs font-semibold uppercase tracking-[0.3em]"
                                style={{
                                    background: "linear-gradient(90deg, rgba(210, 255, 0, 0.6) 0%, #D2FF00 50%, rgba(210, 255, 0, 0.6) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Core Focus
                            </span>
                            {/* Right gradient line */}
                            <div
                                className="flex-1 h-px max-w-24"
                                style={{
                                    background: "linear-gradient(90deg, rgba(210, 255, 0, 0.4) 0%, rgba(210, 255, 0, 0.15) 50%, transparent 100%)"
                                }}
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            AI, Robotics & Game Development
                        </h3>
                    </div>

                    <p className="text-[var(--text-muted)] text-center max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                        Pushing boundaries with computer vision, deep learning, autonomous systems in ROS, and interactive experiences in Unity. I experiment, prototype, and build software that explores the edge of what's possible.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {focusSkills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-sm py-1.5 px-4">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </GlowPanel>
            </div>
        </section>
    );
}
