/** @format */

import { motion } from "framer-motion";
import { contact_info, social_media } from "@/utils/constants";

interface FooterBrandProps {
    socialMedia: typeof social_media;
}

export const APPLE_LOGO_SVG = (
    <svg className="h-8 w-8 text-white" viewBox="0 0 814 1000" fill="currentColor">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46.1 482 4 202 4 167 4 67.3 72.2 13 180.1 13c68 0 128.1 47.5 172.8 47.5 44.7 0 102-47.5 181.8-47.5 73.2 0 126.5 29.2 168.5 86.5z" />
    </svg>
);

export function FooterBrand({ socialMedia }: FooterBrandProps) {
    return (
        <div className="md:col-span-1">
            <div className="mb-4!">{APPLE_LOGO_SVG}</div>

            <p className="max-w-xs text-base leading-relaxed text-text-primary">Trải nghiệm mua sắm Apple đẳng cấp. Sản phẩm chính hãng, bảo hành tại Đà Nẵng.</p>
            <div className="mt-2! flex flex-col gap-2">
                {contact_info.map((info, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <info.icon className="h-5 w-5 text-text-primary" />
                        <span className="text-sm text-text-primary">{info.label}</span>
                    </div>
                ))}
            </div>
            <div className="mt-6! flex items-center gap-3">
                {socialMedia.map((social) => (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-text-primary transition-all hover:bg-white/12 hover:text-white"
                    >
                        <social.icon />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
