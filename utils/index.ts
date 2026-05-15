/** @format */

import type { CartItem, IProductVariant, IVariantImage } from "@/types";
import type { IProduct } from "@/types";
import iphones from "@/data/iphones.json";
import ipads from "@/data/ipads.json";
import airpods from "@/data/airpods.json";
import watches from "@/data/applewatch.json";

export const all_products = [...(iphones as IProduct[]), ...(ipads as IProduct[]), ...(airpods as IProduct[]), ...(watches as IProduct[])];

export function getRelatedProducts(product: IProduct): IProduct[] {
    const sameSeries = all_products.filter((p) => p.category === product.category && p.series === product.series && p.id !== product.id).slice(0, 4);

    if (sameSeries.length >= 4) return sameSeries;

    const sameCategory = all_products.filter((p) => p.category === product.category && p.series !== product.series).slice(0, 4 - sameSeries.length);

    return [...sameSeries, ...sameCategory];
}

export const formatVND = (price: number | string): string => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(Number(price));
};

export const formatPriceToM = (price: number): string => {
    if (!price) return "0đ";

    if (price >= 1_000_000) {
        const value = price / 1_000_000;
        return `${Number.isInteger(value) ? value : value.toFixed(1)}M`;
    }

    return `${price.toLocaleString("vi-VN")}đ`;
};

export const findVariant = (variants: IProductVariant[], color: string, storage: string): IProductVariant | undefined => {
    return variants.find((v) => v.color === color && v.storage === storage);
};

export const getProductMinPrice = (variants: IProductVariant[]): number => {
    return Math.min(...variants.map((v) => v.price));
};

export const getColorImageArray = (variants: { color: string; image: IVariantImage }[]): { key: string; value: IVariantImage }[] => {
    const seen = new Map<string, IVariantImage>();

    for (const { color, image } of variants) {
        if (!seen.has(color)) seen.set(color, image);
    }

    return Array.from(seen.entries()).map(([key, value]) => ({ key, value }));
};

export const getItemVariant = (item: CartItem) => findVariant(item.product.variants, item.selectedColor.name, item.selectedStorage);

export const getItemPrice = (item: CartItem) => getItemVariant(item)?.price ?? 0;

export const getItemImage = (item: CartItem) => getItemVariant(item)?.image;

export const getCartItemKey = (item: CartItem) => `${item.product.id}-${item.selectedColor.name}-${item.selectedStorage}`;
