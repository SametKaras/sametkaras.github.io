import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "outline";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        default: "bg-[var(--accent-dim)] text-[var(--accent)] border-[var(--accent)]/20",
        outline: "bg-transparent text-[var(--text-muted)] border-[var(--border)]",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
