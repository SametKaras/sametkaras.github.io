import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, SmoothScroll, GlobalBackground } from "@/components/layout";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "Samet Karaş | Software Developer",
        template: "%s | Samet Karaş",
    },
    description:
        "Software Developer specializing in AI/Computer Vision, Unity Game Development, Robotics/ROS, and API Development. Building software that sees, moves, thinks, and serves.",
    keywords: [
        "Samet Karaş",
        "Software Developer",
        "Computer Vision",
        "AI",
        "Unity",
        "Game Developer",
        "Robotics",
        "ROS",
        "API Developer",
        "Portfolio",
    ],
    authors: [{ name: "Samet Karaş" }],
    creator: "Samet Karaş",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sametkaras.com",
        siteName: "Samet Karaş Portfolio",
        title: "Samet Karaş | Software Developer",
        description:
            "Software Developer specializing in AI/CV, Unity, ROS, and APIs.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Samet Karaş | Software Developer",
        description:
            "Software Developer specializing in AI/CV, Unity, ROS, and APIs.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased">
                {/* Global layered background (gradient + bloom + grid + noise) */}
                <GlobalBackground />
                <SmoothScroll>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
