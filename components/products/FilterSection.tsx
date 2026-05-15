/** @format */

import { motion } from "framer-motion";

interface FilterSectionProps {
    title: string;
    children: React.ReactNode;
}

export function FilterSection({ title, children }: FilterSectionProps) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-white/8 py-6!">
            <h4 className="mb-5! flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-text-primary/90">
                <div className="h-3 w-1 rounded-full bg-linear-to-b from-text-primary/90 to-text-primary/70" />
                {title}
            </h4>
            {children}
        </motion.div>
    );
}
