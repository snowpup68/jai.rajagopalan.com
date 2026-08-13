import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Interests from "@/components/Interests";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div className="wrap">
          <Work />
          <Interests />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
