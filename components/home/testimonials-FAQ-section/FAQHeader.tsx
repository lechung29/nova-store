/** @format */

import { motion } from "framer-motion";

export function FAQHeader() {
    return (
        <div className="mb-14!">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14! text-center">
                <h2 className="text-4xl font-display font-extrabold text-text-primary sm:text-5xl">Câu hỏi thường gặp</h2>
                <p className="mx-auto! mt-4! max-w-lg text-lg text-text-primary/90">Mọi thắc mắc về sản phẩm và dịch vụ đều có câu trả lời ở đây.</p>
            </motion.div>
        </div>
    );
}
