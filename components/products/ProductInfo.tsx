/** @format */

import { motion } from "framer-motion";
import { Star, ShoppingBag, Check } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { cn } from "@/lib/utils";
import { formatVND } from "@/utils";
import type { IProduct, IProductColor } from "@/types";
import { social_links } from "@/utils/constants";
import { ProductPolicies } from "./ProductPolicies";

interface ProductInfoProps {
    product: IProduct;
    selectedColor: IProductColor;
    selectedColorIdx: number;
    selectedStorage: string;
    selectedStorageIdx: number;
    productPrice: number;
    productOldPrice?: number;
    addedToCart: boolean;
    onColorChange: (index: number) => void;
    onStorageChange: (index: number) => void;
    onImageKeyChange: (key: string) => void;
    onAddToCart: () => void;
}

export function ProductInfo({
    product,
    selectedColor,
    selectedColorIdx,
    selectedStorage,
    selectedStorageIdx,
    productPrice,
    productOldPrice,
    addedToCart,
    onColorChange,
    onStorageChange,
    onImageKeyChange,
    onAddToCart,
}: ProductInfoProps) {
    const handleColorSelect = (index: number) => {
        onColorChange(index);
        onImageKeyChange(product.colors[index].name);
    };

    return (
        <div className="sticky top-24 h-fit space-y-7! lg:sticky">
            <ProductHeader product={product} />
            <ProductRating product={product} />
            <PriceBox price={productPrice} oldPrice={productOldPrice} discount={product.discount} />
            <ColorSelector colors={product.colors} selectedIdx={selectedColorIdx} selectedColor={selectedColor} onSelect={handleColorSelect} />
            <StorageSelector storages={product.storage} selectedIdx={selectedStorageIdx} onSelect={onStorageChange} />
            <ActionButtons addedToCart={addedToCart} onAddToCart={onAddToCart} />
            <ProductPolicies />
        </div>
    );
}

function ProductHeader({ product }: { product: IProduct }) {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2!">
                {product.isNew && (
                    <span className="px-2.5! py-0.5! text-sm font-bold uppercase tracking-wider border rounded-full font-display bg-blue-500/15 border-blue-500/25 text-blue-400">Mới nhất</span>
                )}
                <span className="text-sm font-semibold uppercase tracking-wider text-text-primary">{product.series}</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl text-white font-display">{product.name}</h1>
            <p className="mt-2! text-base leading-relaxed text-text-primary">{product.shortDescription}</p>
        </div>
    );
}

function ProductRating({ product }: { product: IProduct }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={cn(i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-white/15")} />
                ))}
            </div>
            <span className="text-sm font-semibold text-white">{product.rating}</span>
            <span className="text-sm text-text-primary">({product.reviewCount.toLocaleString()} đánh giá)</span>
        </div>
    );
}

function PriceBox({ price, oldPrice, discount }: { price: number; oldPrice?: number; discount?: number }) {
    return (
        <div className="border border-white/8 rounded-2xl bg-white/4 px-5! py-3!">
            <div className="flex items-end gap-3 mb-1!">
                <p className="text-3xl font-extrabold text-white font-display">{formatVND(price)}</p>
                {oldPrice && oldPrice > price && <p className="mb-0.5! text-base line-through text-text-primary">{formatVND(oldPrice)}</p>}
            </div>
            {!!discount && !!oldPrice && (
                <p className="text-sm font-semibold text-red-400">
                    Tiết kiệm {formatVND((oldPrice ?? 0) - price)} ({discount}%)
                </p>
            )}
        </div>
    );
}

function ColorSelector({ colors, selectedIdx, selectedColor, onSelect }: { colors: IProductColor[]; selectedIdx: number; selectedColor: IProductColor; onSelect: (index: number) => void }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-3!">
                <p className="text-base font-semibold text-white font-display">Màu sắc</p>
                <p className="text-base text-text-primary">{selectedColor.name}</p>
            </div>
            <div className="flex flex-wrap gap-3">
                {colors.map((color, i) => (
                    <motion.button
                        key={color.name}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => onSelect(i)}
                        title={color.name}
                        className={cn(
                            "relative w-9 h-9 rounded-full transition-all duration-200 cursor-pointer",
                            selectedIdx === i ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "ring-1 ring-white/20 hover:ring-white/40",
                        )}
                        style={{ background: color.hex }}
                    >
                        {selectedIdx === i && (
                            <motion.div layoutId="colorCheck" className="absolute inset-0 flex items-center justify-center rounded-full">
                                <Check size={12} className="text-white drop-shadow-md" />
                            </motion.div>
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}

function StorageSelector({ storages, selectedIdx, onSelect }: { storages: string[]; selectedIdx: number; onSelect: (index: number) => void }) {
    return (
        <div>
            <p className="mb-3! text-base font-semibold text-white font-display">Dung lượng</p>
            <div className="flex flex-wrap gap-2">
                {storages.map((s, i) => (
                    <motion.button
                        key={s}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onSelect(i)}
                        className={cn(
                            "px-4! py-2! text-sm font-semibold border rounded-xl font-display transition-all cursor-pointer",
                            selectedIdx === i ? "border-white bg-white text-black" : "border-white/12 bg-white/6 text-text-primary hover:bg-white/12 hover:text-white",
                        )}
                    >
                        {s}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}

function ActionButtons({ addedToCart, onAddToCart }: { addedToCart: boolean; onAddToCart: () => void }) {
    return (
        <div className="space-y-2.5!">
            <motion.button
                whileHover={{
                    scale: 1.02,
                    boxShadow: addedToCart ? "0 0 30px rgba(48,209,88,0.3)" : "0 0 30px rgba(59,130,246,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={onAddToCart}
                className={cn(
                    "flex items-center justify-center w-full gap-2 py-3.5! text-lg font-bold rounded-2xl font-display transition-all cursor-pointer shadow-lg",
                    addedToCart ? "bg-green-500 text-white" : "bg-white/90 text-black/80 shadow-blue-500/40 hover:bg-text-primary hover:text-white/70 hover:shadow-blue-500/35",
                )}
            >
                {addedToCart ? (
                    <>
                        <Check size={18} /> Đã thêm vào giỏ
                    </>
                ) : (
                    <>
                        <ShoppingBag size={18} /> Thêm vào giỏ
                    </>
                )}
            </motion.button>

            <div className="flex gap-2.5">
                <motion.a
                    href={social_links.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center flex-1 gap-2 py-3.5! text-base font-bold rounded-2xl text-white transition-colors font-display cursor-pointer bg-blue-500 hover:bg-blue-400"
                >
                    <SiZalo size={18} /> Mua qua Zalo
                </motion.a>
                <motion.a
                    href={social_links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center flex-1 gap-2 py-3.5! text-base font-bold rounded-2xl text-white transition-colors font-display cursor-pointer bg-blue-500 hover:bg-blue-400"
                >
                    <FaFacebookF size={18} /> Nhắn qua Facebook
                </motion.a>
            </div>
        </div>
    );
}
