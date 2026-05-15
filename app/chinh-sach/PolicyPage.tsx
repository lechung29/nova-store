/** @format */

"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { policies } from "@/data/policy";
import { policies_hero_stats } from "@/utils/constants";
import { BackgroundDecor, ContactSection, HeroSection, ImportantNote, PolicyCard } from "@/components/policy";

export default function PolicyPage() {
    const searchParams = useSearchParams();
    const policyParam = searchParams.get("loai-chinh-sach");
    const contactParam = searchParams.get("lien-he");

    const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(policyParam ? [policyParam] : []));
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contactRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!policyParam) return;
        setOpenIds(new Set([policyParam]));
        const idx = policies.findIndex((p) => p.id === policyParam);
        if (idx !== -1) {
            setTimeout(() => cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
        }
    }, [policyParam]);
    useEffect(() => {
        if (contactParam === "true") {
            setTimeout(() => contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
        }
    }, [contactParam]);

    const togglePolicy = (id: string) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    return (
        <main className="min-h-screen mx-auto! max-w-7xl px-4! pb-20! pt-10! sm:px-16!">
            <HeroSection stats={policies_hero_stats} />
            <section className="mx-auto! px-6! py-14!">
                <div className="space-y-4!">
                    {policies.map((policy, index) => (
                        <PolicyCard
                            key={policy.id}
                            policy={policy}
                            index={index}
                            isOpen={openIds.has(policy.id)}
                            onToggle={() => togglePolicy(policy.id)}
                            cardRef={(el) => {
                                cardRefs.current[index] = el;
                            }}
                        />
                    ))}
                </div>
            </section>
            <section className="px-6! pb-10!">
                <ImportantNote />
            </section>
            <section ref={contactRef} className="relative overflow-hidden py-16!">
                <BackgroundDecor />
                <ContactSection />
            </section>
        </main>
    );
}
