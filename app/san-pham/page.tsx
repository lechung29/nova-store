/** @format */

import { Suspense } from "react";
import { ProductsClient } from "./ProductsClient";
import { PageLoaderView } from "@/components/layout/Fallback";

export const metadata = {
    title: "Sản phẩm Apple",
    description: "Mua iPhone, iPad chính hãng giá tốt nhất.",
};

export default function ProductsPage() {
    return (
        <Suspense fallback={<PageLoaderView />}>
            <ProductsClient />
        </Suspense>
    );
}
