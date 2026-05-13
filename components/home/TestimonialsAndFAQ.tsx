/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import reviews from "@/data/reviews.json";
import faqs from "@/data/faqs.json";
import { ReviewItem } from "@/types";
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from "../ui/tooltip";

const GAP = 16;

export function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => {
            const w = entry.contentRect.width;
            setContainerWidth(w);
            setVisibleCount(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const maxIndex = Math.max(0, reviews.length - visibleCount);
    useEffect(() => {
        setIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);

    const cardWidth = containerWidth > 0 ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount : 280;
    const step = cardWidth + GAP;

    const prev = () => setIndex((i) => Math.max(i - 1, 0));
    const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

    return (
        <section className="py-20! px-8! sm:px-16! overflow-hidden">
            <div className="max-w-7xl mx-auto!">
                <div className="mb-14!">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14!">
                        <h2 className="font-extrabold text-4xl sm:text-5xl text-text-primary">Khách hàng nói gì về chúng tôi</h2>
                        <div className="flex items-end justify-between">
                            <p className="text-text-primary/90 text-lg max-w-lg mx-auto! mt-4!">Hàng nghìn khách hàng hài lòng tại Đà Nẵng. Cùng xem những gì họ nói.</p>
                            <div className="flex items-center gap-2 shrink-0 mb-1!">
                                <button
                                    onClick={prev}
                                    disabled={index === 0}
                                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white bg-text-primary/55 hover:bg-text-primary/70 disabled:bg-text-primary/40 hover:border-white/25 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer transition-all"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={next}
                                    disabled={index === maxIndex}
                                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white bg-text-primary/55 hover:bg-text-primary/70 disabled:bg-text-primary/40 hover:border-white/25 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer transition-all"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: -(maxIndex * step), right: 0 }}
                        dragElastic={0.06}
                        animate={{ x: -(index * step) }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -60) next();
                            else if (info.offset.x > 60) prev();
                        }}
                        className="flex select-none"
                        style={{ gap: GAP, width: reviews.length * step - GAP }}
                    >
                        {reviews.map((review: ReviewItem) => (
                            <div
                                key={review.id}
                                style={{ width: cardWidth, flexShrink: 0 }}
                                className="p-5! rounded-2xl bg-[#333]/50 border border-white/8 hover:border-white/16 transition-colors duration-300 shadow-2xl"
                            >
                                <Quote size={20} className="text-blue-400 mb-3!" />

                                <div className="flex items-center gap-0.5 mb-3!">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <TooltipProvider delayDuration={300}>
                                    <Tooltip key={review.id}>
                                        <TooltipTrigger asChild>
                                            <p className="text-text-primary text-sm leading-relaxed mb-4! line-clamp-4">{review.review}</p>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">{review.review}</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <span className="inline-block text-sm font-semibold bg-[#2997ff]/10 text-[#2997ff] border border-[#2997ff]/20 px-2! py-0.5! rounded-full mb-4!">{review.product}</span>

                                <div className="flex items-center gap-3 pt-4! border-t border-white/8">
                                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#2997ff] to-[#bf5af2] flex items-center justify-center text-xs font-bold text-white shrink-0">
                                        {review.avatar}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-semibold truncate">{review.name}</p>
                                        <p className="text-text-primary text-xs">
                                            {review.location} · {review.date}
                                        </p>
                                    </div>
                                    {review.verified && <span className="ml-auto! text-[9px] text-[#30d158] bg-[#30d158]/10 border border-[#30d158]/20 px-1.5! py-0.5! rounded-full shrink-0">✓</span>}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-6!">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`rounded-full transition-all duration-300 ${i === index ? "w-6 h-2 bg-[#2997ff]" : "w-2 h-2 bg-white/40 hover:bg-white/60 cursor-pointer"}`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10!"
                >
                    {[
                        { value: "4.9/5", label: "Điểm đánh giá trung bình" },
                        { value: "3,000+", label: "Khách hàng hài lòng" },
                        { value: "99.9%", label: "Giao hàng đúng hẹn" },
                        { value: "24/7", label: "Hỗ trợ khách hàng" },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center p-4! rounded-2xl bg-[#333]/50 border border-white/8">
                            <p className="font-display font-extrabold text-2xl text-white">{value}</p>
                            <p className="text-text-primary text-sm mt-1!">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20! px-8! sm:px-16!">
            <div className="w-full mx-auto!">
                <div className="mb-14!">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14!">
                        <h2 className="font-extrabold text-4xl sm:text-5xl text-text-primary">Câu hỏi thường gặp</h2>
                        <p className="text-text-primary/90 text-lg max-w-lg mx-auto! mt-4!">Mọi thắc mắc về sản phẩm và dịch vụ đều có câu trả lời ở đây.</p>
                    </motion.div>
                </div>
                <div className="space-y-3!">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
                                open === i ? "bg-[#111] border-white/18" : "bg-[#0d0d0d] border-white/8 hover:border-white/14"
                            }`}
                        >
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5! text-left cursor-pointer">
                                <span className="font-display font-semibold text-sm sm:text-base text-white/80 pr-4!">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: open === i ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0 w-7 h-7 rounded-full bg-white/8 flex items-center justify-center text-white/80"
                                >
                                    <ChevronDown size={14} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {open === i && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <p className="px-5! pb-5! text-white/80 text-base leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
