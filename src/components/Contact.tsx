import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to explore blockchain innovation? Let's start the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-primary hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contracting Services</h3>
              <p className="text-muted-foreground mb-6">
                Luke E. McKay offers specialized consulting services in blockchain technology 
                development and research. Contact us to discuss your project needs.
              </p>
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => window.location.href = 'mailto:president@adgl-enterprises.com?subject=Contracting Services Inquiry'}
              >
                Email for Inquiries
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-primary hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Company Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Address:</strong><br />
                  3472 Research Pkwy Ste 104 Pmb 623<br />
                  Colorado Springs, CO 80920
                </div>
                <div>
                  <strong className="text-foreground">Email:</strong><br />
                  president@adgl-enterprises.com
                </div>
                <div>
                  <strong className="text-foreground">Founded:</strong><br />
                  Colorado Springs, Colorado
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ADGL can be pronounced "add-jill" and represents our commitment to 
            helping you achieve <em>A Damn Good Life</em> through innovative technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;