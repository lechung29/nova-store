/** @format */

"use client";

import { useMemo } from "react";
import newSeries from "@/data/newseries.json";
import topSale from "@/data/topsale.json";
import type { IProduct } from "@/types";
import { SectionHeader } from "./HeaderSection";
import { ProductGrid } from "./ProductGrid";

const FEATURED_LIMIT = 6;

export function FeaturedProducts() {
    const featured = useMemo(() => {
        return (newSeries as IProduct[]).filter((product) => product.isFeatured || product.isNew).slice(0, FEATURED_LIMIT);
    }, []);

    return (
        <section className="px-8! py-20! sm:px-16!">
            <div className="mx-auto! pb-30! max-w-7xl space-y-10!">
                <SectionHeader title="Series sản phẩm iPhone 17" viewAllHref="/san-pham?loai-san-pham=iphone" />
                <ProductGrid products={featured} />
            </div>
            <div className="mx-auto! max-w-7xl space-y-10!">
                <SectionHeader title="Top sản phẩm bán chạy nhất"/>
                <ProductGrid products={topSale as IProduct[]} />
            </div>
        </section>
    );
}
