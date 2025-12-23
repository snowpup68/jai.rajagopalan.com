import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      <Header />
      <Hero />
      <BentoGrid />
      <ExperienceTimeline />
      <Contact />
    </main>
  );
}
