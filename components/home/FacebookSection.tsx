/** @format */

"use client";

import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";

export function FacebookSection() {
    return (
        <section className="py-20! px-8! sm:px-16! overflow-hidden">
            <div className="max-w-7xl mx-auto!">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center"
                    >
                        <div className="relative w-100 sm:w-120">
                            <div className="absolute -inset-6 bg-[#1877f2]/10 rounded-[50%] blur-3xl" />

                            <div className="relative rounded-[44px] border-[7px] border-text-primary/50 bg-text-primary/50 shadow-2xl shadow-black/60">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-text-primary rounded-b-2xl z-10" />

                                <div className="rounded-[38px] overflow-hidden bg-white">
                                    <img src="/fan_page.png" alt="fan page Nova" />
                                </div>
                            </div>

                            <div className="absolute -right-2.75 top-24 w-1.25 h-10 bg-text-primary/50 rounded-r-md" />
                            <div className="absolute -left-2.75 top-20 w-1.25 h-7 bg-text-primary/50 rounded-l-md" />
                            <div className="absolute -left-2.75 top-32 w-1.25 h-7 bg-text-primary/50 rounded-l-md" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="font-extrabold text-4xl sm:text-5xl text-text-primary/80">
                            FANPAGE CHÍNH THỨC CỦA <span className="inline-block silver-text">NOVA STORE</span>
                        </h2>
                        <p className="text-[#ababab] text-base leading-relaxed max-w-md">
                            Theo dõi fanpage để cập nhật giá mới nhất, chương trình khuyến mãi và được hỗ trợ tư vấn trực tiếp từ đội ngũ của chúng tôi.
                        </p>

                        <div className="flex items-center gap-6 tracking-wide">
                            {[
                                { value: "17K+", label: "Người theo dõi" },
                                { value: "4.9★", label: "Đánh giá" },
                                { value: "24/7", label: "Hỗ trợ inbox" },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <p className="text-white font-bold text-xl">{value}</p>
                                    <p className="text-text-primary text-base mt-0.5!">{label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 flex-wrap">
                            <motion.a
                                href="https://facebook.com/applehousedanang"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-text-primary/30 text-black/60 hover:text-white font-semibold text-sm px-6! py-3.5! rounded-2xl transition-colors shadow-lg shadow-white/25 uppercase tracking-wider"
                            >
                                <FaFacebookF size={16} className="text-blue-500" />
                                Đến Fanpage
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
