/** @format */

import { motion } from "framer-motion";
import { Shield, Clock } from "lucide-react";
import { BackgroundDecor } from "./BackgroundDecor";

interface HeroStat {
    icon: typeof Clock;
    label: string;
    sub: string;
}

interface HeroSectionProps {
    stats: readonly HeroStat[];
}

export function HeroSection({ stats }: HeroSectionProps) {
    return (
        <section className="relative mx-auto!">
            <BackgroundDecor />

            <div className="relative z-10 mx-auto! px-6! text-center">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6! inline-flex items-center gap-2! rounded-full border border-blue-500/25 bg-blue-500/8 px-4! py-1.5! text-sm font-display font-semibold uppercase tracking-widest text-white/80"
                >
                    <Shield size={12} />
                    Cam kết của Nova Store
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mb-3! text-4xl font-display font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
                >
                    Chính sách <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">bán hàng</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto! max-w-xl text-base leading-relaxed text-text-primary"
                >
                    Minh bạch — Rõ ràng — Bảo vệ quyền lợi khách hàng trước tiên.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-10! flex flex-wrap justify-center gap-4!">
                    {stats.map(({ icon: Icon, label, sub }) => (
                        <div key={label} className="flex w-full max-w-35 items-center gap-3! rounded-2xl border border-white/8 bg-white/3 px-5! py-4!">
                            <Icon size={16} className="shrink-0 text-blue-500" />
                            <div className="text-left">
                                <p className="leading-none text-base font-display font-bold text-text-primary">{label}</p>
                                <p className="mt-0.5! text-sm text-text-primary">{sub}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
