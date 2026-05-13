/** @format */

"use client";

import { useState, useEffect, useMemo } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star, Shield, Truck, RotateCcw, ChevronDown, Check } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useCartStore } from "@/store/cartStore";
import { useRecentlyViewedStore } from "@/store";
import { cn } from "@/lib/utils";
import { formatVND, getColorImageArray } from "@/utils";
import { ProductCard } from "@/components/products/ProductCard";
import iphones from "@/data/iphones.json";
import ipads from "@/data/ipads.json";
import airpods from "@/data/airpods.json";
import watches from "@/data/applewatch.json";
import type { IProduct } from "@/types";

const ALL_PRODUCTS = [...(iphones as IProduct[]), ...(ipads as IProduct[]), ...(airpods as IProduct[]), ...(watches as IProduct[])];

interface PageProps {
    params: Promise<{ slug: string }>;
}

function getRelatedProducts(product: IProduct): IProduct[] {
    const sameSeries = ALL_PRODUCTS.filter((p) => p.category === product.category && p.series === product.series && p.id !== product.id).slice(0, 4);

    if (sameSeries.length >= 4) return sameSeries;

    const sameCategory = ALL_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4 - sameSeries.length);

    return [...sameSeries, ...sameCategory];
}

const PRODUCT_SPECS_MAP = [
    { label: "Chip", key: "chip" },
    { label: "Màn hình", key: "display" },
    { label: "Camera", key: "camera" },
    { label: "Pin", key: "battery" },
    { label: "RAM", key: "ram" },
    { label: "Trọng lượng", key: "weight" },
    { label: "Kháng nước", key: "waterResistance" },
    { label: "Kết nối", key: "connectivity" },
] as const;

const PRODUCT_POLICY = [
    { icon: Shield, label: "Bảo hành Apple 12 tháng" },
    { icon: Truck, label: "Miễn phí giao hàng" },
    { icon: RotateCcw, label: "Đổi trả 7 ngày" },
];

