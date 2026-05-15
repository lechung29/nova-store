/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import reviews from "@/data/reviews.json";
import type { ReviewItem } from "@/types";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { ReviewCarousel } from "./ReviewCarousel";
import { TestimonialsStats } from "./TestimonialsStats";

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
            const width = entry.contentRect.width;
            setContainerWidth(width);
            setVisibleCount(width >= 1024 ? 4 : width >= 640 ? 2 : 1);
        });

        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const maxIndex = Math.max(0, reviews.length - visibleCount);

    useEffect(() => {
        setIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const cardWidth = containerWidth > 0 ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount : 280;
    const step = cardWidth + GAP;

    const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

    return (
        <section className="overflow-hidden px-8! py-20! sm:px-16!">
            <div className="mx-auto! max-w-7xl">
                <TestimonialsHeader maxIndex={maxIndex} currentIndex={index} onPrev={handlePrev} onNext={handleNext} />
                <ReviewCarousel
                    ref={containerRef}
                    reviews={reviews as ReviewItem[]}
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
                <div className="mt-6! flex items-center justify-center gap-1.5">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`rounded-full cursor-pointer transition-all duration-300 ${i === index ? "h-2 w-6 bg-blue-500" : "h-2 w-2 bg-white/40 hover:bg-white/60"}`}
                        />
                    ))}
                </div>

                <TestimonialsStats />
            </div>
        </section>
    );
}
