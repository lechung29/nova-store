/** @format */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaTiktok, FaFacebookF } from "react-icons/fa";

const footerLinks = {
    "Sản phẩm": [
        { label: "iPhone", href: "/products?category=iphone" },
        { label: "iPad", href: "/products?category=ipad" },
        { label: "AirPods", href: "/products?category=airpods" },
        { label: "Apple Watch", href: "/products?category=apple-watch" },
    ],
    "Hỗ trợ": [
        { label: "Bảo hành", href: "#" },
        { label: "Sửa chữa", href: "#" },
        { label: "Liên hệ", href: "#" },
        { label: "FAQ", href: "/#faq" },
        { label: "Chính sách đổi trả", href: "#" },
    ],
    "Về chúng tôi": [
        { label: "Giới thiệu", href: "#" },
        { label: "Cửa hàng", href: "#" },
        { label: "Tuyển dụng", href: "#" },
    ],
};

const marqueeItems = ["iPhone 16 Pro Max", "iPad Pro M4", "Apple Intelligence", "AirPods Pro 2", "Apple Watch Ultra 2", "MacBook Pro M4", "Vision Pro"];

const socialMedia = [
    { name: "Facebook", icon: <FaFacebookF className="text-blue-500" />, href: "https://facebook.com/applehousedanang" },
    { name: "TikTok", icon: <FaTiktok />, href: "https://www.tiktok.com/@applehousedanang" },
];
export function Footer() {
    return (
        <footer className="border-t border-white/8 bg-[#0a0a0a] mt-10!">
            <div className="border-b border-white/8 overflow-hidden py-3!">
                <div className="flex whitespace-nowrap marquee-inner">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-4 mx-4! text-sm text-text-primary font-display">
                            {item}
                            <span className="w-1 h-1 rounded-full bg-[#6e6e73]" />
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto! px-8! sm:px-12! pt-16! pb-8!">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12!">
                    <div className="md:col-span-1">
                        <svg className="w-8 h-8 text-white mb-4!" viewBox="0 0 814 1000" fill="currentColor">
                            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46.1 482 4 202 4 167 4 67.3 72.2 13 180.1 13c68 0 128.1 47.5 172.8 47.5 44.7 0 102-47.5 181.8-47.5 73.2 0 126.5 29.2 168.5 86.5z" />
                        </svg>
                        <p className="text-text-primary text-base leading-relaxed max-w-xs">Trải nghiệm mua sắm Apple đẳng cấp. Sản phẩm chính hãng, bảo hành tại Đà Nẵng.</p>
                        <div className="flex items-center gap-3 mt-6!">
                            {socialMedia.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-text-primary hover:text-white hover:bg-white/12 transition-all"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white/90 font-display font-semibold text-base mb-4!">{category}</h4>
                            <ul className="space-y-2.5!">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-text-primary text-base hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/8 pt-6! flex flex-col sm:flex-row items-center justify-between gap-4 text-text-primary text-sm tracking-wider">
                    <p>© 2026 Nova Store Đà Nẵng.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-white transition-colors">
                            Chính sách bảo mật
                        </Link>
                        <span>·</span>
                        <Link href="#" className="hover:text-white transition-colors">
                            Điều khoản sử dụng
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
