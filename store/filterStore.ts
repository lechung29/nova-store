/** @format */

import { create } from "zustand";
import type { FilterState } from "@/types";

interface FilterStore {
    filters: FilterState;
    setSearch: (search: string) => void;
    toggleSeries: (series: string) => void;
    toggleStorage: (storage: string) => void;
    toggleColor: (color: string) => void;
    setMinPrice: (min: number) => void;
    setMaxPrice: (max: number) => void;
    setSortBy: (sort: FilterState["sortBy"]) => void;
    setCategory: (category: string) => void;
    resetFilters: () => void;
}

const DEFAULT_FILTERS: FilterState = {
    series: [],
    minPrice: 0,
    maxPrice: 50000000,
    storage: [],
    colors: [],
    sortBy: "newest",
    search: "",
    category: "all",
};

const toggleArrayItem = (arr: string[], item: string): string[] =>
    arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];

export const useFilterStore = create<FilterStore>()((set) => ({
    filters: DEFAULT_FILTERS,

    setSearch: (search) =>
        set((s) => ({ filters: { ...s.filters, search } })),

    toggleSeries: (series) =>
        set((s) => ({ filters: { ...s.filters, series: toggleArrayItem(s.filters.series, series) } })),

    toggleStorage: (storage) =>
        set((s) => ({ filters: { ...s.filters, storage: toggleArrayItem(s.filters.storage, storage) } })),

    toggleColor: (color) =>
        set((s) => ({ filters: { ...s.filters, colors: toggleArrayItem(s.filters.colors, color) } })),

    setMinPrice: (minPrice) =>
        set((s) => ({ filters: { ...s.filters, minPrice } })),

    setMaxPrice: (maxPrice) =>
        set((s) => ({ filters: { ...s.filters, maxPrice } })),

    setSortBy: (sortBy) =>
        set((s) => ({ filters: { ...s.filters, sortBy } })),

    setCategory: (category) =>
        set((s) => ({ filters: { ...s.filters, category } })),

    resetFilters: () => set({ filters: DEFAULT_FILTERS }),
}));
