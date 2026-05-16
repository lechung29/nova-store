/** @format */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const contacts = [
    {
        label: "Messenger",
        href: "https://m.me/dinhnhanh140220",
        icon: <FaFacebookF />,
        color: "#0084FF",
        bg: "from-[#0084FF] to-[#0099FF]",
    },
    {
        label: "Zalo",
        href: "https://zalo.me/0385535606",
        icon: <SiZalo />,
        color: "#0068FF",
        bg: "from-[#0068FF] to-[#0080FF]",
    },
    {
        label: "Gọi ngay",
        href: "tel:0385535606",
        icon: <Phone size={16} />,
        color: "#34C759",
        bg: "from-[#34C759] to-[#28A745]",
    },
];

export function FloatingContact() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-6 z-40 flex flex-col items-center gap-3">
            <AnimatePresence>
                {open &&
                    contacts.map((c, i) => (
                        <motion.a
                            key={c.label}
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 25 }}
                            whileHover={{ scale: 1.15, x: -4 }}
                            whileTap={{ scale: 0.9 }}
                            className={`relative group flex items-center gap-3`}
                        >
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 + 0.1 }}
                                className="absolute right-14 bg-text-primary/20 backdrop-blur-xl border border-white/15 text--text-primary text-xs font-medium px-3! py-1.5! rounded-xl whitespace-nowrap"
                            >
                                {c.label}
                            </motion.span>

                            <div
                                className={`w-12 h-12 rounded-full bg-linear-to-br ${c.bg} flex items-center justify-center text-white font-bold shadow-lg`}
                                style={{ boxShadow: `0 4px 20px ${c.color}40` }}
                            >
                                {typeof c.icon === "string" ? <span className="text-lg">{c.icon}</span> : c.icon}
                            </div>
                        </motion.a>
                    ))}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setOpen(!open)}
                className="relative w-14 h-14 rounded-full bg-linear-to-br from-[#ffd700] to-[#ff3b30] flex items-center justify-center text-white shadow-2xl cursor-pointer"
                style={{
                    boxShadow: open ? "0 0 0 0 transparent" : "0 4px 30px rgba(41,151,255,0.4), 0 0 0 0 rgba(41,151,255,0.2)",
                }}
            >
                {!open && (
                    <span
                        className="absolute inset-0 rounded-full border-2 border-[#2997ff]/40 scale-110 opacity-0"
                        style={{
                            animation: "pulse-ring 2s ease-out infinite",
                        }}
                    />
                )}
                <motion.div animate={{ rotate: open ? 0 : 0 }} transition={{ duration: 0.2 }}>
                    {open ? <X size={22} /> : <MessageCircle size={22} />}
                </motion.div>
            </motion.button>
        </div>
    );
}
