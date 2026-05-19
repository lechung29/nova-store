/** @format */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import type { policies } from "@/data/policy";

interface PolicyCardProps {
    policy: (typeof policies)[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
    cardRef: (el: HTMLDivElement | null) => void;
}

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = require("react").useRef(null);
    const inView = require("framer-motion").useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}

export function PolicyCard({ policy, index, isOpen, onToggle, cardRef }: PolicyCardProps) {
    const Icon = policy.icon;

    return (
        <SectionReveal delay={index * 0.07}>
            <div
                ref={cardRef}
                className="scroll-mt-28! overflow-hidden rounded-2xl border bg-black/40 transition-all duration-300"
                style={{
                    borderColor: isOpen ? `${policy.accent}30` : "rgba(255,255,255,0.06)",
                    boxShadow: isOpen ? `0 0 40px ${policy.accent}0d` : "none",
                }}
            >
                <button onClick={onToggle} className="group flex w-full cursor-pointer items-center gap-4! px-6! py-5! text-left">
                    <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
                        style={{ background: `${policy.accent}18`, border: `1px solid ${policy.accent}30` }}
                    >
                        <Icon size={24} style={{ color: policy.accent }} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <span className="mb-0.5! block text-sm font-display font-semibold uppercase tracking-widest" style={{ color: policy.accent }}>
                            {policy.label}
                        </span>
                        <h3 className="text-base font-display font-bold leading-tight text-white">{policy.title}</h3>
                        {!isOpen && <p className="mt-1.5! line-clamp-1 text-sm text-text-primary">{policy.summary}</p>}
                    </div>

                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-text-primary transition-colors group-hover:text-white">
                        <ChevronDown size={18} />
                    </motion.div>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="mx-6! mb-6! rounded-xl border border-white/5 bg-white/2.5 p-5!">
                                <ul className="space-y-3.5!">
                                    {policy.items.map((item, itemIdx) => (
                                        <motion.li
                                            key={itemIdx}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: itemIdx * 0.05, duration: 0.3 }}
                                            className="flex gap-3!"
                                        >
                                            <div className="mt-0.5! shrink-0">
                                                {item.type === "main" ? (
                                                    <CheckCircle2 size={15} style={{ color: policy.accent }} />
                                                ) : (
                                                    <div className="mt-1.25! h-1.5 w-1.5 rounded-full opacity-60" style={{ background: policy.accent }} />
                                                )}
                                            </div>
                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{
                                                    color: item.type === "main" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
                                                    fontWeight: item.type === "main" ? 500 : 400,
                                                }}
                                            >
                                                {item.text}
                                            </p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SectionReveal>
    );
}
