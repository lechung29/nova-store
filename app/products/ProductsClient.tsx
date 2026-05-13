/** @format */

"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useFilterStore } from "@/store/filterStore";
import iphones from "@/data/iphones.json";
import ipads from "@/data/ipads.json";
import airpods from "@/data/airpods.json";
import watches from "@/data/applewatch.json";
import type { IProduct } from "@/types";
import Link from "next/link";

const allProducts = [...(iphones as IProduct[]), ...(ipads as IProduct[]), ...(airpods as IProduct[]), ...(watches as IProduct[])];

const CATEGORY_LABELS: Record<string, string> = {
    all: "Tất cả sản phẩm",
    iphone: "iPhone",
    ipad: "iPad",
    airpods: "AirPods",
    watch: "Apple Watch",
};

export function ProductsClient() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "all";
    const sortParam = searchParams.get("sort");
    const [isChangeCategory, setIsChangeCategory] = useState(false);
    const { setCategory, setSortBy, resetFilters } = useFilterStore();

    useEffect(() => {
        setCategory(category);
        if (sortParam === "discount") setSortBy("price-asc");
        else if (sortParam === "popular") setSortBy("popular");
    }, [category, sortParam, setCategory, setSortBy]);

    useEffect(() => {
        resetFilters();
        setIsChangeCategory(true);
    }, [category]);

    const products = useMemo(() => {
        if (category === "all") return allProducts;
        return allProducts.filter((p) => p.category === category);
    }, [category]);

    return (
        <div className="min-h-screen sm:px-8! px-2!">
            <div className="relative py-12! px-4! overflow-hidden">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 opacity-15 blur-[100px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, #2997ff 0%, transparent 70%)" }}
                />
                <div className="max-w-7xl mx-auto! relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 flex-wrap mb-6!">
                            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                                <Link key={key} href={`/products${key !== "all" ? `?category=${key}` : ""}`}>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`px-4! py-1.5! rounded-full text-base font-display font-semibold transition-all border cursor-pointer ${
                                            category === key ? "bg-white text-black/80 border-white" : "bg-white/6 text-text-primary border-white/10 hover:bg-white/12 hover:text-white"
                                        }`}
                                    >
                                        {label}
                                    </motion.button>
                                </Link>
                            ))}
                        </div>
                        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-3!">{CATEGORY_LABELS[category] || "Sản phẩm"}</h1>
                        <p className="text-text-primary text-base">{products.length} sản phẩm chính hãng · Bảo hành Apple 12 tháng</p>
                    </motion.div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto! px-4! py-10!">
                <ProductGrid products={products} />
            </div>
        </div>
    );
}
