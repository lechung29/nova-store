/** @format */

import { motion } from "framer-motion";

export function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
        >
            <span className="text-xs uppercase tracking-widest text-text-primary">Khám phá</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-8 w-px bg-linear-to-b from-white/40 to-transparent" />
        </motion.div>
    );
}
