/** @format */

"use client";

import { PageLoaderView } from "@/components/layout/Fallback";
import { Suspense } from "react";
import CartComponent from "./CartPage";

export default function CartPage() {
    return (
        <Suspense fallback={<PageLoaderView />}>
            <CartComponent />
        </Suspense>
    );
}
