import { FileText, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Research and development work in AI and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Project */}
            <Card className="md:col-span-2 gradient-card p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up">
              <div className="flex items-start gap-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        AI & Neural Networks Research in Medical Diagnostics
                      </h3>
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                    <p className="text-primary font-semibold">University of Ottawa, <span className="text-black">Under the guidance of Dr. Channarong Intahchamphoo</span>
                    </p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    Conducted comprehensive literature review on AI neural networks in medical diagnostics 
                    and treatment planning. The research focuses on advanced data preprocessing techniques, 
                    feature engineering methodologies, and deep learning approaches for dental healthcare applications. 
                    Special emphasis on evaluating ethical considerations including data privacy, algorithmic 
                    bias, and socioeconomic factors affecting model effectiveness in real-world medical settings.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">Medical AI</Badge>
                    <Badge variant="secondary">Data Preprocessing</Badge>
                    <Badge variant="secondary">Feature Engineering</Badge>
                    <Badge variant="secondary">Ethics in AI</Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                    onClick={() => window.open("https://uottawa-my.sharepoint.com/personal/tverm027_uottawa_ca/_layouts/15/guestaccess.aspx?share=ERVoW-BVPSVPlaMhac4sLukBQN8NHrMOX3er3bA2pvZ6MQ&e=TMsjBr", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Research
                  </Button>
                </div>
              </div>
            </Card>

            {/* Placeholder for Additional Projects */}
            <Card className="gradient-card p-8 border-border/50 shadow-lg border-dashed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-center space-y-4 opacity-50">
                <div className="h-16 w-16 rounded-lg bg-muted mx-auto flex items-center justify-center">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-muted-foreground">Project Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  More projects will be added here
                </p>
              </div>
            </Card>

            <Card className="gradient-card p-8 border-border/50 shadow-lg border-dashed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-4 opacity-50">
                <div className="h-16 w-16 rounded-lg bg-muted mx-auto flex items-center justify-center">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-muted-foreground">Project Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  More projects will be added here
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
