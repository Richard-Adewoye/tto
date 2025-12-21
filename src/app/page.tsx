import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingCard from "./components/FloatingCard";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
import Navbar from "./components/Header";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 overflow-x-hidden">
      {/* Centralized subtle blue glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[32rem] h-[32rem] bg-blue-300/15 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <Hero />

      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
