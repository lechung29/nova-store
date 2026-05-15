/** @format */

import { AlertCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}

export function ImportantNote() {
    return (
        <SectionReveal delay={0.1}>
            <div className="flex gap-4! rounded-2xl border border-amber-400/20 bg-amber-400/6 p-6!">
                <AlertCircle size={20} className="mt-0.5! shrink-0 text-amber-400" />
                <div>
                    <p className="mb-1! text-base font-display font-semibold text-amber-400">Lưu ý quan trọng</p>
                    <p className="text-sm leading-relaxed text-text-primary">
                        Chính sách đổi trả và bảo hành chỉ áp dụng cho sản phẩm mua trực tiếp tại Nova Store. Sản phẩm đã qua tháo máy, sửa chữa bên ngoài, hoặc hư hỏng do tác động ngoại lực, ngấm
                        nước, rơi vỡ sẽ không thuộc phạm vi bảo hành.
                    </p>
                </div>
            </div>
        </SectionReveal>
    );
}
