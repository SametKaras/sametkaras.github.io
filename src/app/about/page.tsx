import { Metadata } from "next";
import { Badge, Section, GlowPanel } from "@/components/ui";
import { personal, education, skills, experience } from "@/data/personal";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
    title: "About",
    description: `Learn more about ${personal.name} - Software Developer specializing in AI/Computer Vision, Unity Game Development, Robotics/ROS, and API Development.`,
};

export default function AboutPage() {
    return (
        <div className="pt-24">
            <Section animate={false}>
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        About Me
                    </h1>
                    <p className="text-[var(--text-muted)] text-lg max-w-3xl leading-relaxed mb-6">
                        {personal.bio}
                    </p>
                    {/* CV Download Button */}
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--background)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="12" y2="18" />
                            <line x1="15" y1="15" x2="12" y2="18" />
                        </svg>
                        View CV
                    </a>
                </div>

                {/* Education */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Education</h2>
                    <GlowPanel
                        className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold">{education.degree}</h3>
                                <p className="text-[var(--text-muted)]">{education.university}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[var(--accent)] font-semibold">GPA: {education.gpa}</p>
                                <p className="text-sm text-[var(--text-muted)]">{education.period}</p>
                            </div>
                        </div>
                    </GlowPanel>
                </div>

                {/* Experience */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Experience</h2>
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <GlowPanel
                                key={index}
                                className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                        <p className="text-[var(--accent)]">{exp.company}</p>
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)]">{exp.period}</p>
                                </div>
                                <p className="text-[var(--text-muted)] mb-4">{exp.description}</p>
                                <ul className="space-y-2">
                                    {exp.highlights.map((highlight, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                                        >
                                            <svg
                                                className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </GlowPanel>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <AboutContent skills={skills} />
            </Section>
        </div>
    );
}
