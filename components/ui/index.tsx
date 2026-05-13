/** @format */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "glow";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    type?: "button" | "submit";
    fullWidth?: boolean;
}

export function AnimatedButton({ children, variant = "primary", size = "md", className, onClick, disabled, type = "button", fullWidth }: AnimatedButtonProps) {
    const base =
        "relative inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-all duration-200 select-none disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden";

    const variants = {
        primary: "bg-white text-black hover:bg-white/90",
        secondary: "bg-white/10 text-white border border-white/15 hover:bg-white/18 hover:border-white/25",
        ghost: "text-[#2997ff] hover:bg-[#2997ff]/10",
        glow: "bg-[#2997ff] text-white hover:bg-[#0a84ff]",
    };

    const sizes = {
        sm: "text-xs px-4! py-2!",
        md: "text-sm px-6! py-2.5!",
        lg: "text-base px-8! py-3.5!",
    };

    return (
        <motion.button
            type={type}
            disabled={disabled}
            onClick={onClick}
            whileTap={{ scale: 0.97 }}
            whileHover={variant === "glow" ? { scale: 1.03, boxShadow: "0 0 30px rgba(41,151,255,0.4)" } : { scale: 1.03 }}
            className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        >
            {children}
        </motion.button>
    );
}

interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionTitle({ eyebrow, title, subtitle, align = "center", className }: SectionTitleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn("space-y-3!", align === "center" && "text-center", className)}
        >
            {eyebrow && <span className="inline-block text-sm font-display font-semibold tracking-[0.15em] text-white/90">{eyebrow}</span>}
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary leading-tight">{title}</h2>
            {subtitle && <p className={cn("text-text-primary text-base sm:text-lg max-w-2xl leading-relaxed", align === "center" && "mx-auto!")}>{subtitle}</p>}
        </motion.div>
    );
}


interface BadgeProps {
    children: ReactNode;
    variant?: "new" | "sale" | "popular" | "trending" | "default";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        new: "bg-[#2997ff]/20 text-[#2997ff] border-[#2997ff]/30",
        sale: "bg-red-500/20 text-red-400 border-red-500/30",
        popular: "bg-amber-500/20 text-amber-400 border-amber-500/30",
        trending: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        default: "bg-white/10 text-[#ababab] border-white/15",
    };

    return <span className={cn("inline-flex items-center text-[10px] font-display font-bold tracking-wider uppercase px-2! py-0.5! rounded-full border", variants[variant], className)}>{children}</span>;
}

export function Skeleton({ className }: { className?: string }) {
    return <div className={cn("shimmer rounded-xl", className)} />;
}


export function ProductCardSkeleton() {
    return (
        <div className="rounded-3xl bg-[#111] border border-white/8 overflow-hidden p-5! space-y-4!">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <div className="space-y-2!">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-1/3" />
            </div>
        </div>
    );
}
