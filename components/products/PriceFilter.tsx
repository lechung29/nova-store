/** @format */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { formatPriceToM } from "@/utils";
import { price_range } from "@/utils/constants";

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    onMinChange: (min: number) => void;
    onMaxChange: (max: number) => void;
    pricePresets: readonly { label: string; min: number; max: number }[];
}

export function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange, pricePresets }: PriceFilterProps) {
    return (
        <div className="space-y-4!">
            <div className="flex items-center justify-between rounded-lg bg-text-primary/30 p-3! text-sm font-semibold text-white/70">
                <span>{formatPriceToM(minPrice)}</span>
                <span className="font-display font-bold text-black">→</span>
                <span>{formatPriceToM(maxPrice)}</span>
            </div>
            <div className="space-y-4!">
                <div>
                    <label className="mb-2! block text-xs font-display font-semibold uppercase tracking-wider text-white/70">Giá tối thiểu</label>
                    <input
                        type="range"
                        min={price_range.MIN}
                        max={price_range.MAX}
                        step={price_range.STEP}
                        value={minPrice}
                        onChange={(e) => onMinChange(Number(e.target.value))}
                        className="h-2 w-full appearance-none cursor-pointer rounded-lg bg-gray-200 accent-text-primary"
                    />
                </div>
                <div>
                    <label className="mb-2! block text-xs font-display font-semibold uppercase tracking-wider text-white/70">Giá tối đa</label>
                    <input
                        type="range"
                        min={price_range.MIN}
                        max={price_range.MAX}
                        step={price_range.STEP}
                        value={maxPrice}
                        onChange={(e) => onMaxChange(Number(e.target.value))}
                        className="h-2 w-full appearance-none cursor-pointer rounded-lg bg-gray-200 accent-text-primary"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2!">
                {pricePresets.map(({ label, min, max }) => (
                    <motion.button
                        key={label}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            onMinChange(min);
                            onMaxChange(max);
                        }}
                        className={cn(
                            "cursor-pointer rounded-xl py-1.5! text-xs font-display font-medium transition-all",
                            minPrice === min && maxPrice === max ? "bg-white text-gray-900" : "bg-text-primary/50 text-white/85 hover:bg-white hover:text-gray-900",
                        )}
                    >
                        {label}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
