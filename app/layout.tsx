/** @format */

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const BASE_URL = "https://novastore.com.vn";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: "Nova Store — Điện Thoại Apple Chính Hãng Tại Đà Nẵng",
        template: "%s | Nova Store Đà Nẵng",
    },

    description: "Nova Store — Đại lý Apple chính hãng tại Đà Nẵng. Mua iPhone, iPad, Apple Watch, AirPods chính hãng VN/A. Bảo hành 12 tháng, giao hàng toàn quốc.",

    keywords: ["nova store đà nẵng", "mua iphone chính hãng đà nẵng", "đại lý apple đà nẵng", "iphone chính hãng vn/a", "ipad chính hãng", "apple watch chính hãng", "airpods chính hãng"],

    alternates: {
        canonical: BASE_URL,
    },

    openGraph: {
        title: "Nova Store — Điện Thoại Apple Chính Hãng Tại Đà Nẵng",
        description: "Đại lý Apple chính hãng tại Đà Nẵng. iPhone, iPad, Apple Watch, AirPods chính hãng VN/A. Bảo hành 12 tháng.",
        url: BASE_URL,
        siteName: "Nova Store",
        locale: "vi_VN",
        type: "website",
        images: [
            {
                url: "/logo.jpg",
                width: 1200,
                height: 630,
                alt: "Nova Store — Điện Thoại Apple Chính Hãng Tại Đà Nẵng",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Nova Store — Điện Thoại Apple Chính Hãng Tại Đà Nẵng",
        description: "Đại lý Apple chính hãng tại Đà Nẵng. iPhone, iPad, Apple Watch, AirPods.",
        images: ["/logo.jpg"],
    },

    icons: {
        icon: "/icon.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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
