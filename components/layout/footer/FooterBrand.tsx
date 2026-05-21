/** @format */

import { motion } from "framer-motion";
import { contact_info, social_media } from "@/utils/constants";

interface FooterBrandProps {
    socialMedia: typeof social_media;
}

export const NOVA_LOGO = (
    <img src="/logo.jpg" alt="Nova logo" className="w-full object-contain"/>
);

export function FooterBrand({ socialMedia }: FooterBrandProps) {
    return (
        <div className="md:col-span-1">
            <div className="mb-4! w-12 h-12 rounded-full overflow-hidden">{NOVA_LOGO}</div>

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
