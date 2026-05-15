/** @format */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Ip17FeaturedCard } from "@/types";
import { useFocusEffect } from "@/hooks/useFocusEffect";

interface FeaturedCardProps {
    data: Ip17FeaturedCard;
    imageSrc?: string;
    index?: number;
}

export function Ip17FeaturedCard({ data, imageSrc = "/ip17-background.png", index = 0 }: FeaturedCardProps) {
    const Icon = data.icon;
    const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useFocusEffect({ maxAngle: 3 });

    return (
        <div style={{ perspective: "900px" }} className="h-full">
            <motion.div
                ref={ref}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8! sm:p-10! cursor-pointer"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    minHeight: "400px",
                    backgroundColor: "#111827",
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: "easeOut",
                }}
                whileHover="hovered"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
            >
                <motion.div className="absolute inset-0 z-0" variants={{ hovered: { opacity: 1 } }} initial={{ opacity: 0.8 }} transition={{ duration: 0.5 }}>
                    <Image
                        src={imageSrc}
                        alt="iPhone 17 Pro Max"
                        fill
                        className="object-contain w-full object-center"
                        style={{
                            filter: "blur(3px) brightness(0.55)",
                        }}
                        priority
                    />
                </motion.div>

                <div className="absolute inset-0 z-1 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

                <motion.div
                    className="absolute -right-10 -bottom-16 z-1 h-72 w-72 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
                    }}
                    variants={{ hovered: { scale: 1.6, opacity: 1 } }}
                    initial={{ opacity: 0.6 }}
                    transition={{ duration: 0.6 }}
                />

                <div className="relative z-10 flex flex-col gap-6">
                    <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                            backgroundColor: "rgba(59,130,246,0.18)",
                        }}
                        variants={{
                            hovered: {
                                backgroundColor: "rgba(59,130,246,0.32)",
                                scale: 1.1,
                            },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon size={24} className="text-blue-400" />
                    </motion.div>

                    <motion.h3 className="text-xl font-display font-bold leading-snug text-white sm:text-2xl" variants={{ hovered: { color: "#93c5fd" } }} transition={{ duration: 0.3 }}>
                        {data.title}
                    </motion.h3>

                    <p className="text-sm leading-relaxed text-text-primary sm:text-base">{data.description}</p>
                </div>

                <motion.div
                    className="relative z-10 h-0.5 w-8 rounded-full bg-blue-500"
                    variants={{
                        hovered: {
                            width: 48,
                            backgroundColor: "#60a5fa",
                        },
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </div>
    );
}
