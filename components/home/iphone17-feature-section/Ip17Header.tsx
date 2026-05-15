/** @format */

"use client";

import { motion } from "framer-motion";

export function Ip17SectionHeader() {
    return (
        <motion.div
            className="flex flex-col gap-3 sm:flex-row md:items-end md:justify-between mb-10!"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
                Trải nghiệm <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-300">iPhone 17 Pro Max</span>
            </h2>

            <p className="text-text-primary text-sm sm:text-base sm:text-right text-center leading-relaxed">Công nghệ đỉnh cao được tinh chỉnh trong từng chi tiết nhỏ nhất</p>
        </motion.div>
    );
}
