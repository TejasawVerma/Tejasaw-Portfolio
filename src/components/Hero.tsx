import { Mail, Phone, Linkedin, FileDown, ArrowDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Professional Headshot Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg border-4 border-background">
                <User className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Tejasaw <span className="text-gradient">Verma</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Machine Learning Engineer | AI Analyst | Data Scientist
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <a
              href="mailto:tejasaw.verma@outlook.com"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              tejasaw.verma@outlook.com
            </a>
            <a
              href="tel:+16132626785"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              +1-613-262-6785
            </a>
            <a
              href="https://linkedin.com/in/tejasawverma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                // In a real app, this would download the actual resume file
                alert('Resume download functionality would be implemented here');
              }}
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
