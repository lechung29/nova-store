/** @format */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    viewAllHref?: string;
}

export function SectionHeader({ title, viewAllHref }: SectionHeaderProps) {
    return (
        <div className="flex items-end justify-between mb-10!">
            <h2 className="text-4xl font-display font-extrabold text-text-primary sm:text-5xl">{title}</h2>
            {!!viewAllHref && <Link href={viewAllHref} className="hidden items-center gap-2 text-base font-display font-semibold text-text-primary transition-colors hover:text-white sm:flex">
                <motion.span whileHover={{ x: 4 }} className="flex items-center gap-2">
                    Xem tất cả
                    <ArrowRight size={14} />
                </motion.span>
            </Link>}
        </div>
    );
}
