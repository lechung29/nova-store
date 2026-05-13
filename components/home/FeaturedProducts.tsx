/** @format */

"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionTitle } from "@/components/ui/index";

import newSeries from "@/data/newseries.json";
import type { IProduct } from "@/types";

export function FeaturedProducts() {
    const featured = useMemo(() => {
        const all = [...(newSeries as IProduct[])];
        return all.filter((p) => p.isFeatured || p.isNew).slice(0, 6);
    }, []);

    return (
        <section className="py-20! px-8! sm:px-16!">
            <div className="max-w-7xl mx-auto space-y-10!">
                <div>
                    <div className="flex items-end justify-between mb-10!">
                        <SectionTitle title="Series sản phẩm iPhone 17" align="left" />
                        <Link href="/products">
                            <motion.button
                                whileHover={{ x: 4 }}
                                className="hidden sm:flex items-center gap-2 text-base text-text-primary hover:text-white font-display font-semibold transition-colors cursor-pointer"
                            >
                                Xem tất cả <ArrowRight size={14} />
                            </motion.button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {featured.map((product, i) => (
                            <ProductCard key={product.id} product={product} index={i} />
                        ))}
                    </div>
                    <div className="mt-6! sm:hidden flex justify-center">
                        <Link href="/products">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 text-text-primary hover:text-white text-base font-display font-semibold px-6! py-2.5! rounded-full cursor-pointer"
                            >
                                Xem tất cả sản phẩm <ArrowRight size={14} />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
