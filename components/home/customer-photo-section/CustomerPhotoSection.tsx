/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import customerPhotos from "@/data/customerphoto.json";
import { CustomerPhotosHeader } from "./CustomerPhotoHeader";
import { CustomerPhotosCarousel } from "./CustomerPhotoCarousel";

const GAP = 16;

export function CustomerPhotosGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ro = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width;
            setContainerWidth(width);
            setVisibleCount(width >= 1024 ? 4 : width >= 640 ? 2 : 1);
        });

        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const maxIndex = Math.max(0, customerPhotos.length - visibleCount);

    useEffect(() => {
        setIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const cardWidth = containerWidth > 0 ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount : 280;
    const step = cardWidth + GAP;

    const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

    return (
        <section className="overflow-hidden px-8! py-20! sm:px-16!">
            <div className="mx-auto! max-w-7xl space-y-12!">
                <CustomerPhotosHeader />
                <div ref={containerRef} className="relative">
                    <CustomerPhotosCarousel
                        photos={customerPhotos}
                        cardWidth={cardWidth}
                        step={step}
                        gap={GAP}
                        maxIndex={maxIndex}
                        currentIndex={index}
                        onDragEnd={(offset) => {
                            if (offset < -60) handleNext();
                            else if (offset > 60) handlePrev();
                        }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrev}
                        disabled={index === 0}
                        className="absolute left-0 top-1/2 z-20 -translate-x-8 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-text-primary/55 text-white/60 transition-all hover:border-white/25 hover:bg-text-primary/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNext}
                        disabled={index === maxIndex}
                        className="absolute right-0 top-1/2 z-20 translate-x-8 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-text-primary/55 text-white/60 transition-all hover:border-white/25 hover:bg-text-primary/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronRight size={20} />
                    </motion.button>
                </div>
                <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`rounded-full cursor-pointer transition-all duration-300 ${i === index ? "h-2 w-6 bg-blue-500" : "h-2 w-2 bg-white/40 hover:bg-white/60"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
