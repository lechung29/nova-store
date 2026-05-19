/** @format */

"use client";

import { PageLoaderView } from "@/components/layout/Fallback";
import { Suspense } from "react";
import IntroduceComponent from "./IntroducePage"

export default function IntroducePage() {
    return (
        <Suspense fallback={<PageLoaderView />}>
            <IntroduceComponent />
        </Suspense>
    );
}
