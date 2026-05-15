/** @format */

"use client";

import { useFocusEffect } from "@/hooks/useFocusEffect";
import { Ip17Feature } from "@/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface FeatureCardProps {
    feature: Ip17Feature;
    index: number;
}

const ACCENTS = [
    {
        number: "#3B82F6",
        glow: "rgba(59,130,246,0.55)",
        icon: "rgba(59,130,246,0.18)",
        iconHover: "rgba(59,130,246,0.32)",
    },
    {
        number: "#A855F7",
        glow: "rgba(168,85,247,0.55)",
        icon: "rgba(168,85,247,0.18)",
        iconHover: "rgba(168,85,247,0.32)",
    },
    {
        number: "#10B981",
        glow: "rgba(16,185,129,0.55)",
        icon: "rgba(16,185,129,0.18)",
        iconHover: "rgba(16,185,129,0.32)",
    },
    {
        number: "#F59E0B",
        glow: "rgba(245,158,11,0.55)",
        icon: "rgba(245,158,11,0.18)",
        iconHover: "rgba(245,158,11,0.32)",
    },
    {
        number: "#EF4444",
        glow: "rgba(239,68,68,0.55)",
        icon: "rgba(239,68,68,0.18)",
        iconHover: "rgba(239,68,68,0.32)",
    },
] as const;

export function Ip17FeatureCard({ feature, index }: FeatureCardProps) {
    const Icon = feature.icon;
    const accent = ACCENTS[index % ACCENTS.length];
    const numLabel = String(index + 1).padStart(2, "0");
    const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useFocusEffect({ maxAngle: 5 });

    return (
        <TooltipProvider delayDuration={200}>
            <div style={{ perspective: "700px" }} className="h-full">
                <motion.div
                    ref={ref}
                    className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6! cursor-pointer"
                    style={{
                        backgroundColor: "#111827",
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.08,
                        ease: "easeOut",
                    }}
                    whileHover="hovered"
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                >

                    <motion.div className="absolute inset-0 rounded-2xl border border-white/5" variants={{ hovered: { borderColor: `${accent.number}44` } }} transition={{ duration: 0.3 }} />

                    <motion.div
                        className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full"
                        style={{
                            background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)`,
                        }}
                        initial={{ opacity: 0, scale: 0.6 }}
                        variants={{ hovered: { opacity: 1, scale: 1.3 } }}
                        transition={{ duration: 0.45 }}
                    />

                    <div className="relative z-10 flex items-start justify-between">
                        <motion.div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: accent.icon }}
                            variants={{
                                hovered: {
                                    backgroundColor: accent.iconHover,
                                    scale: 1.1,
                                    rotate: -4,
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                type: "spring",
                                stiffness: 280,
                            }}
                        >
                            <Icon size={20} style={{ color: accent.number }} />
                        </motion.div>

                        {feature.badge && (
                            <span
                                className="shrink-0 rounded-full px-2! py-0.5! text-xs font-display font-bold uppercase tracking-wide text-white"
                                style={{
                                    backgroundColor: accent.number,
                                }}
                            >
                                {feature.badge}
                            </span>
                        )}
                    </div>
                    <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-1.5">
                        <motion.h4 className="text-sm font-display font-bold leading-snug text-white sm:text-base" variants={{ hovered: { color: accent.number } }} transition={{ duration: 0.25 }}>
                            {feature.title}
                        </motion.h4>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="line-clamp-4 cursor-default text-xs leading-relaxed text-text-primary sm:text-sm">{feature.description}</p>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-60 rounded-lg border border-white/10 bg-gray-900 text-xs leading-relaxed text-gray-100">
                                {feature.description}
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <motion.span
                        className="pointer-events-none absolute bottom-2 right-3 select-none text-7xl font-display font-black leading-none"
                        style={{ color: `${accent.number}22` }}
                        variants={{
                            hovered: {
                                color: `${accent.number}99`,
                                textShadow: `0 0 32px ${accent.glow}`,
                                scale: 1.08,
                            },
                        }}
                        transition={{ duration: 0.35 }}
                    >
                        {numLabel}
                    </motion.span>
                </motion.div>
            </div>
        </TooltipProvider>
    );
}
