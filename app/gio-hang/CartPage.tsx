/** @format */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CartItemRow, CartSummary, CheckoutDialog, EmptyCart } from "@/components/cart";
import { getCartItemKey } from "@/utils";

export default function CartComponent() {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const { items, clearCart, getTotalPrice } = useCartStore();

    const total = getTotalPrice();
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen px-4! pb-20! pt-10! sm:px-16!">
            <div className="mx-auto! max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10! flex items-center gap-3!">
                    <h1 className="text-4xl font-display font-extrabold text-white sm:text-5xl">Giỏ hàng</h1>
                    {items.length > 0 && <span className="rounded-full bg-white/10 px-2.5! py-1! text-base font-bold text-white/70">{totalQuantity} sản phẩm</span>}
                </motion.div>

                {items.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="flex flex-col items-start gap-8! lg:flex-row">
                        <div className="w-full flex-1 min-w-0">
                            <ScrollArea className="max-h-[60vh] w-full! pb-5! pr-5!">
                                <div className="min-w-145">
                                    <div className="grid-cols-[1fr_120px_140px_120px] gap-4! border-b border-white/8 pb-4! pr-5! text-sm font-display font-bold uppercase tracking-widest text-white/70 grid">
                                        <span>Sản phẩm</span>
                                        <span className="text-center">Giá</span>
                                        <span className="text-center">Số lượng</span>
                                        <span className="text-right">Tạm tính</span>
                                    </div>
                                    <AnimatePresence initial={false}>
                                        {items.map((item) => (
                                            <CartItemRow key={getCartItemKey(item)} item={item} />
                                        ))}
                                    </AnimatePresence>
                                    <div className="flex justify-end pt-4!">
                                        <button onClick={clearCart} className="flex cursor-pointer items-center gap-1.5! text-sm text-white/70 transition-colors hover:text-red-400">
                                            <Trash2 size={14} /> Xóa tất cả
                                        </button>x
                                    </div>
                                </div>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                        <CartSummary total={total} onCheckout={() => setCheckoutOpen(true)} />
                        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
                    </div>
                )}
            </div>
        </div>
    );
}
