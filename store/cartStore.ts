/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { findVariant } from "@/utils";
import type { CartItem, IProduct, IProductColor } from "@/types";

interface CartStore {
    items: CartItem[];
    isOpen: boolean;

    addItem: (product: IProduct, color: IProductColor, storage: string, quantity?: number) => void;
    removeItem: (productId: string, color: string, storage: string) => void;
    updateQuantity: (productId: string, color: string, storage: string, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const getItemKey = (productId: string, color: string, storage: string) =>
    `${productId}-${color}-${storage}`;

const getCartItemKey = (item: CartItem) =>
    getItemKey(item.product.id, item.selectedColor.name, item.selectedStorage);

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product, color, storage, quantity = 1) => {
                const key = getItemKey(product.id, color.name, storage);
                const exists = get().items.some((item) => getCartItemKey(item) === key);

                if (exists) {
                    set((state) => ({
                        items: state.items.map((item) =>
                            getCartItemKey(item) === key
                                ? { ...item, quantity: item.quantity + quantity }
                                : item,
                        ),
                    }));
                } else {
                    set((state) => ({
                        items: [...state.items, { product, selectedColor: color, selectedStorage: storage, quantity }],
                    }));
                }
            },

            removeItem: (productId, color, storage) => {
                const key = getItemKey(productId, color, storage);
                set((state) => ({
                    items: state.items.filter((item) => getCartItemKey(item) !== key),
                }));
            },

            updateQuantity: (productId, color, storage, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId, color, storage);
                    return;
                }
                const key = getItemKey(productId, color, storage);
                set((state) => ({
                    items: state.items.map((item) =>
                        getCartItemKey(item) === key ? { ...item, quantity } : item,
                    ),
                }));
            },

            clearCart: () => set({ items: [] }),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

            getTotalItems: () =>
                get().items.reduce((sum, item) => sum + item.quantity, 0),

            getTotalPrice: () =>
                get().items.reduce((sum, item) => {
                    const variant = findVariant(
                        item.product.category,
                        item.product.variants,
                        item.selectedColor.name,
                        item.selectedStorage,
                    );
                    return sum + (variant?.price ?? 0) * item.quantity;
                }, 0),
        }),
        {
            name: "apple-store-cart",
            partialize: (state) => ({ items: state.items }),
        },
    ),
);
