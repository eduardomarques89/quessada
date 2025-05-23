
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { CarouselSection } from "@/components/CarouselSection";
import { FAQ } from "@/components/FAQ";
import { LuxuryCarCarousel } from "@/components/LuxuryCarCarousel";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen font-inter bg-black">
      <CarouselSection />
      <Services />
      <Reviews />
      <FAQ />
      <LuxuryCarCarousel />
      <Footer />
    </div>
  );
}
