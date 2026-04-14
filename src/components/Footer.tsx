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
            <ul className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-6 gap-y-2 text-primary-foreground/80">
              <li>Blockchain R&D</li>
              <li>Industrial PoW Mining</li>
              <li>ASIC/IP Development</li>
              <li>Crypto Technology</li>
              <li>Technical Consulting</li>
              <li>
                <a
                  href="https://www.atombeacon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm underline-offset-2 hover:text-primary-foreground hover:underline focus-visible:text-primary-foreground focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/70"
                >
                  Atom Beacon™
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
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
          <div className="text-primary-foreground/50 mt-3 text-xs max-w-2xl mx-auto space-y-2">
            <p>
              Hero photograph:{" "}
              <a
                href="https://unsplash.com/photos/brown-and-green-mountains-under-white-sky-during-daytime-bTC6U6peVkg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-primary-foreground/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
              >
                Brown and green mountains under white sky during daytime
              </a>{" "}
              by Alexis Gethin on{" "}
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-primary-foreground/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
              >
                Unsplash
              </a>{" "}
              (
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-primary-foreground/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
              >
                Unsplash License
              </a>
              ).
            </p>
            <p>
              Leadership section photograph:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Pikes_Peak_from_Colorado_Springs_by_David_Shankbone.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-primary-foreground/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
              >
                Pikes Peak from Colorado Springs
              </a>{" "}
              by David Shankbone, licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-primary-foreground/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
              >
                CC BY-SA 3.0
              </a>
              , via Wikimedia Commons.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;