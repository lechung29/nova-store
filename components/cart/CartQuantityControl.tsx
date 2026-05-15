/** @format */
"use client";

import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import type { CartItem } from "@/types";

export function QuantityControl({ item }: { item: CartItem }) {
    const { removeItem, updateQuantity } = useCartStore();

    const handleDecrement = () => {
        if (item.quantity === 1) {
            removeItem(item.product.id, item.selectedColor.name, item.selectedStorage);
        } else {
            updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity - 1);
        }
    };

    const handleIncrement = () => {
        updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity + 1);
    };

    return (
        <div className="flex items-center gap-1! rounded-xl border border-white/10 bg-white/6 p-1!">
            <button onClick={handleDecrement} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                <Minus size={11} />
            </button>
            <span className="min-w-7 text-center font-display text-sm font-bold tabular-nums text-white">{item.quantity}</span>
            <button onClick={handleIncrement} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                <Plus size={11} />
            </button>
        </div>
    );
}
