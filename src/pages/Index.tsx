
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { CarouselSection } from "@/components/CarouselSection";
import { FAQ } from "@/components/FAQ";

export default function Index() {
  return (
    <div className="min-h-screen font-inter bg-black">
      <CarouselSection />
      <Services />
      <Reviews />
      <FAQ />
      <LeadForm />
    </div>
  );
}
