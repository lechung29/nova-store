/** @format */

import { testimonials_stats } from "@/utils/constants";
import { motion } from "framer-motion";

export function TestimonialsStats() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10! grid grid-cols-2 gap-4 md:grid-cols-4">
            {testimonials_stats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-black/50 p-4! text-center">
                    <p className="text-2xl font-display font-extrabold text-white">{value}</p>
                    <p className="mt-1! text-sm text-text-primary">{label}</p>
                </div>
            ))}
        </motion.div>
    );
}
