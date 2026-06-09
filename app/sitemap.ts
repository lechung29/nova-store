/** @format */

// app/sitemap.ts
import { MetadataRoute } from "next";
import iphones from "@/data/iphones.json";
import ipads from "@/data/ipads.json";
import appleWatches from "@/data/applewatch.json";
import airpods from "@/data/airpods.json";

const BASE_URL = "https://novastore.com.vn";


const staticPages: MetadataRoute.Sitemap = [
    {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
    },
    {
        url: `${BASE_URL}/san-pham?loai-san-pham=iphone`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/san-pham?loai-san-pham=ipad`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/san-pham?loai-san-pham=watch`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/san-pham?loai-san-pham=airpods`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/gioi-thieu`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/cua-hang`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.4,
    },
    {
        url: `${BASE_URL}/chinh-sach?loai-chinh-sach=bao-hanh`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.4,
    },
    {
        url: `${BASE_URL}/chinh-sach?loai-chinh-sach=thanh-toan`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.4,
    },
    {
        url: `${BASE_URL}/chinh-sach?loai-chinh-sach=van-chuyen`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.4,
    },
    {
        url: `${BASE_URL}/chinh-sach?lien-he=true`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.4,
    },
];

function toSitemapEntries(products: { slug: string }[], _category: string, priority: number): MetadataRoute.Sitemap {
    return products.map((p) => ({
        url: `${BASE_URL}/san-pham/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority,
    }));
}


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...staticPages,
        ...toSitemapEntries(iphones, "iphone", 0.85),
        ...toSitemapEntries(ipads, "ipad", 0.8),
        ...toSitemapEntries(appleWatches, "apple-watch", 0.75),
        ...toSitemapEntries(airpods, "airpods", 0.75),
    ];
}
