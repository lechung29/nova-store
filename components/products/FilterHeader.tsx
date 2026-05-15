/** @format */

import { motion } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterHeaderProps {
    hasActiveFilters: boolean;
    onReset: () => void;
    onClose?: () => void;
}

export function FilterHeader({ hasActiveFilters, onReset, onClose }: FilterHeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                    <SlidersHorizontal size={18} className="text-text-primary" />
                </div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">Bộ lọc</p>
            </div>
            <div className="flex items-center gap-2">
                {hasActiveFilters && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onReset}
                        className="cursor-pointer rounded-lg px-3! py-1.5! text-xs font-display font-semibold text-text-primary/90 transition-all hover:text-white"
                    >
                        Xóa tất cả
                    </motion.button>
                )}
                {onClose && (
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="cursor-pointer rounded-lg p-2! text-gray-600 transition-all hover:bg-transparent/70 hover:text-gray-200"
                    >
                        <X size={18} />
                    </motion.button>
                )}
            </div>
        </div>
    );
}
