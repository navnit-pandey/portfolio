import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero with dominant headline and empirical benchmark callout */}
        <Hero />

        {/* 2. Projects directly after Hero for immediate recruiter proof */}
        <Projects />

        {/* 3. Core Technical Skills grouped cleanly */}
        <Skills />

        {/* 4. Academic Background & Engineering Principles */}
        <About />

        {/* 5. Contact & Socials */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
