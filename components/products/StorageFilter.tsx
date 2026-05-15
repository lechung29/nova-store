/** @format */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StorageFilterProps {
    storage: string[];
    selectedStorage: string[];
    onToggle: (storage: string) => void;
}

export function StorageFilter({ storage, selectedStorage, onToggle }: StorageFilterProps) {
    return (
        <div className="flex flex-wrap gap-2.5">
            {storage.map((s) => (
                <motion.button
                    key={s}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onToggle(s)}
                    className={cn(
                        "cursor-pointer rounded-xl px-2! py-1.5! text-xs font-display font-medium transition-all",
                        selectedStorage.includes(s) ? "bg-white text-gray-900" : "bg-text-primary/50 text-white/85 hover:bg-white hover:text-gray-900",
                    )}
                >
                    {s}
                </motion.button>
            ))}
        </div>
    );
}
