/** @format */

import type { IProduct } from "@/types";

interface ProductDescriptionProps {
    product: IProduct;
}

export function ProductDescription({ product }: ProductDescriptionProps) {
    return (
        <div className="max-w-3xl mt-14!">
            <h2 className="pb-4! text-2xl font-bold border-b border-white/8 text-text-primary mb-4! font-display">Mô tả sản phẩm</h2>
            <p className="text-base leading-relaxed text-text-primary">{product.description}</p>
        </div>
    );
}
