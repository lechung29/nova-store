/** @format */

import { HeroSection } from "@/components/home/HeroSection";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Testimonials, FAQ } from "@/components/home/TestimonialsAndFAQ";
import { FacebookSection } from "@/components/home/FacebookSection";

export default function HomeComponent() {
    return (
        <>
            <HeroSection />
            <CategoryShowcase />
            <FeaturedProducts />
            <FacebookSection />
            <Testimonials />
            <FAQ />
        </>
    );
}
