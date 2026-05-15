/** @format */

"use client";

import categoryShowcase from "@/data/categoryshowcase.json";
import { BackgroundDecor } from "./BackgroundDecor";
import { CategoryHeader } from "./CategoryHeader";
import { CategoryGrid } from "./CategoryGrid";

export function CategoryShowcase() {
    return (
        <section className="relative overflow-hidden px-8! py-20! sm:px-16!">
            <BackgroundDecor />

            <div className="mx-auto! max-w-7xl">
                <CategoryHeader />
                <CategoryGrid categories={categoryShowcase} />
            </div>
        </section>
    );
}
