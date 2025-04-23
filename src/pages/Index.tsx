
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { CarouselSection } from "@/components/CarouselSection";

export default function Index() {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Services />
      <CarouselSection />
      <Reviews />
      <LeadForm />
    </div>
  );
}
