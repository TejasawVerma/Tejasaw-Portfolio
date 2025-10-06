import { Mail, Phone, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';

const Contact = () => {
  // Load Calendly script once when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can work together
            </p>
          </div>

          {/* Grid: Contact Info + Calendly */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Contact Information */}
            <div className="space-y-6 animate-slide-up">
              <Card className="gradient-card p-8 border-border/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:tejasaw.verma@outlook.com"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">tejasaw.verma@outlook.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+16132626785"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+1-613-262-6785</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/tejasawverma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">linkedin.com/in/tejasawverma</p>
                    </div>
                  </a>
                </div>
              </Card>
            </div>

            {/* Right Column: Calendly Widget */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="gradient-card p-0 border-border/50 shadow-lg">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/tejasawverma-v/30min?primary_color=25c3c3"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
