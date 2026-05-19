/** @format */

"use client";

import { PageLoaderView } from "@/components/layout/Fallback";
import { Suspense } from "react";
import StoreComponent from "./StorePage";
export default function StorePage() {
    return (
        <Suspense fallback={<PageLoaderView />}>
            <StoreComponent />
        </Suspense>
    );
}
