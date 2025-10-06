import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Tejasaw Verma</h3>
              <p className="text-sm text-muted-foreground">
                Machine Learning Engineer building intelligent solutions for tomorrow's challenges
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
                <a href="#experience" className="text-foreground/70 hover:text-primary transition-colors">
                  Experience
                </a>
                <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/tejasawverma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:tejasaw.verma@outlook.com"
                  className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+16132626785"
                  className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tejasaw Verma. All rights reserved.
            </p>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
