/** @format */

import { PageLoaderView } from "@/components/layout/Fallback";
import { Suspense } from "react";
import HomeComponent from "./HomePage";

export default function HomePage() {
    return (
        <Suspense fallback={<PageLoaderView />}>
            <HomeComponent />
        </Suspense>
    );
}
