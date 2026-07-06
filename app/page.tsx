import Navbar from "./components/shared/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
