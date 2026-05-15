/** @format */

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative flex-1 max-w-md">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-primary" />
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-white/10 border border-white/10 pl-9! pr-9! py-2.5! rounded-xl text-sm text-white placeholder:text-text-primary transition-all focus:border-text-primary/50 focus:bg-white/8 focus:outline-none"
            />
            {value && (
                <button onClick={() => onChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-text-primary transition-colors hover:text-white">
                    <X size={13} />
                </button>
            )}
        </motion.div>
    );
}
