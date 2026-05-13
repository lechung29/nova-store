/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentlyViewedStore {
    items: string[];
    addItem: (slug: string) => void;
    clear: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
    persist(
        (set) => ({
            items: [],

            addItem: (slug) =>
                set((s) => ({
                    items: [slug, ...s.items.filter((x) => x !== slug)].slice(0, 8),
                })),

            clear: () => set({ items: [] }),
        }),
        { name: "apple-store-recently-viewed" },
    ),
);
