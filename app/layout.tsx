/** @format */

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
    title: {
        default: "Mua bán điện thoại, máy tính bảng chính hãng uy tín tại Đà Nẵng",
        template: "%s | Nova Store Đà Nẵng",
    },
    description: "Mua iPhone, iPad chính hãng. Giá tốt nhất, giao hàng nhanh.",
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..900;1,400..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-black text-white antialiased">
                <Navbar />
                <div className="relative overflow-x-hidden overflow-y-auto h-[calc(100vh-56px)]">
                    <main>{children}</main>
                    <Footer />
                    <CartDrawer />
                    <FloatingContact />
                </div>
            </body>
        </html>
    );
}
