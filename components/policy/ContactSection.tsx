/** @format */

"use client";

import { contact_buttons, STORE_PHONE, STORE_PHONE_RAW } from "@/utils/constants";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = require("framer-motion").useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </motion.div>
    );
}

export function ContactSection() {
    return (
        <div className="relative z-10 mx-auto! px-6! text-center">
            <SectionReveal>
                <p className="mb-3! text-base font-display font-semibold uppercase tracking-widest text-text-primary">Cần hỗ trợ thêm?</p>
                <h2 className="mb-3! text-2xl font-display font-extrabold text-white sm:text-3xl">Liên hệ Nova Store ngay hôm nay</h2>
                <p className="mx-auto! mb-8! max-w-lg text-base leading-relaxed text-text-primary">
                    Cảm ơn Quý khách đã tin tưởng và sử dụng dịch vụ tại Nova Store. Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ:
                </p>
                <a
                    href={`tel:${STORE_PHONE_RAW}`}
                    className="mb-8! inline-flex items-center gap-3! rounded-2xl border border-blue-500/35 bg-blue-500/12 px-7! py-4! text-2xl font-display font-extrabold text-white shadow-[0_0_32px_rgba(41,151,255,0.15)] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    <Phone size={22} className="text-blue-500" /> {STORE_PHONE}
                </a>
                <div className="flex flex-wrap justify-center gap-3!">
                    {contact_buttons.map(({ href, icon: Icon, label, iconSize, className, external }) => (
                        <motion.a
                            key={href}
                            href={href}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`flex items-center gap-2.5! rounded-xl px-5! py-3! text-sm font-display font-semibold text-white transition-colors ${className}`}
                        >
                            <Icon size={iconSize} />
                            {label}
                        </motion.a>
                    ))}
                </div>
                <div className="mt-10!">
                    <Link href="/san-pham" className="inline-flex items-center gap-2! text-base text-text-primary transition-colors hover:text-blue-400">
                        Quay lại trang sản phẩm
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </SectionReveal>
        </div>
    );
}
