/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import faqs from "@/data/faqs.json";
import { FAQHeader } from "./FAQHeader";
import { FAQItem } from "./FAQItem";
import { useSearchParams } from "next/navigation";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const searchParams = useSearchParams();
    const isFAQ = searchParams.get("faq");
    const faqRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isFAQ === "true") {
            setTimeout(() => faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
        }
    }, [isFAQ]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" ref={faqRef} className="px-8! py-20! sm:px-16!">
            <div className="mx-auto! max-w-7xl">
                <FAQHeader />

                <div className="space-y-3!">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} isOpen={openIndex === index} onToggle={() => toggleFAQ(index)} />
                    ))}
                </div>
            </div>
        </section>
    );
}
