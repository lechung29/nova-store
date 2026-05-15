/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    faq: { question: string; answer: string };
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

export function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className={`overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300 ${isOpen ? "border-white/18 bg-black/70" : "border-white/8 bg-black/50 hover:border-white/14"}`}
        >
            <button onClick={onToggle} className="flex w-full cursor-pointer items-center justify-between p-5! text-left">
                <span className="pr-4! text-sm font-display font-semibold text-white/80 sm:text-base">{faq.question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-white/80">
                    <ChevronDown size={14} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5! px-5! text-base leading-relaxed text-white/80">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
