import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}