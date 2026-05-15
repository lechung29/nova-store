/** @format */

import { facebook_url } from "@/utils/constants";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";

export function FacebookCTA() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <motion.a
                href={facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-2xl bg-white/90 px-6! py-3.5! text-sm font-display font-semibold uppercase tracking-wider text-black/60 shadow-lg shadow-white/25 transition-colors hover:bg-text-primary/30 hover:text-white"
            >
                <FaFacebookF size={16} className="text-blue-500" />
                Đến Fanpage
            </motion.a>
        </div>
    );
}
