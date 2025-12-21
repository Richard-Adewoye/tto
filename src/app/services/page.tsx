import Footer from '../components/Footer';
import Navbar from '../components/Header';
import ServicesOne from '../components/servicesOne';
import ServicesTwo from '../components/ServicesTwo';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
      <ServicesOne />
      <ServicesTwo />
      <Footer/>
    </main>
  );
}