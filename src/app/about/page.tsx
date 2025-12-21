import Navbar from "../components/Header";
import AboutSection from "../components/AboutComponent";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    // "bg-white" and "min-h-screen" ensures no black shows through
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}