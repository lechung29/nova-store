/** @format */

import { footer_links, social_media } from "@/utils/constants";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";

interface FooterContentProps {
    footerLinks: typeof footer_links;
    socialMedia: typeof social_media;
}

export function FooterContent({ footerLinks, socialMedia }: FooterContentProps) {
    return (
        <div className="mx-auto! max-w-7xl px-8! pb-8! pt-16! sm:px-12!">
            <div className="mb-12! grid grid-cols-1 gap-12 md:grid-cols-4">
                <FooterBrand socialMedia={socialMedia} />
                {Object.entries(footerLinks).map(([category, links]) => (
                    <FooterColumn key={category} category={category} links={links} />
                ))}
            </div>
        </div>
    );
}
