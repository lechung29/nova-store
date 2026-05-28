/** @format */

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Check, Loader2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useProductSelection } from "@/hooks/useProductSelection";
import { cn } from "@/lib/utils";
import { formatVND } from "@/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { IProduct } from "@/types";

interface ProductCardProps {
    product: IProduct;
    index?: number;
}

type AddingState = false | "loading" | "done";

const PRODUCT_BADGES = [
    { text: "Máy siêu lướt 99% như mới - Không zin hoàn tiền", borderColor: "border-gray-500" },
    { text: "Freeship và hỗ trợ cài đặt máy toàn Đà Nẵng", borderColor: "border-gray-500" },
];

export function ProductCard({ product, index = 0 }: ProductCardProps) {
    const [adding, setAdding] = useState<AddingState>(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const { addItem } = useCartStore();
    const { selectedColorIdx, selectedStorageIdx, selectedColor, selectedStorage, variant, setSelectedColorIdx, setSelectedStorageIdx } = useProductSelection(product);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 400, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 400, damping: 30 });

    function handleMouseMove(e: React.MouseEvent) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const productImage = product.variants.find((v) => v.color === selectedColor.name)?.image;

    function handleAddToCart(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (adding) return;

        setAdding("loading");
        addItem(product, selectedColor, selectedStorage);
        setAdding("done");
        setTimeout(() => setAdding(false), 1500);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
        >
            <motion.div ref={cardRef} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <Link href={`/san-pham/${product.slug}`}>
                    <div
                        className={cn(
                            "relative group rounded-2xl bg-[#111] border border-white/8 overflow-hidden",
                            "hover:border-white/18 transition-all duration-300",
                            "hover:shadow-2xl hover:shadow-black/50",
                        )}
                    >
                        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                            {product.isNew && (
                                <span className="bg-[#2997ff]/20 text-[#2997ff] border border-[#2997ff]/30 text-[10px] font-display font-bold tracking-wider px-2! py-0.5! rounded-full">Mới</span>
                            )}
                        </div>

                        <div className="relative aspect-square bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center overflow-hidden">
                            <img src={productImage?.url} alt={productImage?.alt} className="object-contain w-[80%] h-[80%]" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-white/8 to-transparent pointer-events-none" />
                        </div>

                        <div className="p-5! space-y-3!">
                            <div>
                                <h3 className="font-display font-bold text-lg text-white leading-tight line-clamp-1">{product.name}</h3>
                                <TooltipProvider delayDuration={300}>
                                    <Tooltip key={product.shortDescription}>
                                        <TooltipTrigger asChild>
                                            <p className="text-text-primary text-sm mt-1! line-clamp-1">{product.shortDescription}</p>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">{product.shortDescription}</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <TooltipProvider delayDuration={300}>
                                <div className="flex items-center gap-1.5">
                                    {product.colors.slice(0, 5).map((color, i) => (
                                        <Tooltip key={color.name}>
                                            <TooltipTrigger asChild>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setSelectedColorIdx(i);
                                                    }}
                                                    className={cn(
                                                        "w-6 h-6 rounded-full border transition-all duration-200 cursor-pointer",
                                                        selectedColorIdx === i ? "ring-1 ring-blue-400 ring-offset-2 ring-offset-black" : "ring-1 ring-white/20 hover:ring-white/40",
                                                    )}
                                                    style={{ background: color.hex }}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent side="top">{color.name}</TooltipContent>
                                        </Tooltip>
                                    ))}
                                    {product.colors.length > 5 && <span className="text-[10px] text-[#6e6e73]">+{product.colors.length - 5}</span>}
                                </div>
                            </TooltipProvider>

                            <div className="flex items-center gap-1.5 flex-wrap">
                                {product.storage.map((s, i) => (
                                    <button
                                        key={s}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setSelectedStorageIdx(i);
                                        }}
                                        className={cn(
                                            "text-xs font-medium px-2! py-1! rounded-lg border transition-all duration-200 cursor-pointer",
                                            selectedStorageIdx === i ? "bg-white text-black border-white" : "bg-white/6 text-white/50 border-white/10 hover:border-white/30 hover:text-white/80",
                                        )}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-display font-bold text-xl text-white/75">{formatVND(variant?.price ?? 0)}</p>
                                    {variant?.oldPrice && variant.oldPrice > variant.price && <p className="text-[#6e6e73] text-sm line-through">{formatVND(variant.oldPrice)}</p>}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.92 }}
                                    onClick={handleAddToCart}
                                    disabled={!!adding}
                                    className={cn(
                                        "relative flex items-center gap-1.5 h-9 px-3! rounded-xl text-xs font-semibold cursor-pointer",
                                        "border transition-all duration-200 overflow-hidden",
                                        adding === "loading" && "bg-[#2997ff]/10 text-[#2997ff] border-[#2997ff]/30 pointer-events-none",
                                        adding === "done" && "bg-emerald-400/10 text-emerald-400 border-emerald-500/30 pointer-events-none",
                                        !adding &&
                                            "bg-white/90 hover:bg-text-primary text-black/80 hover:text-white/70 hover:shadow-[0_4px_14px_rgba(41,151,255,0.35)] shadow-lg shadow-text-primary/40",
                                    )}
                                >
                                    <AnimatePresence mode="wait">
                                        {adding === "loading" && (
                                            <motion.span
                                                key="loading"
                                                className="flex items-center gap-1.5"
                                                initial={{ opacity: 0, scale: 0.7 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.7 }}
                                            >
                                                <Loader2 size={15} className="animate-spin" />
                                            </motion.span>
                                        )}
                                        {adding === "done" && (
                                            <motion.span
                                                key="done"
                                                className="flex items-center gap-1.5"
                                                initial={{ opacity: 0, scale: 0.7 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.7 }}
                                            >
                                                <Check size={15} strokeWidth={2.5} />
                                            </motion.span>
                                        )}
                                        {!adding && (
                                            <motion.span
                                                key="idle"
                                                className="flex items-center gap-1.5"
                                                initial={{ opacity: 0, scale: 0.7 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.7 }}
                                            >
                                                <ShoppingBag size={15} />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>

                            <div className="flex flex-col gap-2 py-2!">
                                {PRODUCT_BADGES.map((badge, i) => (
                                    <div key={i} className={`rounded-lg px-3! py-2! text-sm w-full border border-dashed font-medium text-white/95 ${badge.borderColor}`}>
                                        {badge.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
