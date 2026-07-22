import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";
import Benefits from "@/components/sections/Benefits";
import Programs from "@/components/sections/Programs";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        <Hero />

        <Companies />
        <Programs />

        <Benefits />

        <Process />

        <Stats />

        

        <Testimonials />

        <FAQ />

        <Contact />

      </main>

      <Footer />
    </>
  );
}