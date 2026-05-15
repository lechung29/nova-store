/** @format */

import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function EmptyCart() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center gap-5! py-32! text-center">
            <ShoppingBag size={64} className="text-white/90" />
            <p className="text-lg text-white/90">Chưa có sản phẩm trong giỏ hàng</p>
            <Link href="/san-pham" className="inline-flex items-center gap-2! rounded-2xl bg-white px-6! py-3! text-base font-bold text-black transition-colors hover:bg-white/90">
                <ArrowLeft size={20} /> Tiếp tục mua sắm
            </Link>
        </motion.div>
    );
}
