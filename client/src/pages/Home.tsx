import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import FounderStory from "@/components/FounderStory";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-primary/20 selection:text-primary">
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Specs />
        <FounderStory />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
