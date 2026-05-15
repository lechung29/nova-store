/** @format */

import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

interface MobileFilterButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export function MobileFilterButton({ isOpen, onClick }: MobileFilterButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`flex cursor-pointer items-center h-8 gap-2 rounded-xl border px-3! py-2! text-sm font-display font-semibold transition-all lg:hidden ${
                isOpen ? "border-blue-500/40 bg-blue-500/20 text-blue-500" : "border-white/10 bg-white/6 text-text-primary hover:text-white"
            }`}
        >
            <SlidersHorizontal size={14} />
            Lọc
        </motion.button>
    );
}
