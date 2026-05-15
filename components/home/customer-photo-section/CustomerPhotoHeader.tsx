/** @format */

import { motion } from "framer-motion";

export function CustomerPhotosHeader() {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-4xl font-display font-extrabold text-text-primary sm:text-5xl">Nova Store xin cảm ơn sự tin tưởng và ủng hộ của quý khách hàng!</h2>
        </motion.div>
    );
}
