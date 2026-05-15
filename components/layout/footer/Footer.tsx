/** @format */

"use client";

import { footer_links, marquee_items, social_media } from "@/utils/constants";
import { FooterBottom } from "./FooterBottom";
import { FooterContent } from "./FooterContent";
import { MarqueeSection } from "./MarqueeSection";

export function Footer() {
    return (
        <footer className="mt-10! border-t border-white/8 bg-black/50">
            <MarqueeSection items={marquee_items} />
            <FooterContent footerLinks={footer_links} socialMedia={social_media} />
            <FooterBottom />
        </footer>
    );
}
