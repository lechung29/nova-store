/** @format */

"use client";

import { ip17FeaturedCard, ip17Features } from "@/utils/constants";
import { Ip17FeatureCard } from "./Ip17FeatureCard";
import { Ip17FeaturedCard } from "./Ip17FeaturedCard";
import { Ip17SectionHeader } from "./Ip17Header";

export function Ip17ExperienceSection() {
    return (
        <section className="w-full px-8! py-20! sm:px-16!">
            <div className="mx-auto! max-w-7xl">
                <Ip17SectionHeader />

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
    
                    <div className="lg:col-span-3">
                        <div className="h-full">
                            <Ip17FeaturedCard data={ip17FeaturedCard} />
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
                            {ip17Features.slice(0, 4).map((feature, index) => (
                                <Ip17FeatureCard key={feature.id} feature={feature} index={index} />
                            ))}

                            {ip17Features[4] && (
                                <div className="col-span-1 sm:col-span-2">
                                    <Ip17FeatureCard feature={ip17Features[4]} index={4} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
