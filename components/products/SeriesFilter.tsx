/** @format */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SeriesFilterProps {
    series: string[];
    selectedSeries: string[];
    onToggle: (series: string) => void;
}

export function SeriesFilter({ series, selectedSeries, onToggle }: SeriesFilterProps) {
    return (
        <div className="space-y-2.5!">
            {series.map((s) => (
                <motion.label onClick={() => onToggle(s)} key={s} whileHover={{ x: 2 }} className="group flex cursor-pointer items-center gap-3">
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all",
                            selectedSeries.includes(s) ? "border-text-primary/30 bg-text-primary/50" : "border-gray-300 group-hover:border-gray-400 hover:bg-gray-50",
                        )}
                    >
                        {selectedSeries.includes(s) && (
                            <svg className="h-3 w-3 fill-current text-white" viewBox="0 0 12 12">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                        )}
                    </motion.div>
                    <span className={cn("text-sm font-medium transition-colors", selectedSeries.includes(s) ? "text-white" : "text-text-primary group-hover:text-text-primary/90")}>{s}</span>
                </motion.label>
            ))}
        </div>
    );
}
