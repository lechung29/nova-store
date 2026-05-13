/** @format */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft, ArrowRight, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatVND, findVariant } from "@/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CartItem } from "@/types";

export default function CartComponent() {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

    const getItemPrice = (item: CartItem) => findVariant(item.product.variants, item.selectedColor.name, item.selectedStorage)?.price ?? 0;

    const getItemImage = (item: CartItem) => findVariant(item.product.variants, item.selectedColor.name, item.selectedStorage)?.image;

    const total = getTotalPrice();

    return (
        <div className="min-h-screen pt-10! pb-20! px-4! sm:px-16!">
            <div className="max-w-7xl mx-auto!">
                <div className="flex items-center gap-3 mb-10!">
                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-3!">Giỏ hàng</h1>
                    {items.length > 0 && <span className="text-base font-bold bg-white/10 text-white/70 rounded-full px-2.5! py-1!">{items.reduce((s, i) => s + i.quantity, 0)} sản phẩm</span>}
                </div>

                {items.length === 0 ? (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-32! gap-5 text-center">
                        <ShoppingBag size={64} className="text-white/90" />
                        <p className="text-white/90 text-lg">Chưa có sản phẩm trong giỏ hàng</p>
                        <Link href="/products" className="inline-flex items-center gap-2 bg-white text-black font-bold text-base px-6! py-3! rounded-2xl hover:bg-white/90 transition-colors">
                            <ArrowLeft size={20} /> Tiếp tục mua sắm
                        </Link>
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="flex-1 min-w-0 w-full">
                            <div className="hidden sm:grid grid-cols-[1fr_120px_140px_120px] gap-4 pb-4! border-b border-white/8 text-sm font-bold tracking-widest uppercase text-white/70 pr-5!">
                                <span>Sản phẩm</span>
                                <span className="text-center">Giá</span>
                                <span className="text-center">Số lượng</span>
                                <span className="text-right">Tạm tính</span>
                            </div>
                            <ScrollArea className="h-[60vh] w-full! pr-5! pb-5!">
                                <div className="min-w-145">
                                    <AnimatePresence initial={false}>
                                        {items.map((item) => {
                                            const key = `${item.product.id}-${item.selectedColor.name}-${item.selectedStorage}`;
                                            return (
                                                <motion.div
                                                    key={key}
                                                    layout
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="grid grid-cols-1 sm:grid-cols-[1fr_120px_140px_120px] gap-4 items-center py-6! border-b border-white/8"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0 text-sm">
                                                            <img src={getItemImage(item)?.url ?? ""} alt={getItemImage(item)?.alt} className="w-full h-full object-contain" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <Link href={`/products/${item.product.slug}`} className="text-white font-semibold text-base leading-tight truncate hover:underline">
                                                                {item.product.name}
                                                            </Link>
                                                            <div className="flex items-center gap-1.5 mt-2!">
                                                                <span className="w-3 h-3 rounded-full border border-white/10 shrink-0" style={{ background: item.selectedColor.hex }} />
                                                                <span className="text-sm text-white/70">
                                                                    {item.selectedColor.name} · {item.selectedStorage}
                                                                </span>
                                                            </div>
                                                            <p className="sm:hidden text-white/70 text-base mt-1!">{formatVND(getItemPrice(item))}</p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden sm:flex justify-center">
                                                        <span className="text-white/70 text-base">{formatVND(getItemPrice(item))}</span>
                                                    </div>
                                                    <div className="flex sm:justify-center">
                                                        <div className="flex items-center gap-1 bg-white/6 border border-white/10 rounded-xl p-1!">
                                                            <button
                                                                onClick={() =>
                                                                    item.quantity === 1
                                                                        ? removeItem(item.product.id, item.selectedColor.name, item.selectedStorage)
                                                                        : updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity - 1)
                                                                }
                                                                className="w-7 h-7 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                                            >
                                                                <Minus size={11} />
                                                            </button>
                                                            <span className="text-white font-bold text-sm min-w-7 text-center tabular-nums">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity + 1)}
                                                                className="w-7 h-7 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                                            >
                                                                <Plus size={11} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex sm:justify-end">
                                                        <span className="text-white font-bold text-base">{formatVND(getItemPrice(item) * item.quantity)}</span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                    <div className="flex justify-end pt-4!">
                                        <button onClick={clearCart} className="text-sm text-white/70 hover:text-red-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                                            <Trash2 size={14} /> Xóa tất cả
                                        </button>
                                    </div>
                                </div>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="w-full lg:w-80 shrink-0 rounded-2xl border border-white/8 bg-white/4 p-6! space-y-5! lg:sticky lg:top-24"
                        >
                            <h2 className="font-black text-base text-white tracking-wider uppercase">Tổng cộng giỏ hàng</h2>
                            <div className="border-t border-white/8 pt-5! space-y-3!">
                                <div className="flex items-center justify-between text-base">
                                    <span className="text-white/70">Tạm tính</span>
                                    <span className="text-white font-semibold">{formatVND(total)}</span>
                                </div>
                            </div>

                            <div className="border-t border-white/8 pt-4! flex items-center justify-between">
                                <span className="text-white font-bold">Tổng</span>
                                <span className="text-white font-black text-lg">{formatVND(total)}</span>
                            </div>
                            <div className="space-y-2.5! pt-1!">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setCheckoutOpen(true)}
                                    className="w-full cursor-pointer h-12 bg-white hover:bg-white/90 text-black font-display font-black text-lg rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-white/10"
                                >
                                    Tiến hành thanh toán
                                    <ArrowRight size={15} />
                                </motion.button>

                                <Link
                                    href="/products"
                                    className="w-full h-11 bg-text-primary/20 hover:bg-text-primary/60 text-white/50 hover:text-white text-lg font-medium rounded-2xl flex items-center justify-center gap-2 transition-all"
                                >
                                    <ArrowLeft size={14} />
                                    Tiếp tục mua sắm
                                </Link>
                            </div>
                            <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
                                <DialogContent showCloseButton={false} className="bg-[#111] border-white/10 rounded-2xl max-w-sm p-6! [&>button]:text-white/40 [&>button]:hover:text-white">
                                    <DialogHeader className="w-full items-center text-center gap-3 mb-2!">
                                        <div className="w-full flex items-center justify-between">
                                            <div className="w-full flex items-center justify-start gap-3">
                                                <div className="w-12 h-12 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center">
                                                    <ShoppingBag size={22} className="text-white" />
                                                </div>
                                                <DialogTitle className="text-white font-display font-black text-xl">Đặt hàng ngay</DialogTitle>
                                            </div>
                                            <Button variant="ghost" size="icon" onClick={() => setCheckoutOpen(false)} className="h-8 w-8 text-text-primary hover:text-white hover:bg-white/10">
                                                <X size={16} />
                                            </Button>
                                        </div>
                                        <p className="text-white/60 text-sm font-normal leading-relaxed">Liên hệ với chúng tôi qua kênh bên dưới để được tư vấn và xác nhận đơn hàng nhanh nhất.</p>
                                    </DialogHeader>

                                    <div className="flex gap-2.5">
                                        <motion.a
                                            href="https://zalo.me/YOUR_ZALO_NUMBER"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 py-3! rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-display font-bold text-xs transition-colors flex items-center justify-center gap-2"
                                        >
                                            <SiZalo size={18} />
                                            Mua qua Zalo
                                        </motion.a>

                                        <motion.a
                                            href="https://m.me/YOUR_FB_PAGE"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 py-3! rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-display font-bold text-xs transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FaFacebookF size={18} />
                                            Nhắn qua Facebook
                                        </motion.a>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
