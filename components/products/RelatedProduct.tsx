/** @format */

import type { IProduct } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";

interface RelatedProductsProps {
    products: IProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <div className="mt-20!">
            <h2 className="mb-8! text-2xl font-bold text-text-primary font-display">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                ))}
            </div>
        </div>
    );
}
