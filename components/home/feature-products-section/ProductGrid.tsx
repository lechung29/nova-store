/** @format */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import type { IProduct } from "@/types";

interface ProductGridProps {
    products: IProduct[];
    viewAllHref?: string;
}

export function ProductGrid({ products, viewAllHref = "/san-pham" }: ProductGridProps) {
    return (
        <div className="space-y-6!">
            <div className="grid grid-cols-1 gap-5 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
            <div className="mt-6! flex justify-center sm:hidden">
                <Link href={viewAllHref}>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex cursor-pointer items-center gap-2 rounded-full px-6! py-2.5! text-base font-display font-semibold text-text-primary transition-colors hover:text-white"
                    >
                        Xem tất cả sản phẩm
                        <ArrowRight size={14} />
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}