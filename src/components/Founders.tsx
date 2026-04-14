import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coloradoImage from "@/assets/colorado-innovation.jpg";

const Founders = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by visionary entrepreneurs with a passion for technology and the Colorado lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-primary hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0 text-center">
              <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">GM</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Ginny McKay</h3>
              <p className="text-accent font-medium mb-4">Founder</p>
              <p className="text-muted-foreground">
                Visionary leader driving ADGL Enterprises forward with a focus on innovative 
                and strategic business development.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-primary hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0 text-center">
              <div className="w-24 h-24 bg-gradient-mountain rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">LM</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Luke E. McKay</h3>
              <p className="text-accent font-medium mb-4">Co-Founder</p>
              <p className="text-muted-foreground mb-6">
                Technical co-founder specializing in blockchain technology development and 
                research. Available for consulting services.
              </p>
              <Button 
                variant="mountain" 
                size="sm"
                onClick={() => window.location.href = 'mailto:president@adgl-enterprises.com?subject=Luke McKay Contracting Services'}
              >
                Contracting Services Available
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-mountain">
          <img 
            src={coloradoImage} 
            alt="Colorado Innovation Landscape"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="max-w-2xl p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">Rooted in Colorado</h3>
              <p className="text-lg opacity-90">
                From the innovation corridors of Colorado Springs to the peaks of possibility, 
                we're building the future of blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;