/** @format */

import { HeroSection } from "@/components/home/hero-section/HeroSection";
import { CategoryShowcase } from "@/components/home/category-showcase-section/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/feature-products-section/FeaturedProducts";
import { FacebookSection } from "@/components/home/facebook-section/FacebookSection";
import { TestimonialsAndFAQSection } from "@/components/home/testimonials-FAQ-section/TestimonialsAndFAQ";
// import { CustomerPhotosGallery } from "@/components/home/customer-photo-section/CustomerPhotoSection";
import { IpNewExperienceSection } from "@/components/home/iphone-new-feature-section/IpNewExperienceSection";

export default function HomeComponent() {
    return (
        <>
            <HeroSection />
            <CategoryShowcase />
            <IpNewExperienceSection />
            <FeaturedProducts />
            <FacebookSection />
            <TestimonialsAndFAQSection />
            {/* <CustomerPhotosGallery /> */}
        </>
    );
}
