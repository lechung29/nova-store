/** @format */

"use client";

import { motion } from "framer-motion";
import { useFilterStore } from "@/store/filterStore";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { FilterHeader } from "./FilterHeader";
import { FilterSection } from "./FilterSection";
import { SeriesFilter } from "./SeriesFilter";
import { PriceFilter } from "./PriceFilter";
import { StorageFilter } from "./StorageFilter";
import { ColorFilter } from "./ColorFilter";
import { price_presets } from "@/utils/constants";

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

    const hasActiveFilters = filters.series.length > 0 || filters.storage.length > 0 || filters.colors.length > 0 || filters.minPrice > 0 || filters.maxPrice < 50000000;

    const handleToggleSeries = (series: string) => {
        toggleSeries(series);
        onFocusWhenFilterChange?.();
    };

    const handleToggleStorage = (storage: string) => {
        toggleStorage(storage);
        onFocusWhenFilterChange?.();
    };

    const handleToggleColor = (color: string) => {
        toggleColor(color);
        onFocusWhenFilterChange?.();
    };

    const handleSetMinPrice = (min: number) => {
        setMinPrice(min);
        onFocusWhenFilterChange?.();
    };

    const handleSetMaxPrice = (max: number) => {
        setMaxPrice(max);
        onFocusWhenFilterChange?.();
    };

    const handleResetFilters = () => {
        resetFilters();
        onFocusWhenFilterChange?.();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn("flex flex-col space-y-6! h-full lg:rounded-2xl bg-white/10 p-6! pr-2! shadow-lg backdrop-blur-3xl", className)}
        >
            <FilterHeader hasActiveFilters={hasActiveFilters} onReset={handleResetFilters} onClose={onClose} />
            <ScrollArea className="h-[calc(100vh-8rem)] lg:h-[calc(100vh-12rem)]">
                <div className="space-y-0 pr-4!">
                    <FilterSection title="Dòng sản phẩm">
                        <SeriesFilter series={allSeries} selectedSeries={filters.series} onToggle={handleToggleSeries} />
                    </FilterSection>
                    <FilterSection title="Khoảng giá">
                        <PriceFilter minPrice={filters.minPrice} maxPrice={filters.maxPrice} onMinChange={handleSetMinPrice} onMaxChange={handleSetMaxPrice} pricePresets={price_presets} />
                    </FilterSection>
                    <FilterSection title="Dung lượng">
                        <StorageFilter storage={allStorage} selectedStorage={filters.storage} onToggle={handleToggleStorage} />
                    </FilterSection>
                    <FilterSection title="Màu sắc">
                        <ColorFilter colors={allColors.slice(0, 12)} selectedColors={filters.colors} onToggle={handleToggleColor} />
                    </FilterSection>
                </div>
                <ScrollBar className="pl-2!" />
            </ScrollArea>
        </motion.div>
    );
}
