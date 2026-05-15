/** @format */

import Link from "next/link";
import { motion } from "framer-motion";
import categoryShowcase from "@/data/categoryshowcase.json";
import { CategoryCard } from "./CategoryCard";

interface CategoryGridProps {
    categories: typeof categoryShowcase;
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {categories.map((category, index) => (
                <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full"
                >
                    <Link href={category.href} className="h-full block">
                        <CategoryCard category={category} />
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
