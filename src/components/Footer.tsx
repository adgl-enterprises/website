const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ADGL Enterprises</h3>
            <p className="text-primary-foreground/80">
              Pioneering blockchain technology and ASIC development from Colorado Springs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Blockchain R&D</li>
              <li>ASIC & IP Development</li>
              <li>Crypto Technology</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-primary-foreground/80">
              president@adgl-enterprises.com
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Colorado Springs, CO
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2026 ADGL Enterprises, LLC. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 mt-2 text-sm">
            3472 Research Pkwy Ste 104 Pmb 623, Colorado Springs, CO 80920
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;