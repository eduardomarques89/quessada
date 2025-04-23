
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Services } from "@/components/Services";

export default function Index() {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Services />
      <LeadForm />
    </div>
  );
}
