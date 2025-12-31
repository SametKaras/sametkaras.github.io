"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

interface ProjectContentProps {
    project: Project;
}

// Render checkmark bullet list
function FeatureList({ items, title }: { items: string[]; title: string }) {
    return (
        <motion.section variants={staggerItem}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        className="flex items-start gap-3 text-[var(--text-muted)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: index * 0.05 }}
                    >
                        <svg
                            className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
}

// Render standard case study (existing projects)
function StandardCaseStudy({ project }: ProjectContentProps) {
    const { caseStudy } = project;
    if (!caseStudy) return null;

    return (
        <>
            {/* Overview */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    {caseStudy.overview}
                </p>
            </motion.section>

            {/* Problem */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    {caseStudy.problem}
                </p>
            </motion.section>

            {/* Approach */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-4">Technical Approach</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    {caseStudy.approach}
                </p>
            </motion.section>

            {/* Features */}
            <FeatureList items={caseStudy.features} title="Key Features" />

            {/* Challenges */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-4">Challenges & Learnings</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    {caseStudy.challenges}
                </p>
            </motion.section>

            {/* Outcome */}
            <motion.section
                variants={staggerItem}
                className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
            >
                <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    {caseStudy.outcome}
                </p>
            </motion.section>
        </>
    );
}

// Render extended case study (new Unity shader/tools projects)
function ExtendedCaseStudy({ project }: ProjectContentProps) {
    const { extendedCaseStudy } = project;
    if (!extendedCaseStudy) return null;

    return (
        <>
            {/* What It Is */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    {extendedCaseStudy.whatItIs}
                </p>
            </motion.section>

            {/* Key Features */}
            <FeatureList items={extendedCaseStudy.keyFeatures} title="Key Features" />

            {/* Technical Breakdown */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-6">Technical Breakdown</h2>

                {/* How It Works */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">How It Works</h3>
                    <ol className="space-y-3">
                        {extendedCaseStudy.technicalBreakdown.howItWorks.map((step, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-3 text-[var(--text-muted)]"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewportOnce}
                                transition={{ delay: index * 0.05 }}
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] text-sm flex items-center justify-center font-medium">
                                    {index + 1}
                                </span>
                                {step}
                            </motion.li>
                        ))}
                    </ol>
                </div>

                {/* Architecture */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Architecture</h3>
                    <ul className="space-y-2">
                        {extendedCaseStudy.technicalBreakdown.architecture.map((item, index) => (
                            <li key={index} className="text-[var(--text-muted)] pl-4 border-l-2 border-[var(--border)]">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Notable Details */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">Notable Details</h3>
                    <ul className="space-y-2">
                        {extendedCaseStudy.technicalBreakdown.notableDetails.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-[var(--text-muted)]">
                                <span className="text-[var(--accent)]">•</span>
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            {/* Setup & Usage */}
            <motion.section variants={staggerItem}>
                <h2 className="text-2xl font-bold mb-6">Setup & Usage</h2>

                {/* Installation */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Installation</h3>
                    <ol className="space-y-2">
                        {extendedCaseStudy.setupUsage.install.map((step, index) => (
                            <li key={index} className="flex items-start gap-3 text-[var(--text-muted)]">
                                <span className="flex-shrink-0 w-6 h-6 rounded bg-[var(--surface)] text-sm flex items-center justify-center font-mono">
                                    {index + 1}
                                </span>
                                <code className="text-sm bg-transparent">{step}</code>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Quick Start Code */}
                {extendedCaseStudy.setupUsage.quickStart && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
                        <pre className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] overflow-x-auto">
                            <code className="text-sm text-[var(--text-muted)]">
                                {extendedCaseStudy.setupUsage.quickStart}
                            </code>
                        </pre>
                    </div>
                )}

                {/* Parameters */}
                {extendedCaseStudy.setupUsage.parameters.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Parameters</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[var(--border)]">
                                        <th className="text-left py-3 pr-4 font-semibold">Name</th>
                                        <th className="text-left py-3 pr-4 font-semibold">Type</th>
                                        <th className="text-left py-3 font-semibold">Effect</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {extendedCaseStudy.setupUsage.parameters.map((param, index) => (
                                        <tr key={index} className="border-b border-[var(--border)]/50">
                                            <td className="py-3 pr-4 font-mono text-[var(--accent)]">{param.name}</td>
                                            <td className="py-3 pr-4 text-[var(--text-muted)]">{param.type}</td>
                                            <td className="py-3 text-[var(--text-muted)]">{param.effect}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </motion.section>

            {/* Challenges & Learnings */}
            <FeatureList items={extendedCaseStudy.challengesLearnings} title="Challenges & Learnings" />

            {/* Outcomes */}
            <motion.section
                variants={staggerItem}
                className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
            >
                <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
                <ul className="space-y-2">
                    {extendedCaseStudy.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2 text-[var(--text-muted)]">
                            <span className="text-[var(--accent)]">✓</span>
                            {outcome}
                        </li>
                    ))}
                </ul>
            </motion.section>
        </>
    );
}

export function ProjectContent({ project }: ProjectContentProps) {
    const hasExtended = !!project.extendedCaseStudy;

    return (
        <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {hasExtended ? (
                <ExtendedCaseStudy project={project} />
            ) : (
                <StandardCaseStudy project={project} />
            )}
        </motion.div>
    );
}
