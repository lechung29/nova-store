/** @format */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import categoryShowcase from "@/data/categoryshowcase.json";
import { CategoryCardFeatures } from "./CategoryCardFeatures";

interface CategoryCardProps {
    category: (typeof categoryShowcase)[0];
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 px-8! py-8! transition-all duration-300 hover:border-white/16 bg-linear-to-br ${category.gradient}`}
            style={{ minHeight: 240 }}
        >
            <div
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-10 blur-3xl transition-opacity duration-500 -translate-y-1/3 translate-x-1/3 group-hover:opacity-20"
                style={{ background: category.accentColor }}
            />

            <div className="relative z-10 flex flex-1 flex-col gap-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <motion.div whileHover={{ scale: 1.1 }} className="mb-3! shrink-0">
                                <img src={category.src} alt={category.name} width={60} height={60} />
                            </motion.div>
                            <h3 className="text-3xl font-display font-extrabold text-white sm:text-4xl">{category.name}</h3>
                        </div>
                        <p className="mt-1! text-base text-text-primary">{category.description}</p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 45 }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-text-primary transition-all group-hover:border-white/30 group-hover:text-white"
                    >
                        <ArrowUpRight size={16} />
                    </motion.div>
                </div>

                <div className="mt-auto!">
                    <CategoryCardFeatures category={category} />
                </div>
            </div>
        </motion.div>
    );
}
