/** @format */

import { CartItem } from "@/types";
import { formatVND, getItemImage, getItemPrice } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { QuantityControl } from "./CartQuantityControl";

export function CartItemRow({ item }: { item: CartItem }) {
    const image = getItemImage(item);
    const price = getItemPrice(item);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 items-center gap-4! border-b border-white/8 py-6! sm:grid-cols-[1fr_120px_140px_120px]"
        >
            <div className="flex items-center gap-4!">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5">
                    <img src={image?.url ?? ""} alt={image?.alt} className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                    <Link href={`/san-pham/${item.product.slug}`} className="truncate text-base font-semibold leading-tight text-white transition-colors hover:text-blue-400">
                        {item.product.name}
                    </Link>
                    <div className="mt-2! flex items-center gap-1.5!">
                        <span className="h-3 w-3 shrink-0 rounded-full border border-white/10" style={{ background: item.selectedColor.hex }} />
                        <span className="text-sm text-white/70">
                            {item.selectedColor.name} · {item.selectedStorage}
                        </span>
                    </div>
                    <p className="mt-1! text-base text-white/70 sm:hidden">{formatVND(price)}</p>
                </div>
            </div>

            <div className="hidden justify-center sm:flex">
                <span className="text-base text-white/70">{formatVND(price)}</span>
            </div>

            <div className="flex sm:justify-center">
                <QuantityControl item={item} />
            </div>

            <div className="flex sm:justify-end">
                <span className="text-base font-bold text-white">{formatVND(price * item.quantity)}</span>
            </div>
        </motion.div>
    );
}
