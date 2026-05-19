/** @format */

"use client";

import { BackgroundDecor } from "@/components/policy";
import { HeroSection } from "@/components/store/HeroSection";
import { StoreList } from "@/components/store/StoreList";
import { StoreMap } from "@/components/store/StoreMap";
import { stores } from "@/utils/constants";
import { useState, useRef } from "react";

export default function StoresPage() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [query, setQuery] = useState("");
    const activeItemRef = useRef<HTMLDivElement | null>(null);

    const filtered = stores.filter(
        (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.city.toLowerCase().includes(query.toLowerCase()) || s.address.toLowerCase().includes(query.toLowerCase()),
    );

    const activeStore = stores[activeIdx];

    const handleSelect = (origIdx: number) => {
        setActiveIdx(origIdx);
        setTimeout(() => {
            activeItemRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
    };

    return (
        <main className="min-h-screen px-4! pb-20! pt-10! sm:px-16!">
            <BackgroundDecor />

            <div className="relative z-10! mx-auto! max-w-7xl">
                <HeroSection />
                <section className="mt-10! overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 shadow-2xl backdrop-blur-sm">
                    <div className="flex flex-col lg:flex-row" style={{ minHeight: 400 }}>
                        <StoreList stores={stores} filtered={filtered} activeIdx={activeIdx} query={query} onQuery={setQuery} onSelect={handleSelect} activeItemRef={activeItemRef} />
                        <StoreMap store={activeStore} />
                    </div>
                </section>
            </div>
        </main>
    );
}
