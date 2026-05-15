/** @format */

import { LucideIcon } from "lucide-react";

export interface IProductColor {
    id: string;
    name: string;
    hex: string;
}

export interface IVariantImage {
    id: string;
    url: string;
    alt: string;
}

export interface IProductVariant {
    color: string;
    storage: string;
    price: number;
    oldPrice: number;
    image: IVariantImage;
}

export interface IProductSpecs {
    chip: string;
    battery: string;
    display: string;
    camera: string;
    ram: string;
    weight: string;
    waterResistance: string;
    connectivity: string;
}

export interface IProduct {
    id: string;
    name: string;
    slug: string;
    colors: IProductColor[];
    storage: string[];
    variants: IProductVariant[];
    specs: IProductSpecs;
    description: string;
    shortDescription: string;
    rating: number;
    reviewCount: number;
    category: "iphone" | "ipad" | "airpods" | "watch";
    series: string;
    isNew: boolean;
    isTrending: boolean;
    isFeatured: boolean;
    discount?: number;
    badge: string | null;
    releaseYear: number;
}

export interface CartItem {
    product: IProduct;
    quantity: number;
    selectedColor: IProductColor;
    selectedStorage: string;
}

export interface FilterState {
    series: string[];
    minPrice: number;
    maxPrice: number;
    storage: string[];
    colors: string[];
    sortBy: "newest" | "price-asc" | "price-desc" | "popular";
    search: string;
    category: string;
}

export interface ReviewItem {
    id: string;
    name: string;
    location: string;
    avatar: string;
    rating: number;
    product: string;
    review: string;
    date: string;
    verified: boolean;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface Ip17Feature {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    badge?: string;
}

export interface Ip17FeaturedCard {
    icon: LucideIcon;
    title: string;
    description: string;
    accentColor: string;
}
