import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import HeroHeader from "@/components/hero-header";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <HeroHeader />
      <Features />
      <Testimonials />
    </div>
  );
}
