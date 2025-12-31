"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/personal";
import { cn } from "@/lib/utils";

// Hook for nav link glow effect
function useNavGlow() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLAnchorElement>) => {
            if (prefersReducedMotion) return;
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            target.style.setProperty("--glow-x", `${x}%`);
        },
        [prefersReducedMotion]
    );

    const handlePointerEnter = useCallback(
        (e: React.PointerEvent<HTMLAnchorElement>) => {
            if (prefersReducedMotion) return;
            e.currentTarget.style.setProperty("--glow-opacity", "1");
        },
        [prefersReducedMotion]
    );

    const handlePointerLeave = useCallback(
        (e: React.PointerEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.setProperty("--glow-opacity", "0");
            e.currentTarget.style.setProperty("--glow-x", "50%");
        },
        []
    );

    return { handlePointerMove, handlePointerEnter, handlePointerLeave };
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { handlePointerMove, handlePointerEnter, handlePointerLeave } = useNavGlow();

    // Track scroll position for navbar opacity
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial position
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Frosted glass background with scroll-aware opacity */}
            <div
                className={cn(
                    "absolute inset-0 backdrop-blur-xl transition-all duration-300",
                    isScrolled
                        ? "bg-black/50 border-b border-[var(--accent)]/10"
                        : "bg-black/30 border-b border-white/5"
                )}
            />
            {/* Subtle accent gradient line at bottom */}
            <div
                className={cn(
                    "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300",
                    "bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent",
                    isScrolled ? "opacity-100" : "opacity-50"
                )}
            />

            <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="group flex items-center transition-transform hover:scale-105"
                >
                    <Image
                        src="/favicon-32x32.png"
                        alt="SK Logo"
                        width={32}
                        height={32}
                        className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(210,255,0,0.6)]"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onPointerMove={handlePointerMove}
                                onPointerEnter={handlePointerEnter}
                                onPointerLeave={handlePointerLeave}
                                className={cn(
                                    "glow-link text-sm font-medium transition-colors relative py-1",
                                    pathname === item.href
                                        ? "text-[var(--accent)]"
                                        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                                )}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="8" x2="20" y2="8" />
                                <line x1="4" y1="16" x2="20" y2="16" />
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden relative bg-[var(--surface)] border-b border-[var(--border)]"
                    >
                        <ul className="px-6 py-4 space-y-4">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            "block text-lg font-medium transition-colors",
                                            pathname === item.href
                                                ? "text-[var(--accent)]"
                                                : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
