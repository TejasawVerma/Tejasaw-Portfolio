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
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              As an AI Analyst at JSI Telecom, I am currently focused on enhancing LLM throughput and optimizing LLM inference in resource-constrained environments.
              My work involves developing Python benchmarking scripts and deploying secure LLM inference pipelines, working towards improved system efficiency and user support capabilities.
            </p>
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              Previously, I served as a Data Engineer at Indigenous Box Inc, where I automated data synchronization and built Azure Data Factory pipelines, boosting data availability for analytics, 
              and as a Machine Learning Engineer at Tomorrow Smile, researching and developing deep learning models for dental diagnostics. My academic background includes a Master's in Digital Transformation 
              from the University of Ottawa, where I specialized in Data Science and AI/Machine Learning.
            </p>
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              My technical expertise spans Machine Learning & Deep Learning (Scikit-learn, TensorFlow, PyTorch, Hugging Face Transformers), MLOps & Deployment (Azure ML Studio, Docker, Prometheus, Grafana), 
              Cloud & Data Engineering (Azure Databricks, Data Factory, Functions, Synapse Analytics), and Visualization (Power BI), with strong proficiency in Python and SQL.
            </p>
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              What sets me apart is my ability to translate complex data challenges into actionable insights, driving efficiency and innovation. I am passionate about leveraging my 
              skills to contribute to impactful projects and am eager to bring my expertise to a forward-thinking organization. Let's connect to explore how I can add value to your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Professional Summary */}
            <div className="space-y-6 animate-slide-up">
            </div>

            {/* Education */}
            {/* <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
