/** @format */

// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://novastore.com.vn";


const staticPages: MetadataRoute.Sitemap = [
    {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0,
    },
];

// function toSitemapEntries(products: { slug: string }[], _category: string, priority: number): MetadataRoute.Sitemap {
//     return products.map((p) => ({
//         url: `${BASE_URL}/san-pham/${p.slug}`,
//         lastModified: new Date(),
//         changeFrequency: "weekly" as const,
//         priority,
//     }));
// }


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...staticPages,
        // ...toSitemapEntries(iphones, "iphone", 0.85),
        // ...toSitemapEntries(ipads, "ipad", 0.8),
        // ...toSitemapEntries(appleWatches, "apple-watch", 0.75),
        // ...toSitemapEntries(airpods, "airpods", 0.75),
    ];
}
