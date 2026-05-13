/** @format */

"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Grid3X3, LayoutList, X, Search } from "lucide-react";
import { LuSearch } from "react-icons/lu";
import { useFilterStore } from "@/store/filterStore";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { ProductCardSkeleton } from "@/components/ui/index";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { IProduct } from "@/types";

interface ProductGridProps {
    products: IProduct[];
    loading?: boolean;
}

type GridCols = 2 | 3;

const SORT_LABELS: Record<string, string> = {
    newest: "Mới nhất",
    "price-asc": "Giá tăng dần",
    "price-desc": "Giá giảm dần",
    popular: "Phổ biến nhất",
};

export function ProductGrid({ products, loading }: ProductGridProps) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [gridCols, setGridCols] = useState<GridCols>(3);
    const contentRef = useRef<HTMLDivElement>(null);

    const { filters, setSearch, setSortBy } = useFilterStore();
    const filtered = useFilteredProducts(products, filters);

    const allSeries = useMemo(() => [...new Set(products.map((p) => p.series))], [products]);
    const allStorage = useMemo(() => [...new Set(products.flatMap((p) => p.storage))].sort(), [products]);
    const allColors = useMemo(() => {
        const map = new Map<string, string>();
        products.forEach((p) => p.colors.forEach((c) => map.set(c.name, c.hex)));
        return [...map.entries()].map(([name, hex]) => ({ name, hex }));
    }, [products]);

    function scrollToContent() {
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const gridClass = gridCols === 3 ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

    return (
        <div className="flex flex-col gap-6">
            <div ref={contentRef} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative flex-1 max-w-md">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-primary" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        value={filters.search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9! pr-9! py-2.5! bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-text-primary focus:outline-none focus:border-text-primary/50 focus:bg-white/8 transition-all"
                    />
                    {filters.search && (
                        <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-primary hover:text-white transition-colors cursor-pointer">
                            <X size={13} />
                        </button>
                    )}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 ml-auto!">
                    <Select value={filters.sortBy} onValueChange={(value) => setSortBy(value as typeof filters.sortBy)}>
                        <SelectTrigger className="w-auto bg-white/10 border-white/10 rounded-xl text-sm text-text-primary px-3! py-2.5! focus:ring-0 focus:border-text-primary/50 cursor-pointer">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent position="popper" className="bg-[#111] border-white/10 rounded-xl text-white!">
                            {Object.entries(SORT_LABELS).map(([value, label]) => (
                                <SelectItem key={value} value={value} className="text-sm px-3! py-1.5! focus:bg-white/70 focus:text-white! cursor-pointer rounded-lg">
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilterOpen(!filterOpen)}
                        className={`flex items-center gap-2 px-3.5! py-2.5! rounded-xl border text-sm font-semibold transition-all lg:hidden ${
                            filterOpen ? "bg-[#2997ff]/20 border-[#2997ff]/40 text-[#2997ff]" : "bg-white/6 border-white/10 text-text-primary hover:text-white"
                        }`}
                    >
                        <SlidersHorizontal size={14} />
                        Lọc
                    </motion.button>

                    <div className="hidden sm:flex items-center gap-1 bg-white/6 border border-white/10 rounded-xl p-1!">
                        {([3, 2] as const).map((cols) => (
                            <button
                                key={cols}
                                onClick={() => setGridCols(cols)}
                                className={`p-1.5! rounded-lg transition-all cursor-pointer ${gridCols === cols ? "bg-white/15 text-white" : "text-text-primary hover:text-white"}`}
                            >
                                {cols === 3 ? <Grid3X3 size={15} /> : <LayoutList size={15} />}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-text-primary text-sm">
                {loading ? (
                    "Đang tải..."
                ) : (
                    <>
                        <span className="text-white font-semibold">{filtered.length}</span> sản phẩm
                    </>
                )}
            </motion.p>

            <div className="flex gap-8">
                <div className="hidden lg:block w-56 shrink-0">
                    <div className="sticky top-20">
                        <ProductFilters onFocusWhenFilterChange={scrollToContent} category="all" allSeries={allSeries} allStorage={allStorage} allColors={allColors} />
                    </div>
                </div>

                <AnimatePresence>
                    {filterOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setFilterOpen(false)}
                                className="fixed inset-0 bg-black/70 z-40 lg:hidden"
                            />
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                className="fixed inset-y-0 left-0 w-72 bg-[#111] border-r border-white/10 z-50 overflow-y-auto p-6 lg:hidden"
                            >
                                <ProductFilters
                                    onFocusWhenFilterChange={scrollToContent}
                                    category="all"
                                    allSeries={allSeries}
                                    allStorage={allStorage}
                                    allColors={allColors}
                                    onClose={() => setFilterOpen(false)}
                                />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <div className="flex-1 min-w-0">
                    {loading ? (
                        <div className={`grid gap-5 ${gridClass}`}>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <ProductCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : filtered.length === 0 ? (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-24! text-center">
                            <LuSearch className="text-6xl mb-4!" />
                            <h3 className="font-display font-bold text-xl text-white mb-2!">Không tìm thấy sản phẩm</h3>
                            <p className="text-text-primary text-sm">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                        </motion.div>
                    ) : (
                        <motion.div layout className={`grid gap-5 ${gridClass}`}>
                            <AnimatePresence mode="popLayout">
                                {filtered.map((product, i) => (
                                    <motion.div key={product.id} layout>
                                        <ProductCard product={product} index={i} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
