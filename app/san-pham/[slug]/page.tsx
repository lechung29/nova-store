/** @format */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { all_products, formatVND } from "@/utils";
import ProductDetailClient from "./ProductClientDetails";

const BASE_URL = "https://novastore.com.vn";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.jpg`;

interface PageProps {
    params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
    return all_products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = all_products.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: "Sản phẩm không tồn tại",
            description: "Trang sản phẩm bạn tìm kiếm không tồn tại. Khám phá thêm tại Nova Store.",
        };
    }

    const minPrice = Math.min(...product.variants.map((v) => v.price));
    const title = `${product.name} Chính Hãng VN/A — Giá ${formatVND(minPrice)}`;
    const description = `${product.shortDescription} Mua ${product.name} chính hãng tại Nova Store Đà Nẵng. Bảo hành 12 tháng Apple, giao hàng toàn quốc.`;
    const url = `${BASE_URL}/san-pham/${product.slug}`;
    const ogImage = product.variants[0]?.image?.url ? `${BASE_URL}${product.variants[0].image.url}` : DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        keywords: [
            product.name.toLowerCase(),
            `${product.name.toLowerCase()} giá bao nhiêu`,
            `mua ${product.name.toLowerCase()} chính hãng`,
            `${product.name.toLowerCase()} đà nẵng`,
            `${product.name.toLowerCase()} nova store`,
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Nova Store",
            locale: "vi_VN",
            type: "website",
            images: [{ url: ogImage, width: 1200, height: 630, alt: product.name }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    };
}

function ProductJsonLd({ slug }: { slug: string }) {
    const product = all_products.find((p) => p.slug === slug);
    if (!product) return null;

    const minPrice = Math.min(...product.variants.map((v) => v.price));
    const ogImage = product.variants[0]?.image?.url ? `${BASE_URL}${product.variants[0].image.url}` : DEFAULT_OG_IMAGE;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.shortDescription,
        image: ogImage,
        url: `${BASE_URL}/san-pham/${product.slug}`,
        brand: { "@type": "Brand", name: "Apple" },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
        },
        offers: {
            "@type": "Offer",
            price: minPrice,
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Nova Store",
                url: BASE_URL,
            },
        },
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const product = all_products.find((p) => p.slug === slug);

    if (!product) notFound();

    return (
        <>
            <ProductJsonLd slug={slug} />
            <ProductDetailClient product={product} />
        </>
    );
}
