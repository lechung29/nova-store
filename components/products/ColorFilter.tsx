/** @format */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ColorFilterProps {
    colors: { name: string; hex: string }[];
    selectedColors: string[];
    onToggle: (color: string) => void;
}

export function ColorFilter({ colors, selectedColors, onToggle }: ColorFilterProps) {
    return (
        <div className="flex flex-wrap gap-3 px-1!">
            {colors.map((color) => (
                <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onToggle(color.name)}
                    title={color.name}
                    className={cn(
                        "h-8 w-8 cursor-pointer rounded-full shadow-md transition-all",
                        selectedColors.includes(color.name) ? "scale-110 ring-2 ring-offset-2 ring-offset-white ring-gray-900 shadow-lg" : "ring-1 ring-gray-300 shadow-sm hover:scale-110",
                    )}
                    style={{ background: color.hex }}
                />
            ))}
        </div>
    );
}
