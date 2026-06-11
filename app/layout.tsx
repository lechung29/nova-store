/** @format */

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { FACEBOOK_PAGE_URL, STORE_ADDRESS, ZALO_URL } from "@/utils/constants";

const BASE_URL = "https://novastore.com.vn";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: "Nova Store — Shop iPhone, Apple Chính Hãng Tại Đà Nẵng",
        template: "%s | Nova Store Đà Nẵng",
    },

    description: "Nova Store — Shop bán iPhone, iPad, Apple Watch, AirPods chính hãng VN/A tại Đà Nẵng. Giá tốt, bảo hành 12 tháng, giao hàng toàn quốc. Đại lý Apple uy tín.",

    keywords: [
        "nova store",
        "nova store đà nẵng",
        "shop bán điện thoại đà nẵng",
        "shop điện thoại đà nẵng uy tín",
        "mua iphone đà nẵng",
        "iphone đà nẵng",
        "iphone chính hãng đà nẵng",
        "mua iphone chính hãng đà nẵng",
        "đại lý apple đà nẵng",
        "iphone chính hãng vn/a",
        "ipad chính hãng đà nẵng",
        "apple watch đà nẵng",
        "airpods chính hãng đà nẵng",
        "mua điện thoại chính hãng đà nẵng",
        "cửa hàng apple đà nẵng",
    ],

    alternates: {
        canonical: BASE_URL,
    },

    openGraph: {
        title: "Nova Store — Shop iPhone, Apple Chính Hãng Tại Đà Nẵng",
        description: "Shop bán iPhone, iPad, Apple Watch, AirPods chính hãng VN/A tại Đà Nẵng. Giá tốt, bảo hành 12 tháng, giao hàng toàn quốc.",
        url: BASE_URL,
        siteName: "Nova Store",
        locale: "vi_VN",
        type: "website",
        images: [
            {
                url: "/logo.jpg",
                width: 1200,
                height: 630,
                alt: "Nova Store — Shop iPhone, Apple Chính Hãng Tại Đà Nẵng",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Nova Store — Shop iPhone, Apple Chính Hãng Tại Đà Nẵng",
        description: "Shop bán iPhone, iPad, Apple Watch, AirPods chính hãng VN/A tại Đà Nẵng. Giá tốt, bảo hành 12 tháng.",
        images: ["/logo.jpg"],
    },

    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: "/favicon.ico",
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

const structuredData = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "Nova Store",
    alternateName: ["Nova Store Đà Nẵng", "Shop iPhone Đà Nẵng Nova Store"],
    description: "Shop bán iPhone, iPad, AirPods, Apple Watch chính hãng VN/A tại Đà Nẵng. Bảo hành 12 tháng, giá tốt, uy tín.",
    url: BASE_URL,
    telephone: "+84-385-535-606",
    priceRange: "₫₫",
    image: `${BASE_URL}/logo.jpg`,
    address: {
        "@type": "PostalAddress",
        streetAddress: `${STORE_ADDRESS}`,
        addressLocality: "Đà Nẵng",
        addressRegion: "Đà Nẵng",
        postalCode: "550000",
        addressCountry: "VN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 16.0512058,
        longitude: 108.1519996,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "21:00",
        },
    ],
    sameAs: [
        `${FACEBOOK_PAGE_URL}`,
        `${ZALO_URL}`,
    ],
    hasMap: "https://www.google.com/maps/place/49+%C4%90%C3%A0+S%C6%A1n,+H%C3%B2a+Kh%C3%A1nh,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0512508,108.1519996,17z/data=!3m1!4b1!4m6!3m5!1s0x3142193761a67ff9:0x79c7eb1ed34717b4!8m2!3d16.0512457!4d108.1545745!16s%2Fg%2F11p06b8plt?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D",
    servesCuisine: undefined,
    currenciesAccepted: "VND",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, MoMo, ZaloPay",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..900;1,400..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
