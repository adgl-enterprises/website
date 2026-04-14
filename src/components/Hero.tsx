import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          ADGL Enterprises
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-light">
          A Damn Good Life
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
          Pioneering blockchain technology and ASIC development from the heart of Colorado Springs. 
          Where innovation meets the mountains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Explore Our Vision
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => window.location.href = 'mailto:president@adgl-enterprises.com?subject=General Inquiry'}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;