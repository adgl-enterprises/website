import Hero from "@/components/Hero";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
