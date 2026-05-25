/** @format */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { all_products } from "@/utils";
import type { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onEnter?: () => void;
}

export function NavBarSearch({ value, onChange, onEnter }: SearchBarProps) {
    const [suggestions, setSuggestions] = useState<IProduct[]>([]);
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (!value.trim()) {
            setSuggestions([]);
            setOpen(false);
            return;
        }
        const query = value.toLowerCase();
        const matched = all_products.filter((p) => p.name.toLowerCase().includes(query));
        setSuggestions(matched);
        setOpen(matched.length > 0);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (slug: string) => {
        setOpen(false);
        onChange("");
        router.push(`/san-pham/${slug}`);
    };

    return (
        <div ref={containerRef} className="relative flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-primary" />
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setOpen(false);
                            onEnter?.();
                        }
                    }}
                    onFocus={() => suggestions.length > 0 && setOpen(true)}
                    className="w-full bg-white/10 border border-white/10 pl-9! pr-9! py-2.5! rounded-xl text-sm text-white placeholder:text-text-primary transition-all focus:border-text-primary/50 focus:bg-white/8 focus:outline-none"
                />
                {value && (
                    <button onClick={() => onChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-text-primary transition-colors hover:text-white">
                        <X size={13} />
                    </button>
                )}
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-md border border-white/10 bg-black/90 backdrop-blur-2xl shadow-md"
                    >
                        <ScrollArea style={{ height: `${Math.min(suggestions.length, 5) * 60}px` }}>
                            <ScrollBar />
                            {suggestions.map((product) => (
                                <button
                                    key={product.id}
                                    onMouseDown={() => handleSelect(product.slug)}
                                    className="flex w-full items-center gap-3 px-4! py-3! text-left transition-colors hover:bg-white/15 cursor-pointer"
                                >
                                    <img src={product.variants[0]?.image.url} alt={product.name} className="h-8 w-8 rounded-lg object-contain" />
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-medium text-white">{product.name}</p>
                                        <p className="text-xs text-text-primary">{product.series}</p>
                                    </div>
                                </button>
                            ))}
                        </ScrollArea>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
