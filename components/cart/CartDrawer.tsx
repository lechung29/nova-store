/** @format */

"use client";

import { Minus, Plus, ShoppingBag, Trash2, ArrowRight, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { formatVND, findVariant } from "@/utils";
import Link from "next/link";
import { CartItem } from "@/types";

export function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
    const total = getTotalPrice();
    const totalQty = items.reduce((s, i) => s + i.quantity, 0);

    const getItemPrice = (item: CartItem) => findVariant(item.product.variants, item.selectedColor.name, item.selectedStorage)?.price ?? 0;

    const getITemImageInfo = (item: CartItem) => findVariant(item.product.variants, item.selectedColor.name, item.selectedStorage);

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
            <SheetContent side="right" className="w-full max-h-screen max-w-md p-0! border-0! flex flex-col bg-[#0c0c0c] [&>button]:hidden">
                <SheetHeader className="px-5! h-14 flex-row items-center justify-between shrink-0 space-y-0">
                    <div className="flex items-center gap-2.5">
                        <ShoppingBag size={24} className="text-text-primary" />
                        <SheetTitle className="text-xl font-bold text-text-primary leading-none">Giỏ hàng</SheetTitle>
                        {totalQty > 0 && <span className="text-[11px] font-bold bg-text-primary text-white rounded-full px-2! py-1! leading-none">{totalQty}</span>}
                    </div>
                    <div className="flex items-center gap-1">
                        {items.length > 0 && (
                            <Button variant="ghost" size="sm" onClick={clearCart} className="h-8 px-2.5! text-sm text-text-primary hover:text-white bg-transparent! gap-1.5">
                                <Trash2 size={16} />
                                Xóa tất cả
                            </Button>
                        )}
                        <Button variant="ghost" size="icon" onClick={closeCart} className="h-8 w-8 text-text-primary hover:text-white hover:bg-white/10">
                            <X size={16} />
                        </Button>
                    </div>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6! text-center">
                        <div className="w-16 h-16 rounded-2xl bg-transparent! flex items-center justify-center">
                            <ShoppingBag size={64} className="text-text-primary" />
                        </div>
                        <div>
                            <p className="text-base text-text-primary mt-1!">Chưa có sản phẩm trong giỏ hàng</p>
                        </div>
                        <Button onClick={closeCart} className="mt-2! text-base bg-white/90 hover:bg-text-primary text-black hover:text-white/70 rounded-2xl px-6! py-3! h-10">
                            Tiếp tục mua sắm
                        </Button>
                    </div>
                ) : (
                    <ScrollArea className="flex-1 overflow-y-hidden px-4! py-3!">
                        <ScrollBar />
                        <div className="flex flex-col gap-3">
                            {items.map((item) => {
                                const key = `${item.product.id}-${item.selectedColor.name}-${item.selectedStorage}`;
                                return (
                                    <div key={key} className="flex gap-3 p-3! rounded-2xl bg-transparent! hover:bg-text-primary/10! transition-colors duration-150">
                                        <div className="w-20 h-full rounded-xl bg-transparent text-text-primary flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                                            <img src={getITemImageInfo(item)?.image.url ?? ""} alt={getITemImageInfo(item)?.image.alt} className="w-full object-contain" />
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5!">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="min-w-0">
                                                    <p className="text-base font-semibold text-text-primary truncate leading-tight">{item.product.name}</p>
                                                    <div className="flex items-center gap-1.5 mt-1!">
                                                        <span className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0" style={{ background: item.selectedColor.hex }} />
                                                        <span className="text-sm text-text-primary/90">
                                                            {item.selectedColor.name} · {item.selectedStorage}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeItem(item.product.id, item.selectedColor.name, item.selectedStorage)}
                                                    className="p-1! text-text-primary hover:text-red-500 transition-colors shrink-0 bg-transparent!"
                                                >
                                                    Xóa
                                                </Button>
                                            </div>
                                            <div className="flex items-center justify-between mt-2!">
                                                <span className="text-sm font-bold text-text-primary">{formatVND(getItemPrice(item) * item.quantity)}</span>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1 bg-white/8 rounded-xl px-1! py-0.5! border border-white/10">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() =>
                                                                item.quantity === 1
                                                                    ? removeItem(item.product.id, item.selectedColor.name, item.selectedStorage)
                                                                    : updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity - 1)
                                                            }
                                                            className="h-6 w-6 rounded-lg text-text-primary hover:text-white hover:bg-white/15 bg-transparent! transition-colors"
                                                        >
                                                            <Minus size={11} />
                                                        </Button>
                                                        <span className="text-xs font-bold text-text-primary min-w-5 text-center tabular-nums">{item.quantity}</span>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity + 1)}
                                                            className="h-6 w-6 rounded-lg text-text-primary hover:text-white hover:bg-white/15 bg-transparent! transition-colors"
                                                        >
                                                            <Plus size={11} />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollArea>
                )}
                {items.length > 0 && (
                    <div className="px-5! py-4! border-t border-text-primary/10 shrink-0 space-y-4!">
                        <div className="flex items-center justify-between">
                            <span className="text-base text-text-primary">Tạm tính</span>
                            <span className="text-xl font-bold text-text-primary">{formatVND(total)}</span>
                        </div>
                        <Link href={"/cart"} onClick={() => closeCart()}>
                            <Button className="w-full h-12 bg-white/90 hover:bg-text-primary text-black hover:text-white/70 font-bold rounded-2xl text-lg gap-2 shadow-lg shadow-text-primary/40">
                                Đặt hàng ngay
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
