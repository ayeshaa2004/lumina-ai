import Navbar from "./components/shared/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import Benefits from "./components/landing/Benefits";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";
import FaqItem from "./components/landing/FAQItem";
import FAQ from "./components/landing/FAQSection";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
