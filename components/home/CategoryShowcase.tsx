/** @format */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import categoryShowcase from "@/data/categoryshowcase.json";

export function CategoryShowcase() {
    return (
        <section className="py-20! px-8! sm:px-16! relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto!">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14!">
                    <h2 className="font-extrabold text-4xl sm:text-5xl text-text-primary">Sản phẩm tại Nova Store</h2>
                    <p className="text-text-primary/90 text-lg max-w-lg mx-auto! mt-4!">Tất cả thiết bị Apple, một cửa hàng duy nhất.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {categoryShowcase.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link href={cat.href}>
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className={`relative p-8! rounded-3xl bg-linear-to-br ${cat.gradient} border border-white/8 hover:border-white/18 cursor-pointer overflow-hidden group transition-all duration-300`}
                                    style={{ minHeight: 240 }}
                                >
                                    <div
                                        className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/3 translate-x-1/3"
                                        style={{ background: cat.accentColor }}
                                    />

                                    <div className="relative z-10 flex flex-col h-full gap-6">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <motion.span className="text-5xl mb-3!" whileHover={{ scale: 1.1 }}>
                                                        <img src={cat.src} alt={cat.name} width={60} height={60} />
                                                    </motion.span>
                                                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">{cat.name}</h3>
                                                </div>
                                                <p className="text-text-primary text-base mt-1!">{cat.description}</p>
                                            </div>

                                            <motion.div
                                                whileHover={{ scale: 1.15, rotate: 45 }}
                                                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-text-primary group-hover:border-white/30 group-hover:text-white transition-all shrink-0"
                                            >
                                                <ArrowUpRight size={16} />
                                            </motion.div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className="flex flex-wrap gap-2">
                                                {cat.features.map((f) => (
                                                    <span
                                                        key={f}
                                                        className="text-sm font-semibold px-2.5! py-1! rounded-full"
                                                        style={{
                                                            background: `${cat.accentColor}15`,
                                                            color: cat.accentColor,
                                                            border: `1px solid ${cat.accentColor}25`,
                                                        }}
                                                    >
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
