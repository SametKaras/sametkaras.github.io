import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

export function formatYear(year: number): string {
    return year.toString();
}

export function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        backend: "Backend / APIs",
        ai: "AI / CV",
        unity: "Unity / Games",
        "unity-shaders": "Unity / Shaders",
        "unity-tools": "Unity / Tools",
        robotics: "Robotics / ROS",
    };
    return labels[category] || category;
}

export function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        backend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        ai: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        unity: "bg-green-500/10 text-green-400 border-green-500/20",
        "unity-shaders": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        "unity-tools": "bg-teal-500/10 text-teal-400 border-teal-500/20",
        robotics: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    };
    return colors[category] || "bg-accent/10 text-accent border-accent/20";
}
