/** @format */

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsHeaderProps {
    maxIndex: number;
    currentIndex: number;
    onPrev: () => void;
    onNext: () => void;
}

export function TestimonialsHeader({ maxIndex, currentIndex, onPrev, onNext }: TestimonialsHeaderProps) {
    return (
        <div className="mb-14!">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14! text-center">
                <h2 className="text-4xl font-display font-extrabold text-text-primary sm:text-5xl">Khách hàng nói gì về chúng tôi</h2>

                <div className="flex items-end justify-between">
                    <p className="mx-auto! mt-4! max-w-lg text-lg text-text-primary/90">Hàng nghìn khách hàng hài lòng tại Đà Nẵng. Cùng xem những gì họ nói.</p>
                    <div className="mb-1! flex shrink-0 items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onPrev}
                            disabled={currentIndex === 0}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-text-primary/55 text-white/60 transition-all hover:border-white/25 hover:bg-text-primary/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-text-primary/40"
                        >
                            <ChevronLeft size={16} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onNext}
                            disabled={currentIndex === maxIndex}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-text-primary/55 text-white/60 transition-all hover:border-white/25 hover:bg-text-primary/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-text-primary/40"
                        >
                            <ChevronRight size={16} />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
