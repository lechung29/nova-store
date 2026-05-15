/** @format */

"use client";

import { PageLoaderView } from "@/components/layout/Fallback";
import { Suspense } from "react";
import PolicyComponent from "./PolicyPage";;
export default function PolicyPage() {
    return (
        <Suspense fallback={<PageLoaderView />}>
            <PolicyComponent />
        </Suspense>
    );
}
