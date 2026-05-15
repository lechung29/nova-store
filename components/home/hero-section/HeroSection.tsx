/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { animation_ease, hero_section_images, hero_section_stats } from "@/utils/constants";
import { BackgroundDecor } from "./BackgroundDecor";
import { HeroCarousel } from "./HeroCarousel";
import { HeroContent } from "./HeroContent";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setImageIndex((prev) => (prev + 1) % hero_section_images.length);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section ref={ref} className="relative isolate min-h-screen overflow-hidden flex items-center justify-center bg-black">
            <div className="absolute inset-0 bg-black" />

            <BackgroundDecor y={y} />

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto! px-6! sm:px-10! flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 pb-20! sm:pb-28! pt-20! sm:pt-10! min-h-screen"
            >
                <HeroCarousel images={hero_section_images} currentIndex={imageIndex} onImageSelect={setImageIndex} />
                <HeroContent imageIndex={imageIndex} animationEase={animation_ease} stats={hero_section_stats} />
            </motion.div>

            <div className="absolute inset-0 md:hidden overflow-hidden">
                <AnimatePresence mode="sync">
                    <motion.div key={imageIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                        <Image
                            src={hero_section_images[imageIndex].src}
                            alt={hero_section_images[imageIndex].label}
                            fill
                            priority
                            sizes="(min-width: 1280px) 384px, (min-width: 768px) 40vw, 100vw"
                            className="object-contain scale-100 opacity-90"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black" />
            </div>

            <ScrollIndicator />
        </section>
    );
}
