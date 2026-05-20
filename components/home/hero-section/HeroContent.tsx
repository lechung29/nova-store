/** @format */

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface HeroContentProps {
    imageIndex: number;
    animationEase: readonly [number, number, number, number];
    stats: readonly { value: string; label: string }[];
}

export function HeroContent({ animationEase, stats }: HeroContentProps) {
    return (
        <div className="relative z-20 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-6! flex w-full max-w-full items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/4 px-4! py-2! shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:mb-8! sm:inline-flex sm:w-auto sm:px-5!"
            >
                <div className="absolute inset-0 bg-linear-to-r from-white/8 via-white/2 to-white/6 opacity-80" />
                <div className="absolute -top-10 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
                <Sparkles size={16} className="relative z-10 text-text-primary" />
                <span className="relative z-10 truncate text-xs font-display font-semibold uppercase tracking-[0.16em] text-text-primary sm:tracking-[0.18em]">
                    iPhone 17 Pro Max — Trải nghiệm ngay tại Nova Store
                </span>
                <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_#2997ff]" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: animationEase }}
                className="mb-4! text-4xl font-display font-extrabold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl"
            >
                <span className="block uppercase silver-text">Nova Store</span>
                <span className="mt-2 block text-2xl text-white/70 sm:text-3xl md:text-4xl lg:text-5xl">Tinh tế và khác biệt</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-5! max-w-md text-sm leading-relaxed text-white/70 sm:text-base md:text-lg"
            >
                Khám phá iPhone, iPad, AirPods và Apple Watch chính hãng tại Nova Store Đà Nẵng — nơi công nghệ và phong cách hòa làm một.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8! flex w-full flex-row items-center justify-center gap-3 sm:w-auto sm:gap-4"
            >
                <Link href="/san-pham">
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(41,151,255,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white/90 px-6! py-2.5! text-base font-display font-semibold text-black/70 transition-colors duration-200 hover:bg-text-primary hover:text-white/70"
                    >
                        Mua ngay
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </Link>

                <Link href="/san-pham?loai-san-pham=iphone">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6! py-2.5! text-base font-display font-semibold text-white transition-all duration-200 hover:bg-white/14"
                    >
                        Khám phá iPhone
                    </motion.button>
                </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex w-full justify-center gap-6 pt-8! md:justify-start sm:gap-10">
                {stats.map(({ value, label }) => (
                    <div key={label} className="text-center md:text-left">
                        <p className="text-2xl font-display font-extrabold text-white sm:text-3xl">{value}</p>
                        <p className="mt-1! text-sm text-text-primary sm:text-base">{label}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
