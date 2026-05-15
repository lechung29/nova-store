/** @format */

import { Quote, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { ReviewItem } from "@/types";

interface ReviewCardProps {
    review: ReviewItem;
    cardWidth: number;
}

export function ReviewCard({ review, cardWidth }: ReviewCardProps) {
    return (
        <div style={{ width: cardWidth, flexShrink: 0 }} className="rounded-2xl border border-white/8 bg-black/50 p-5! shadow-2xl transition-colors duration-300 hover:border-white/16">
            <Quote size={20} className="mb-3! text-blue-400" />
            <div className="mb-3! flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
            </div>
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <p className="mb-4! line-clamp-4 text-sm leading-relaxed text-text-primary">{review.review}</p>
                    </TooltipTrigger>
                    <TooltipContent side="top">{review.review}</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <span className="mb-4! inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-2! py-0.5! text-sm font-display font-semibold text-blue-500">{review.product}</span>
            <div className="border-t border-white/8" />
            <div className="flex items-center gap-3 pt-4!">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-xs font-display font-bold text-white">
                    {review.avatar}
                </div>
                <div className="min-w-0">
                    <p className="truncate text-sm font-display font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-text-primary">
                        {review.location} · {review.date}
                    </p>
                </div>
                {review.verified && <span className="ml-auto! shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-1.5! py-0.5! text-xs text-green-500">✓</span>}
            </div>
        </div>
    );
}
