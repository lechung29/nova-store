/** @format */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { animation_ease, nav_links } from "@/utils/constants";
import { NavDesktop } from "./NavbarDesktop";
import { CartButton } from "./CartButton";
import { NavMobile } from "./NavbarMobile";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const { getTotalItems, openCart } = useCartStore();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const totalItems = getTotalItems();

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: animation_ease }}
            className="sticky inset-x-0 top-0 z-50 w-full bg-black/10 backdrop-blur-3xl transition-all duration-300"
        >
            <nav className="mx-auto! flex h-14 items-center justify-between gap-4 max-w-7xl px-6! sm:px-12!">
                <Link href="/" className="shrink-0">
                    <div className="font-display font-bold tracking-tight text-lg text-text-primary">NOVA STORE</div>
                </Link>
                <NavDesktop navLinks={nav_links} />
                <div className="flex items-center gap-1">
                    <Link href="/san-pham" className="hidden md:inline-flex">
                        <Button variant="ghost" size="icon" className="text-text-primary hover:bg-transparent! hover:text-white">
                            <Search className="h-5! w-5!" />
                        </Button>
                    </Link>
                    <CartButton totalItems={mounted ? totalItems : 0} onOpenCart={openCart} />
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden text-text-primary hover:bg-transparent! hover:text-white">
                                <Menu size={20} />
                            </Button>
                        </SheetTrigger>
                        <NavMobile navLinks={nav_links} onClose={() => setIsMenuOpen(false)} />
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
