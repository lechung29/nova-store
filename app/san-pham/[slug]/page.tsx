/** @format */

"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { useRecentlyViewedStore } from "@/store";
import type { IProduct } from "@/types";
import { all_products, getRelatedProducts } from "@/utils";
import { ProductDescription, ProductGallery, ProductInfo, ProductSpecs, RelatedProducts } from "@/components/products";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
    const [slug, setSlug] = useState("");
    const [product, setProduct] = useState<IProduct | null>(null);
    const [selectedColorIdx, setSelectedColorIdx] = useState(0);
    const [selectedStorageIdx, setSelectedStorageIdx] = useState(0);
    const [imageKey, setImageKey] = useState("");
    const [addedToCart, setAddedToCart] = useState(false);
    const [specOpen, setSpecOpen] = useState(true);

    const { addItem } = useCartStore();
    const { addItem: addRecentlyViewed } = useRecentlyViewedStore();

    useEffect(() => {
        params.then(({ slug: s }) => {
            setSlug(s);
            const found = all_products.find((p) => p.slug === s);
            if (found) {
                setProduct(found);
                setSelectedColorIdx(0);
                setSelectedStorageIdx(0);
                setImageKey(found.colors[0].name);
                addRecentlyViewed(found.slug);
            }
        });
    }, [params, addRecentlyViewed]);

    if (slug && !product) return notFound();
    if (!product) return <div className="flex items-center justify-center min-h-screen pt-20! text-text-primary">Loading...</div>;

    const selectedColor = product.colors[selectedColorIdx];
    const selectedStorage = product.storage[selectedStorageIdx];
    const currentVariant = product.variants.find((v) => v.color === imageKey && v.storage === selectedStorage);
    const productPrice = currentVariant?.price ?? 0;
    const productOldPrice = currentVariant?.oldPrice;
    const relatedProducts = getRelatedProducts(product);

    const handleAddToCart = () => {
        addItem(product!, selectedColor, selectedStorage);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2500);
    };

    return (
        <div className="min-h-screen pt-10!">
            <div className="max-w-7xl mx-auto! px-4! sm:px-16! py-10!">
                <nav className="flex items-center gap-2 mb-8! text-base text-text-primary">
                    <a href="/" className="transition-colors hover:text-white">
                        Trang chủ
                    </a>
                    <span>/</span>
                    <a href="/san-pham" className="transition-colors hover:text-white">
                        Sản phẩm
                    </a>
                    <span>/</span>
                    <a href={`/san-pham?loai-san-pham=${product.category}`} className="capitalize transition-colors hover:text-white">
                        {product.category}
                    </a>
                    <span>/</span>
                    <span className="text-white">{product.name}</span>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-12">
                    <ProductGallery product={product} imageKey={imageKey} onImageKeyChange={setImageKey} currentVariant={currentVariant} />

                    <ProductInfo
                        product={product}
                        selectedColor={selectedColor}
                        selectedColorIdx={selectedColorIdx}
                        selectedStorage={selectedStorage}
                        selectedStorageIdx={selectedStorageIdx}
                        productPrice={productPrice}
                        productOldPrice={productOldPrice}
                        addedToCart={addedToCart}
                        onColorChange={setSelectedColorIdx}
                        onStorageChange={setSelectedStorageIdx}
                        onImageKeyChange={setImageKey}
                        onAddToCart={handleAddToCart}
                    />
                </div>

                <ProductSpecs product={product} specOpen={specOpen} onSpecOpenChange={setSpecOpen} />

                <ProductDescription product={product} />

                {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
            </div>
        </div>
    );
}
