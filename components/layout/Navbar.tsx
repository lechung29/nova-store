/** @format */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import React, { useEffect, useState } from "react";

const navLinks = [
    { label: "iPhone", href: "/products?category=iphone", src: "/ip17_orange_logo.png" },
    { label: "iPad", href: "/products?category=ipad", src: "/ipad_pro_2018_logo.png" },
    { label: "AirPods", href: "/products?category=airpods", src: "/airpod_logo.png" },
    { label: "Apple Watch", href: "/products?category=watch", src: "/apple_watch_11_logo.png" },
];

export function Navbar() {
    const { getTotalItems, openCart } = useCartStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const totalItems = getTotalItems();

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn("sticky top-0 inset-x-0 z-50 transition-all duration-300 bg-black/10 backdrop-blur-3xl")}
            >
                <nav className="max-w-7xl mx-auto px-6! sm:px-12! h-14 flex items-center justify-between gap-4">
                    <Link href="/" className="shrink-0">
                        <div className="text-lg text-text-primary font-bold tracking-tight">NOVA STORE</div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="text-base text-text-primary hover:text-white transition-colors duration-200 relative group">
                                <img src={link.src} alt={link.label} className="w-4 h-4 object-contain inline-block mr-1!" />
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-1">
                        <Link href="/products" className="hidden md:inline-flex">
                            <Button variant="ghost" size="icon" className={cn("text-text-primary hover:text-white hover:bg-transparent!")}>
                                <Search className="w-5! h-5!" />
                            </Button>
                        </Link>

                        <Button variant="ghost" size="icon" onClick={openCart} className={cn("relative text-text-primary hover:text-white hover:bg-transparent!")}>
                            <ShoppingBag className="w-5! h-5!" />
                            {mounted && totalItems > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 min-w-4.5 h-4.5 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 bg-text-primary/95">
                                    {totalItems}
                                </span>
                            )}
                        </Button>

                        <Sheet open={isOpenMenu} onOpenChange={setIsOpenMenu}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden text-text-primary hover:text-white hover:bg-transparent!">
                                    <Menu size={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent showCloseButton side="left" className="w-72 p-0! bg-[#0c0c0c] border-r border-white/8 backdrop-blur-3xl flex flex-col gap-0 [&>button]:hidden">
                                <div className="px-6! h-14 flex items-center border-b border-white/8">
                                    <span className="text-base font-bold tracking-tight text-text-primary">NOVA STORE</span>
                                </div>
                                <nav className="flex-1 flex flex-col px-3! py-5! gap-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="group flex items-center justify-start px-4! py-3! rounded-xl text-[15px] font-medium text-text-primary hover:text-white hover:bg-white/6 transition-all duration-150"
                                        >
                                            <img src={link.src} alt={link.label} className="w-4 h-4 object-contain inline-block mr-1!" />
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="px-3! pb-4! pt-4! border-t border-white/8 flex flex-col gap-2">
                                    <Link
                                        href="/products"
                                        onClick={() => setIsOpenMenu(false)}
                                        className="flex items-center gap-3 px-4! py-3! rounded-xl text-sm font-medium text-text-primary hover:text-white hover:bg-white/6 transition-all duration-150"
                                    >
                                        <Search size={15} />
                                        Tìm kiếm sản phẩm
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </motion.header>
        </>
    );
}
