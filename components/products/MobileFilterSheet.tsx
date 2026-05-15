/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { ProductFilters } from "./ProductFilters";

interface MobileFilterSheetProps {
    isOpen: boolean;
    onClose: () => void;
    allSeries: string[];
    allStorage: string[];
    allColors: { name: string; hex: string }[];
    onFilterChange: () => void;
}

export function MobileFilterSheet({ isOpen, onClose, allSeries, allStorage, allColors, onFilterChange }: MobileFilterSheetProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-40 bg-black/70 lg:hidden" />
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-white/10 bg-black/80 p-6 lg:hidden"
                    >
                        <ProductFilters onFocusWhenFilterChange={onFilterChange} category="all" allSeries={allSeries} allStorage={allStorage} allColors={allColors} onClose={onClose} />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
