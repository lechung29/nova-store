/** @format */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { IProduct, IProductVariant } from "@/types";
import { getColorImageArray } from "@/utils";

interface ProductGalleryProps {
    product: IProduct;
    imageKey: string;
    currentVariant?: IProductVariant;
    onImageKeyChange: (key: string) => void;
}

export function ProductGallery({ product, imageKey, currentVariant, onImageKeyChange }: ProductGalleryProps) {
    const productImageList = getColorImageArray(product.variants);

    return (
        <div className="space-y-4!">
            <motion.div className="relative flex items-center justify-center overflow-hidden border border-white/8 rounded-3xl bg-white/4 from-slate-900 to-slate-950 aspect-square">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="float-anim select-none"
                    >
                        <img src={currentVariant?.image.url} alt={currentVariant?.image.alt} className="object-contain w-80" />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-white/10 rounded-full bg-white/50 px-3! py-1.5! backdrop-blur-xl">
                    <span className="w-3 h-3 rounded-full" style={{ background: product.colors.find((c) => c.name === imageKey)?.hex }} />
                    <span className="text-xs font-medium text-white">{imageKey}</span>
                </div>

                {!!product.discount && (
                    <div className="absolute top-4 left-4">
                        <span className="px-3! py-1! text-sm font-bold rounded-xl bg-red-500 text-white font-display">-{product.discount}%</span>
                    </div>
                )}

                {product.isNew && (
                    <div className="absolute top-4 right-4">
                        <span className="px-3! py-1! text-sm font-bold border rounded-xl font-display bg-blue-500/20 border-blue-500/30 text-blue-400">Mới</span>
                    </div>
                )}
            </motion.div>

            <div className="flex gap-3 p-1! overflow-x-auto no-scrollbar">
                {productImageList.map((item) => (
                    <motion.button
                        key={item.key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onImageKeyChange(item.key)}
                        className={cn(
                            "flex items-center justify-center w-20 h-20 shrink-0 border rounded-xl transition-all cursor-pointer",
                            imageKey === item.key ? "border-text-primary bg-blue-500/10" : "border-white/10 bg-white/4 hover:border-white/20",
                        )}
                    >
                        <img src={item.value.url} alt={item.value.alt} className="object-contain w-[80%] h-[80%]"/>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
