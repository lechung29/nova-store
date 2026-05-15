/** @format */

import { animation_ease } from "@/utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HeroCarouselProps {
    images: readonly { src: string; label: string }[];
    currentIndex: number;
    onImageSelect: (index: number) => void;
}

export function HeroCarousel({ images, currentIndex, onImageSelect }: HeroCarouselProps) {
    return (
        <div className="relative hidden md:flex w-full md:w-1/2 flex-col items-center justify-center">
            <div className="relative h-100 w-84 sm:h-120 sm:w-92">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.9, ease: animation_ease }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].label}
                            fill
                            priority
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="drop-shadow-[0_40px_80px_rgba(41,151,255,0.25)] object-contain"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-8! flex items-center gap-2">
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => onImageSelect(index)}
                        aria-label={`Chọn hình ${index + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: animation_ease }}
                        className={`rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "w-6 h-1.75 bg-white" : "h-1.75 w-1.75 bg-white/25 hover:bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
}
