/** @format */

"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3, LayoutList } from "lucide-react";
import { useFilterStore } from "@/store/filterStore";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { ProductCardSkeleton } from "@/components/ui/index";
import type { IProduct } from "@/types";
import { SearchBar } from "./SearchBar";
import { SortDropdown } from "./SortDropdown";
import { MobileFilterButton } from "./MobileFilterButton";
import { grid_col_options, sort_options } from "@/utils/constants";
import { GridToggle } from "./GridToggle";
import { MobileFilterSheet } from "./MobileFilterSheet";
import { EmptyState } from "./EmptyState";

interface ProductGridProps {
    products: IProduct[];
    loading?: boolean;
}

type GridCols = 2 | 3;

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

    const handleScrollToContent = () => {
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const gridClass = gridCols === 3 ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

    return (
        <div className="flex flex-col gap-6">
            <div ref={contentRef} className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <SearchBar value={filters.search} onChange={setSearch} />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="ml-auto! flex items-center gap-2">
                    <SortDropdown value={filters.sortBy} onSort={setSortBy} options={sort_options} />
                    <MobileFilterButton isOpen={filterOpen} onClick={() => setFilterOpen(!filterOpen)} />
                    <GridToggle gridCols={gridCols} onGridChange={setGridCols} options={grid_col_options} />
                </motion.div>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm text-text-primary">
                {loading ? (
                    "Đang tải..."
                ) : (
                    <>
                        <span className="font-display font-semibold text-white">{filtered.length}</span> sản phẩm
                    </>
                )}
            </motion.p>

            <div className="flex gap-8">
                <div className="hidden w-56 shrink-0 lg:block">
                    <div className="sticky top-20">
                        <ProductFilters onFocusWhenFilterChange={handleScrollToContent} category="all" allSeries={allSeries} allStorage={allStorage} allColors={allColors} />
                    </div>
                </div>

                <MobileFilterSheet
                    isOpen={filterOpen}
                    onClose={() => setFilterOpen(false)}
                    allSeries={allSeries}
                    allStorage={allStorage}
                    allColors={allColors}
                    onFilterChange={handleScrollToContent}
                />

                <div className="min-w-0 flex-1">
                    {loading ? (
                        <div className={`grid gap-5 ${gridClass}`}>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <ProductCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : filtered.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <motion.div layout className={`grid gap-5 ${gridClass}`}>
                            <AnimatePresence mode="popLayout">
                                {filtered.map((product, index) => (
                                    <motion.div key={product.id} layout>
                                        <ProductCard product={product} index={index} />
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
