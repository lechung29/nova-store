/** @format */

import { formatVND } from "@/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import  { motion } from "framer-motion";

export function CartSummary({ total, onCheckout }: { total: number; onCheckout: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-full shrink-0 space-y-5! rounded-2xl border border-white/8 bg-white/4 p-6! lg:sticky lg:top-24 lg:w-80"
        >
            <h2 className="text-base font-display font-black uppercase tracking-wider text-white">Tổng cộng giỏ hàng</h2>

            <div className="space-y-3! border-t border-white/8 pt-5!">
                <div className="flex items-center justify-between text-base">
                    <span className="text-white/70">Tạm tính</span>
                    <span className="font-semibold text-white">{formatVND(total)}</span>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/8 pt-4!">
                <span className="font-bold text-white">Tổng</span>
                <span className="text-lg font-display font-black text-white">{formatVND(total)}</span>
            </div>

            <div className="space-y-2.5! pt-1!">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCheckout}
                    className="flex h-12 w-full cursor-pointer items-center justify-center gap-2! rounded-2xl bg-white text-lg font-display font-black text-black shadow-lg shadow-white/10 transition-colors hover:bg-white/90"
                >
                    Tiến hành thanh toán
                    <ArrowRight size={15} />
                </motion.button>

                <Link
                    href="/san-pham"
                    className="flex h-11 w-full items-center justify-center gap-2! rounded-2xl bg-white/10 text-lg font-medium text-white/50 transition-all hover:bg-white/20 hover:text-white"
                >
                    <ArrowLeft size={14} />
                    Tiếp tục mua sắm
                </Link>
            </div>
        </motion.div>
    );
}
