/** @format */

import type { IProductVariant, IVariantImage } from "@/types";

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
