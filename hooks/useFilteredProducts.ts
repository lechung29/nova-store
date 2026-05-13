/** @format */

import { useMemo } from "react";
import { getProductMinPrice } from "@/utils";
import type { FilterState, IProduct } from "@/types";

export function useFilteredProducts(products: IProduct[], filters: FilterState): IProduct[] {
    return useMemo(() => {
        let result = [...products];

        if (filters.search) {
            const query = filters.search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(query) ||
                    p.specs.chip.toLowerCase().includes(query) ||
                    p.series.toLowerCase().includes(query),
            );
        }

        if (filters.series.length > 0) {
            result = result.filter((p) => filters.series.includes(p.series));
        }

        if (filters.storage.length > 0) {
            result = result.filter((p) => p.storage.some((s) => filters.storage.includes(s)));
        }

        if (filters.colors.length > 0) {
            result = result.filter((p) => p.colors.some((c) => filters.colors.includes(c.name)));
        }

        result = result.filter((p) => {
            const minPrice = getProductMinPrice(p.variants);
            const maxPrice = Math.max(...p.variants.map((v) => v.price));
            return (
                (minPrice >= filters.minPrice && minPrice <= filters.maxPrice) ||
                (maxPrice >= filters.minPrice && maxPrice <= filters.maxPrice)
            );
        });

        switch (filters.sortBy) {
            case "newest":
                result.sort((a, b) => b.releaseYear - a.releaseYear);
                break;
            case "price-asc":
                result.sort((a, b) => getProductMinPrice(a.variants) - getProductMinPrice(b.variants));
                break;
            case "price-desc":
                result.sort((a, b) => getProductMinPrice(b.variants) - getProductMinPrice(a.variants));
                break;
            case "popular":
                result.sort((a, b) => b.reviewCount - a.reviewCount);
                break;
        }

        return result;
    }, [products, filters]);
}
