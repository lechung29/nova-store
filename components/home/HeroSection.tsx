/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const bgImages = [
    { src: "/ip17_orange_logo.png", label: "iPhone 17 Pro Max" },
    { src: "/ipad_pro_2018_logo.png", label: "iPad Pro 2018" },
    { src: "/airpod_logo.png", label: "AirPods" },
    { src: "/apple_watch_11_logo.png", label: "Apple Watch 11" },
];

const INTERVAL = 5000;

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % bgImages.length);
        }, INTERVAL);

        return () => window.clearInterval(id);
    }, []);

    return (
        <section ref={ref} className="relative isolate min-h-screen overflow-hidden bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-black" />

            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, #2997ff 0%, transparent 70%)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, #bf5af2 0%, transparent 70%)" }} />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 opacity-10 blur-[120px]"
                    style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }}
                />
            </motion.div>

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="absolute inset-0 md:hidden overflow-hidden">
                <AnimatePresence mode="sync">
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                        <Image
                            src={bgImages[index].src}
                            alt={bgImages[index].label}
                            fill
                            priority
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-contain scale-100 opacity-90 blur-[2px] drop-shadow-[0_0_80px_rgba(41,151,255,0.35)]"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black" />
            </div>

            <motion.div
                style={{ opacity }}
                className="
                    relative z-10 w-full max-w-7xl mx-auto px-6! sm:px-10!
                    flex flex-col md:flex-row
                    items-center justify-between
                    gap-10 md:gap-12
                    pb-20! sm:pb-28!
                    pt-20! sm:pt-10!
                    min-h-screen
                "
            >
                <div className="relative hidden md:flex w-full md:w-1/2 flex-col items-center justify-center">
                    <div className="relative w-84 h-100 sm:w-92 sm:h-120">
                        <AnimatePresence mode="sync">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.93 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.04 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={bgImages[index].src}
                                    alt={bgImages[index].label}
                                    fill
                                    priority
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-contain drop-shadow-[0_40px_80px_rgba(41,151,255,0.25)]"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-2">
                        {bgImages.map((_, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Chọn hình ${i + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className={`rounded-full transition-all duration-300 ${i === index ? "w-6 h-1.75 bg-white" : "w-1.75 h-1.75 bg-white/25 hover:bg-white/50 cursor-pointer"}`}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="
                        relative z-20
                        w-full md:w-1/2
                        flex flex-col
                        items-center md:items-start
                        text-center md:text-left
                    "
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="
                            relative inline-flex items-center gap-2
                            px-4! sm:px-5! py-2!
                            rounded-full
                            border border-white/10
                            bg-white/4
                            backdrop-blur-2xl
                            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                            overflow-hidden
                            mb-6! sm:mb-8!
                            max-w-full
                        "
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-white/8 via-white/2 to-white/6 opacity-80" />
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#2997ff]/20 blur-3xl rounded-full" />
                        <Sparkles size={16} className="relative z-10 text-text-primary" />
                        <span className="relative z-10 text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-text-primary uppercase">
                            iPhone 17 Pro Max — Trải nghiệm ngay tại Nova Store
                        </span>
                        <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#2997ff] animate-pulse shadow-[0_0_12px_#2997ff]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="font-extrabold tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4!"
                    >
                        <span className="block silver-text uppercase">Nova Store</span>
                        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/70 mt-2">Tinh tế và khác biệt</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-[#ababab] text-sm sm:text-base md:text-lg max-w-md mb-5! leading-relaxed"
                    >
                        Khám phá iPhone, iPad, AirPods và Apple Watch chính hãng tại Nova Store Đà Nẵng — nơi công nghệ và phong cách hòa làm một.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        <Link href="/products">
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(41,151,255,0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center justify-center gap-2 cursor-pointer bg-white/90 hover:bg-text-primary text-black/70 hover:text-white/70 font-semibold text-base px-6! py-2.5! rounded-full transition-colors duration-200"
                            >
                                Mua ngay
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <Link href="/products?category=iphone">
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 cursor-pointer bg-white/8 hover:bg-white/14 text-white border border-white/15 font-semibold text-base px-6! py-2.5! rounded-full transition-all duration-200"
                            >
                                Khám phá iPhone
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex justify-center md:justify-start gap-6 sm:gap-10 pt-8! w-full">
                        {[
                            { value: "20+", label: "Sản phẩm" },
                            { value: "1K+", label: "Khách hàng" },
                            { value: "4.9★", label: "Đánh giá" },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center md:text-left">
                                <p className="font-extrabold text-2xl sm:text-3xl text-white">{value}</p>
                                <p className="text-text-primary text-sm sm:text-base mt-1!">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-text-primary text-xs tracking-widest uppercase">Khám phá</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-linear-to-b from-[#6e6e73] to-transparent" />
            </motion.div>
        </section>
    );
}
