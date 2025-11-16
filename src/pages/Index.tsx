import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CaseStudies } from "@/components/CaseStudies";
import { Blog } from "@/components/Blog";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Main content with horizontal padding only on desktop */}
      <div className="px-0 md:px-[70px]">
        <Navbar />
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <ToolsIntegration />
        <Testimonials />
        <Blog />
        <CaseStudies />
        <FAQ />
      </div>

      {/* Final CTA full-width, without extra side padding */}
      <FinalCTA />
    </main>
  );
};

export default Index;