/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { IProduct } from "@/types";
import { product_specs_map } from "@/utils/constants";

interface ProductSpecsProps {
    product: IProduct;
    specOpen: boolean;
    onSpecOpenChange: (open: boolean) => void;
}

export function ProductSpecs({ product, specOpen, onSpecOpenChange }: ProductSpecsProps) {
    const specs = product_specs_map
        .map(({ label, key }) => ({
            label,
            value: product.specs[key],
        }))
        .filter((s) => s.value);

    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mt-20!">
            <button onClick={() => onSpecOpenChange(!specOpen)} className="flex items-center justify-between w-full pb-4! border-b border-white/8 cursor-pointer group">
                <h2 className="text-2xl font-bold text-text-primary font-display">Thông số kỹ thuật</h2>
                <motion.div animate={{ rotate: specOpen ? 180 : 0 }}>
                    <ChevronDown size={20} className="text-text-primary transition-colors group-hover:text-white" />
                </motion.div>
            </button>

            <AnimatePresence>
                {specOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <dl className="divide-y divide-white/8">
                            {specs.map(({ label, value }) => (
                                <div key={label} className="flex gap-8 py-4!">
                                    <dt className="w-32 text-base text-text-primary shrink-0">{label}</dt>
                                    <dd className="text-base text-white">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
