/** @format */

"use client";

import { ip18FeaturedCard, ip18Features } from "@/utils/constants";
import { IpNewFeatureCard } from "./IpNewFeatureCard";
import { IpNewFeaturedCard } from "./IpNewFeaturedCard";
import { IpNewSectionHeader } from "./IpNewHeader";

export function IpNewExperienceSection() {
    return (
        <section className="w-full px-8! py-20! sm:px-16!">
            <div className="mx-auto! max-w-7xl">
                <IpNewSectionHeader />

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
    
                    <div className="lg:col-span-3">
                        <div className="h-full">
                            <IpNewFeaturedCard data={ip18FeaturedCard} imageSrc="/ip18-background.png" />
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
                            {ip18Features.slice(0, 4).map((feature, index) => (
                                <IpNewFeatureCard key={feature.id} feature={feature} index={index} />
                            ))}

                            {ip18Features[4] && (
                                <div className="col-span-1 sm:col-span-2">
                                    <IpNewFeatureCard feature={ip18Features[4]} index={4} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
