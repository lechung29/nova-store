/** @format */

import Link from "next/link";
import { Search } from "lucide-react";
import { SheetContent } from "@/components/ui/sheet";

interface NavMobileProps {
    navLinks: readonly { label: string; href: string; src?: string; icon?: any }[];
    onClose: () => void;
}

export function NavMobile({ navLinks, onClose }: NavMobileProps) {
    return (
        <SheetContent side="left" showCloseButton className="flex flex-col gap-0 border-r border-white/8 bg-black/80 p-0! backdrop-blur-3xl [&>button]:hidden">
            <div className="flex h-14 items-center border-b border-white/8 px-6!">
                <span className="font-display text-base font-bold tracking-tight text-text-primary">NOVA STORE</span>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-3! py-5!">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-start rounded-xl px-4! py-3! text-sm font-display font-medium text-text-primary transition-all duration-150 hover:bg-white/6 hover:text-white"
                    >
                        {!!link.src && <img src={link.src} alt={link.label} className="mr-2! inline-block h-4 w-4 object-contain" />}
                        {!!link.icon && <link.icon className="mr-2! text-text-primary inline-block h-4 w-4" />}
                        {link.label}
                    </Link>
                ))}
            </nav>
            {/* <div className="border-t border-white/8 px-3! py-4! pb-4! pt-4!">
                <Link
                    href="/san-pham"
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-4! py-3! text-sm font-display font-medium text-text-primary transition-all duration-150 hover:bg-white/6 hover:text-white"
                >
                    <Search size={15} />
                    Tìm kiếm sản phẩm
                </Link>
            </div> */}
        </SheetContent>
    );
}
