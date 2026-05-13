/** @format */

"use client";

import { motion } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import { useFilterStore } from "@/store/filterStore";
import { cn } from "@/lib/utils";
import { formatPriceToM } from "@/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface ProductFiltersProps {
    category: "iphone" | "ipad" | "all";
    allSeries: string[];
    allStorage: string[];
    allColors: { name: string; hex: string }[];
    onClose?: () => void;
    className?: string;
    onFocusWhenFilterChange?: () => void;
}

export function ProductFilters({ allSeries, allStorage, allColors, onClose, className, onFocusWhenFilterChange }: ProductFiltersProps) {
    const { filters, toggleSeries, toggleStorage, toggleColor, setMinPrice, setMaxPrice, resetFilters } = useFilterStore();

    const onToggleSeries = (series: string) => {
        toggleSeries(series);
        onFocusWhenFilterChange?.();
    };

    const onToggleStorage = (storage: string) => {
        toggleStorage(storage);
        onFocusWhenFilterChange?.();
    };

    const onToggleColor = (color: string) => {
        toggleColor(color);
        onFocusWhenFilterChange?.();
    };

    const onSetMinPrice = (min: number) => {
        setMinPrice(min);
        onFocusWhenFilterChange?.();
    };

    const onSetMaxPrice = (max: number) => {
        setMaxPrice(max);
        onFocusWhenFilterChange?.();
    };

    const onResetFilters = () => {
        resetFilters();
        onFocusWhenFilterChange?.();
    };

    const hasActiveFilters = filters.series.length > 0 || filters.storage.length > 0 || filters.colors.length > 0 || filters.minPrice > 0 || filters.maxPrice < 50000000;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn("space-y-6 p-6! pr-2! rounded-2xl bg-white/10 backdrop-blur-3xl shadow-lg", className)}
        >
            <div className="flex items-center justify-between pb-4!">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                        <SlidersHorizontal size={18} className="text-text-primary" />
                    </div>
                    <p className="text-sm uppercase text-white/60 tracking-wide font-semibold">Bộ lọc</p>
                </div>
                <div className="flex items-center gap-2">
                    {hasActiveFilters && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onResetFilters}
                            className="text-xs cursor-pointer hover:text-white text-text-primary/90 px-3! py-1.5! rounded-lg transition-all font-semibold"
                        >
                            Xóa tất cả
                        </motion.button>
                    )}
                    {onClose && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                        >
                            <X size={18} />
                        </motion.button>
                    )}
                </div>
            </div>
            <ScrollArea className="h-[calc(100vh-12rem)] pr-4!">
                <ScrollBar className="pl-2!" />
                <FilterSection title="Dòng sản phẩm">
                    <div className="space-y-2.5!">
                        {allSeries.map((s) => (
                            <motion.label key={s} whileHover={{ x: 2 }} className="flex items-center gap-3 group">
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => onToggleSeries(s)}
                                    className={cn(
                                        "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all cursor-pointer shrink-0",
                                        filters.series.includes(s) ? "bg-text-primary/50 border-text-primary/30" : "border-gray-300 group-hover:border-gray-400 hover:bg-gray-50",
                                    )}
                                >
                                    {filters.series.includes(s) && (
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                    )}
                                </motion.div>
                                <span className={cn("text-sm font-medium transition-colors", filters.series.includes(s) ? "text-white" : "text-text-primary group-hover:text-text-primary/90")}>
                                    {s}
                                </span>
                            </motion.label>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection title="Khoảng giá">
                    <div className="space-y-4!">
                        <div className="flex items-center justify-between text-sm font-semibold text-white/70 bg-text-primary/30 p-3! rounded-lg">
                            <span>{formatPriceToM(filters.minPrice)}</span>
                            <span className="text-black font-bold">→</span>
                            <span>{formatPriceToM(filters.maxPrice)}</span>
                        </div>
                        <div className="space-y-4!">
                            <div>
                                <label className="text-xs text-white/70 mb-2! block font-semibold tracking-wider">Giá tối thiểu</label>
                                <input
                                    type="range"
                                    min={0}
                                    max={50000000}
                                    step={1000000}
                                    value={filters.minPrice}
                                    onChange={(e) => onSetMinPrice(Number(e.target.value))}
                                    className="w-full accent-text-primary h-2 rounded-lg appearance-none bg-gray-200 cursor-pointer"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-white/70 mb-2! block font-semibold tracking-wider">Giá tối đa</label>
                                <input
                                    type="range"
                                    min={0}
                                    max={50000000}
                                    step={1000000}
                                    value={filters.maxPrice}
                                    onChange={(e) => onSetMaxPrice(Number(e.target.value))}
                                    className="w-full accent-text-primary h-2 rounded-lg appearance-none bg-gray-200 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2!">
                            {[
                                { label: "Dưới 10tr", min: 0, max: 10000000 },
                                { label: "10-20tr", min: 10000000, max: 20000000 },
                                { label: "20-30tr", min: 20000000, max: 30000000 },
                                { label: "Trên 30tr", min: 30000000, max: 50000000 },
                            ].map(({ label, min, max }) => (
                                <motion.button
                                    key={label}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        setMinPrice(min);
                                        setMaxPrice(max);
                                        onFocusWhenFilterChange?.();
                                    }}
                                    className={cn(
                                        "text-xs py-1.5! rounded-xl cursor-pointer font-medium transition-all",
                                        filters.minPrice === min && filters.maxPrice === max ? "text-gray-900 bg-white" : "bg-text-primary/50 text-white/85 hover:text-gray-900 hover:bg-white",
                                    )}
                                >
                                    {label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </FilterSection>
                <FilterSection title="Dung lượng">
                    <div className="flex flex-wrap gap-2.5">
                        {allStorage.map((s) => (
                            <motion.button
                                key={s}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onToggleStorage(s)}
                                className={cn(
                                    "text-xs px-2! py-1.5! cursor-pointer rounded-xl font-medium transition-all",
                                    filters.storage.includes(s) ? "text-gray-900 bg-white" : "bg-text-primary/50 text-white/85 hover:text-gray-900 hover:bg-white",
                                )}
                            >
                                {s}
                            </motion.button>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection title="Màu sắc">
                    <div className="flex flex-wrap gap-3 px-1!">
                        {allColors.slice(0, 12).map((color) => (
                            <motion.button
                                key={color.name}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => onToggleColor(color.name)}
                                title={color.name}
                                className={cn(
                                    "w-8 h-8 rounded-full transition-all shadow-md",
                                    filters.colors.includes(color.name) ? "ring-2 ring-gray-900 ring-offset-2 ring-offset-white scale-110 shadow-lg" : "hover:scale-110 ring-1 ring-gray-300 shadow-sm",
                                )}
                                style={{ background: color.hex }}
                            />
                        ))}
                    </div>
                </FilterSection>
            </ScrollArea>
        </motion.div>
    );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-white/8 py-6!">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-text-primary/90 mb-5! flex items-center gap-2">
                <div className="w-1 h-3 bg-linear-to-b from-text-primary/90 to-text-primary/70 rounded-full" />
                {title}
            </h4>
            {children}
        </motion.div>
    );
}
