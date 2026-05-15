/** @format */

import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { ReviewItem } from "@/types";
import { ReviewCard } from "./ReviewCard";

interface ReviewCarouselProps {
    reviews: ReviewItem[];
    cardWidth: number;
    step: number;
    gap: number;
    maxIndex: number;
    currentIndex: number;
    onDragEnd: (offset: number) => void;
}

export const ReviewCarousel = forwardRef<HTMLDivElement, ReviewCarouselProps>(({ reviews, cardWidth, step, gap, maxIndex, currentIndex, onDragEnd }, ref) => {
    return (
        <div ref={ref} className="cursor-grab overflow-hidden active:cursor-grabbing">
            <motion.div
                drag="x"
                dragConstraints={{ left: -(maxIndex * step), right: 0 }}
                dragElastic={0.06}
                animate={{ x: -(currentIndex * step) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onDragEnd={(_, info) => onDragEnd(info.offset.x)}
                className="flex select-none"
                style={{ gap, width: reviews.length * step - gap }}
            >
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} cardWidth={cardWidth} />
                ))}
            </motion.div>
        </div>
    );
});

ReviewCarousel.displayName = "ReviewCarousel";
