import ContactComponentOne from '../components/ContactComponentOne';
import Footer from '../components/Footer';
import Navbar from '../components/Header';


export default function Home() {
  return (
    <main>
      <Navbar />
      <ContactComponentOne />
      <Footer/>
    </main>
  );
}