export default function ProductDetailPage({ params }: PageProps) {
    const [slug, setSlug] = useState("");
    const [product, setProduct] = useState<IProduct | null>(null);
    const [selectedColorIdx, setSelectedColorIdx] = useState(0);
    const [selectedStorageIdx, setSelectedStorageIdx] = useState(0);
    const [imageKey, setImageKey] = useState("");
    const [addedToCart, setAddedToCart] = useState(false);
    const [specOpen, setSpecOpen] = useState(true);

    const { addItem } = useCartStore();
    const { addItem: addRecentlyViewed } = useRecentlyViewedStore();

    useEffect(() => {
        params.then(({ slug: s }) => {
            setSlug(s);
            const found = ALL_PRODUCTS.find((p) => p.slug === s);
            if (found) {
                setProduct(found);
                setSelectedColorIdx(0);
                setSelectedStorageIdx(0);
                setImageKey(found.colors[0].name);
                addRecentlyViewed(found.slug);
            }
        });
    }, [params, addRecentlyViewed]);

    if (slug && !product) return notFound();
    if (!product) return <div className="min-h-screen pt-20! flex items-center justify-center text-text-primary">Loading...</div>;

    const selectedColor = product.colors[selectedColorIdx];
    const selectedStorage = product.storage[selectedStorageIdx];

    const productImageList = getColorImageArray(product.variants);
    const currentVariant = product.variants.find((v) => v.color === selectedColor.name && v.storage === selectedStorage);
    const productPrice = currentVariant?.price ?? 0;
    const productOldPrice = currentVariant?.oldPrice;

    const specs = PRODUCT_SPECS_MAP.map(({ label, key }) => ({ label, value: product.specs[key] })).filter((s) => s.value);

    const relatedProducts = getRelatedProducts(product);

    function handleAddToCart() {
        addItem(product!, selectedColor, selectedStorage);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2500);
    }

    return (
        <div className="min-h-screen pt-10!">
            <div className="max-w-7xl mx-auto sm:px-16! px-4! py-10!">
                <nav className="text-base text-text-primary mb-8! flex items-center gap-2">
                    <a href="/" className="hover:text-white transition-colors">
                        Trang chủ
                    </a>
                    <span>/</span>
                    <a href="/products" className="hover:text-white transition-colors">
                        Sản phẩm
                    </a>
                    <span>/</span>
                    <a href={`/products?category=${product.category}`} className="hover:text-white transition-colors capitalize">
                        {product.category}
                    </a>
                    <span>/</span>
                    <span className="text-white">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-12!">
                    <div className="space-y-4!">
                        <motion.div className="relative aspect-square rounded-3xl bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/8 overflow-hidden flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={imageKey}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-base float-anim select-none"
                                >
                                    <img src={currentVariant?.image.url} alt={currentVariant?.image.alt} />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/50 backdrop-blur-xl rounded-full px-3! py-1.5! border border-white/10">
                                <span className="w-3 h-3 rounded-full" style={{ background: selectedColor.hex }} />
                                <span className="text-xs text-white font-medium">{selectedColor.name}</span>
                            </div>

                            {!!product.discount && (
                                <div className="absolute top-4 left-4">
                                    <span className="bg-red-500 text-white text-sm font-display font-bold px-3! py-1! rounded-xl">-{product.discount}%</span>
                                </div>
                            )}

                            {product.isNew && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-[#2997ff]/20 text-[#2997ff] border border-[#2997ff]/30 text-sm font-display font-bold px-3! py-1! rounded-xl">Mới</span>
                                </div>
                            )}
                        </motion.div>

                        <div className="flex gap-3 p-1! overflow-x-auto no-scrollbar">
                            {productImageList.map((item) => (
                                <motion.button
                                    key={item.key}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setImageKey(item.key)}
                                    className={cn(
                                        "shrink-0 cursor-pointer w-20 h-20 rounded-xl border flex items-center justify-center transition-all",
                                        imageKey === item.key ? "border-text-primary bg-[#2997ff]/10" : "border-white/10 bg-white/4 hover:border-white/20",
                                    )}
                                >
                                    <img src={item.value.url} alt={item.value.alt} width="100%" />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-24 space-y-7! h-fit">
                        <div>
                            <div className="flex items-center gap-2 mb-2!">
                                {product.isNew && (
                                    <span className="text-sm font-display font-bold tracking-wider uppercase bg-[#2997ff]/15 text-[#2997ff] border border-[#2997ff]/25 px-2.5! py-0.5! rounded-full">
                                        Mới nhất
                                    </span>
                                )}
                                <span className="text-sm font-semibold text-text-primary uppercase tracking-wider">{product.series}</span>
                            </div>
                            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">{product.name}</h1>
                            <p className="text-text-primary mt-2! text-base leading-relaxed">{product.shortDescription}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={14} className={cn(i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-white/15")} />
                                ))}
                            </div>
                            <span className="text-white font-semibold text-sm">{product.rating}</span>
                            <span className="text-text-primary text-sm">({product.reviewCount.toLocaleString()} đánh giá)</span>
                        </div>

                        <div className="px-5! py-3! rounded-2xl bg-white/4 border border-white/8">
                            <div className="flex items-end gap-3 mb-1!">
                                <p className="font-display font-extrabold text-3xl text-white">{formatVND(productPrice)}</p>
                                {productOldPrice && productOldPrice > productPrice && <p className="text-text-primary text-base line-through mb-0.5!">{formatVND(productOldPrice)}</p>}
                            </div>
                            {!!product.discount && (
                                <p className="text-red-400 text-sm font-semibold">
                                    Tiết kiệm {(productOldPrice ?? 0) - productPrice} ({product.discount}%)
                                </p>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-3!">
                                <p className="text-base font-display font-semibold text-white">Màu sắc</p>
                                <p className="text-base text-text-primary">{selectedColor.name}</p>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                {product.colors.map((color, i) => (
                                    <motion.button
                                        key={color.name}
                                        whileHover={{ scale: 1.12 }}
                                        whileTap={{ scale: 0.92 }}
                                        onClick={() => {
                                            setSelectedColorIdx(i);
                                            setImageKey(color.name);
                                        }}
                                        title={color.name}
                                        className={cn(
                                            "relative cursor-pointer w-9 h-9 rounded-full transition-all duration-200",
                                            selectedColorIdx === i ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "ring-1 ring-white/20 hover:ring-white/40",
                                        )}
                                        style={{ background: color.hex }}
                                    >
                                        {selectedColorIdx === i && (
                                            <motion.div layoutId="colorCheck" className="absolute inset-0 rounded-full flex items-center justify-center">
                                                <Check size={12} className="text-white drop-shadow-md" />
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-base font-display font-semibold text-white mb-3!">Dung lượng</p>
                            <div className="flex gap-2 flex-wrap">
                                {product.storage.map((s, i) => (
                                    <motion.button
                                        key={s}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setSelectedStorageIdx(i)}
                                        className={cn(
                                            "px-4! py-2! cursor-pointer rounded-xl text-sm font-display font-semibold border transition-all",
                                            selectedStorage === s ? "bg-white text-black border-white" : "bg-white/6 text-text-primary border-white/12 hover:bg-white/12 hover:text-white",
                                        )}
                                    >
                                        {s}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: addedToCart ? "0 0 30px rgba(48,209,88,0.3)" : "0 0 30px rgba(41,151,255,0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToCart}
                                className={cn(
                                    "flex-1 py-3.5! cursor-pointer rounded-2xl font-display font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300",
                                    addedToCart
                                        ? "bg-[#30d158] text-white"
                                        : "bg-white/90 hover:bg-text-primary text-black/80 hover:text-white/70 hover:shadow-[0_4px_14px_rgba(41,151,255,0.35)] shadow-lg shadow-text-primary/40",
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
                        </div>
                        <div className="flex gap-2.5">
                            <motion.a
                                href="https://zalo.me/YOUR_ZALO_NUMBER"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 py-3.5! rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-display font-bold text-base transition-colors flex items-center justify-center gap-2"
                            >
                                <SiZalo size={18} /> Mua qua Zalo
                            </motion.a>
                            <motion.a
                                href="https://m.me/YOUR_FB_PAGE"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 py-3.5! rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-display font-bold text-base transition-colors flex items-center justify-center gap-2"
                            >
                                <FaFacebookF size={18} /> Nhắn qua Facebook
                            </motion.a>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {PRODUCT_POLICY.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex flex-col items-center gap-1.5 text-center p-3! rounded-xl bg-white/10">
                                    <Icon size={24} className="text-blue-600" />
                                    <span className="text-sm text-text-primary leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 max-w-3xl">
                    <button onClick={() => setSpecOpen(!specOpen)} className="flex items-center justify-between w-full pb-4! border-b border-white/8 group cursor-pointer">
                        <h2 className="font-display font-bold text-2xl text-text-primary">Thông số kỹ thuật</h2>
                        <motion.div animate={{ rotate: specOpen ? 180 : 0 }}>
                            <ChevronDown size={20} className="text-text-primary group-hover:text-white transition-colors" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {specOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                <dl className="divide-y divide-white/8">
                                    {specs.map(({ label, value }) => (
                                        <div key={label} className="flex py-4! gap-8">
                                            <dt className="text-text-primary text-base w-32 shrink-0">{label}</dt>
                                            <dd className="text-white text-base">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-14! max-w-3xl">
                    <h2 className="font-display font-bold text-2xl text-text-primary mb-4! pb-4! border-b border-white/8">Mô tả sản phẩm</h2>
                    <p className="text-text-primary text-base leading-relaxed">{product.description}</p>
                </div>
                {relatedProducts.length > 0 && (
                    <div className="mt-20!">
                        <h2 className="font-display font-bold text-2xl text-text-primary mb-8!">Sản phẩm liên quan</h2>
                        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {relatedProducts.map((p, i) => (
                                <ProductCard key={p.id} product={p} index={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
