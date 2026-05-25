/** @format */

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useFilterStore } from "@/store/filterStore";
import Link from "next/link";
import { all_products } from "@/utils";
import { sort_map, category_filters } from "@/utils/constants";
import { BackgroundDecor } from "@/components/policy";

export function ProductsClient() {
    const searchParams = useSearchParams();
    const category = searchParams.get("loai-san-pham") || "all";
    const sortParam = searchParams.get("sort");
    const { filters, setSearch, setCategory, setSortBy, resetFilters } = useFilterStore();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setCategory(category);
        if (sortParam && sort_map[sortParam]) {
            setSortBy(sort_map[sortParam]);
        }
    }, [category, sortParam, setCategory, setSortBy]);

    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            return;
        } else {
            resetFilters();
        }

        // const savedSearch = filters.search;
        // resetFilters();
        // if (savedSearch) setSearch(savedSearch);
    }, [category, resetFilters]);

    const products = useMemo(() => (category === "all" ? all_products : all_products.filter((p) => p.category === category)), [category]);

    const categoryLabel = category_filters.find((c) => c.key === category)?.label || "Sản phẩm";

    return (
        <div className="min-h-screen px-2! sm:px-8!">
            <BackgroundDecor />
            <div className="relative overflow-hidden py-12! px-4!">
                <div
                    className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-75 w-150 opacity-15 blur-[100px]"
                    style={{ background: "radial-gradient(ellipse, #2997ff 0%, transparent 70%)" }}
                />
                <div className="relative z-10 mx-auto! max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="mb-6! flex flex-wrap items-center gap-2">
                            {category_filters.map(({ key, label }) => (
                                <Link key={key} href={`/san-pham${key !== "all" ? `?loai-san-pham=${key}` : ""}`}>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`rounded-full border px-4! py-1.5! text-base font-display font-semibold cursor-pointer transition-all ${
                                            category === key
                                                ? "border-white bg-white text-black/80"
                                                : "border-white/10 bg-white/6 text-text-primary hover:border-white/20 hover:bg-white/12 hover:text-white"
                                        }`}
                                    >
                                        {label}
                                    </motion.button>
                                </Link>
                            ))}
                        </div>
                        <h1 className="mb-3! text-4xl font-display font-extrabold text-white sm:text-5xl">{categoryLabel}</h1>
                        <p className="text-base text-text-primary">{products.length} sản phẩm chính hãng · Bảo hành Apple 12 tháng</p>
                    </motion.div>
                </div>
            </div>
            <div className="mx-auto! max-w-7xl px-4! py-10!">
                <ProductGrid products={products} />
            </div>
        </div>
    );
}
