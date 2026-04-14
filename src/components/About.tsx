import { Card, CardContent } from "@/components/ui/card";
import blockchainImage from "@/assets/blockchain-network.jpg";

const About = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Innovation at Altitude
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based in Colorado Springs, we're conducting cutting-edge research and development 
            in blockchain technology and preparing to expand into ASIC development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={blockchainImage} 
              alt="Blockchain Technology Network"
              className="rounded-lg shadow-mountain w-full"
            />
          </div>
          
          <div className="space-y-8">
            <Card className="p-6 shadow-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Blockchain R&D</h3>
                <p className="text-muted-foreground">
                  Our research focuses on advancing blockchain technology, exploring new consensus 
                  mechanisms, and developing innovative solutions for the decentralized future.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">ASIC & IP Development</h3>
                <p className="text-muted-foreground">
                  We're preparing to expand into Application-Specific Integrated Circuit (ASIC) 
                  development, bringing specialized hardware solutions to the crypto ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Colorado Innovation</h3>
                <p className="text-muted-foreground">
                  Located in Colorado Springs, we combine the entrepreneurial spirit of the 
                  American West with cutting-edge technology development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;