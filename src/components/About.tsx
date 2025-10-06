import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate Machine Learning Engineer with 4+ years of experience transforming complex data into intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Professional Summary */}
            <div className="space-y-6 animate-slide-up">
              <Card className="gradient-card p-8 border-border/50 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Professional Journey</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    With over 4 years of comprehensive experience spanning AI/ML development, data engineering, 
                    and software development, I specialize in building intelligent systems that drive real business impact.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    My expertise lies in LLM inference optimization, deep learning with PyTorch, cloud ML deployment 
                    on Azure, and building robust data pipelines that enable data-driven decision making.
                  </p>
                </div>
              </Card>

              <Card className="gradient-card p-8 border-border/50 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Key Strengths</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">LLM inference optimization & performance monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">Deep learning with PyTorch & Hugging Face</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">Cloud ML deployment & MLOps on Azure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">Data pipeline development & automation</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Education */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="gradient-card p-8 border-border/50 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2 pb-6 border-b border-border/50">
                      <h4 className="text-xl font-semibold text-primary">
                        Master of Digital Transformation & Innovation
                      </h4>
                      <p className="text-foreground/80 font-medium">University of Ottawa</p>
                      <p className="text-sm text-muted-foreground">
                        Concentration: Data Science, Machine Learning, Data Analytics, Advanced Data Management
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-primary">
                        Bachelor of Engineering, Computer Science
                      </h4>
                      <p className="text-foreground/80 font-medium">University of Jammu</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Profile Image Placeholder */}
              <Card className="gradient-card p-8 border-border/50 shadow-lg">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="h-24 w-24 rounded-full bg-primary/30 mx-auto flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">TV</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
