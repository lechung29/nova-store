/** @format */

import Link from "next/link";

interface FooterColumnProps {
    category: string;
    links: readonly { label: string; href: string }[];
}

export function FooterColumn({ category, links }: FooterColumnProps) {
    return (
        <div>
            <h4 className="mb-4! font-display text-base font-semibold text-white/90">{category}</h4>
            <ul className="space-y-2.5!">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link href={link.href} className="text-base text-text-primary transition-colors duration-200 hover:text-white">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
