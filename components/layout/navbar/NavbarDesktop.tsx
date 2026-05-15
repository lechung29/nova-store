/** @format */

import Link from "next/link";

interface NavDesktopProps {
    navLinks: readonly { label: string; href: string; src: string }[];
}

export function NavDesktop({ navLinks }: NavDesktopProps) {
    return (
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="group relative text-base text-text-primary transition-colors duration-200 hover:text-white">
                    <img src={link.src} alt={link.label} className="mr-1! inline-block h-4 w-4 object-contain" />
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
                </Link>
            ))}
        </div>
    );
}
