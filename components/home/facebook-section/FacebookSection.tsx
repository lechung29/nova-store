/** @format */

"use client";

import { animation_ease } from "@/utils/constants";
import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { FacebookContent } from "./FacebookContent";

export function FacebookSection() {
    return (
        <section className="overflow-hidden px-8! py-20! sm:px-16!">
            <div className="mx-auto! max-w-7xl">
                <div className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: animation_ease }}
                        className="flex justify-center"
                    >
                        <PhoneMockup />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: animation_ease }}
                        className="flex flex-col justify-center gap-6 lg:justify-start text-center lg:text-start"
                    >
                        <FacebookContent />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
