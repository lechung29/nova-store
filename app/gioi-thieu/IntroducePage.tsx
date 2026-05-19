/** @format */

import { CommitSection } from "@/components/introduce/CommitSection";
import { HeroSection } from "@/components/introduce/HeroSection";
import { ServiceInfo } from "@/components/introduce/ServiceInfo";
import { StatsSection } from "@/components/introduce/StatsSection";
import { BackgroundDecor } from "@/components/policy";

export default function IntroducePage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <BackgroundDecor />
            <div className="relative z-10 mx-auto! max-w-7xl px-4! pb-24! pt-10! sm:px-16!">
                <HeroSection />
                <StatsSection />
                <ServiceInfo />
                <CommitSection />
            </div>
        </main>
    );
}
