/** @format */

import Link from "next/link";

interface NavDesktopProps {
    navLinks: readonly { label: string; href: string; src?: string, icon?: any }[];
}

export function NavDesktop({ navLinks }: NavDesktopProps) {
    return (
        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex overflow-hidden">
            {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="group relative flex items-center text-base text-text-primary transition-colors duration-200 hover:text-white">
                    {!!link.src && <img src={link.src} alt={link.label} className="mr-1! inline-block h-4 w-4 object-contain" />}
                    {!!link.icon && <link.icon className="mr-1! text-text-primary inline-block h-4 w-4" />}
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
                </Link>
            ))}
        </div>
    );
}
