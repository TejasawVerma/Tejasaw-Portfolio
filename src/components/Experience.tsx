import { Briefcase, Database, Brain, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'JSI Telecom',
    role: 'AI Analyst',
    period: 'Jul 2025 - Present',
    icon: Brain,
    achievements: [
      'Developed and deployed LLM inference benchmarking workflows using Python scripts, reducing manual testing time by 90%',
      'Evaluated LLM inference pipelines by testing under GPU and memory constraints for resource-constrained environments',
      'Implemented end-to-end LLM inference performance monitoring using Prometheus and Grafana dashboards',
      'Enhanced inference efficiency through quantization, achieving 30% throughput increase and sub-30s latency',
    ],
  },
  {
    company: 'Indigenous Box Inc',
    role: 'Data Engineer',
    period: 'Aug 2024 - Dec 2024',
    icon: Database,
    achievements: [
      'Implemented Azure Data Factory pipelines integrating sales, supplier, and customer datasets for real-time analytics',
      'Deployed Python scripts on Azure Functions to automate data synchronization, eliminating 40+ hours of manual work monthly',
      'Developed Power BI dashboards for Price Purchase Variance analysis, cutting stockouts by 18%',
      'Collaborated with Operations and Finance teams to translate reporting needs into technical specifications',
    ],
  },
  {
    company: 'TomorrowSmile',
    role: 'Machine Learning Developer',
    period: 'Jan 2024 - Aug 2024',
    icon: Brain,
    achievements: [
      'Developed UNET-based deep learning model using PyTorch for orthodontic landmark detection, achieving 90% accuracy',
      'Implemented end-to-end preprocessing pipeline using VTK and NumPy, reducing manual preparation time by 75%',
      'Developed visualization tool using VTK to display predicted landmarks and calculate arch length measurements',
      'Collaborated with dental professionals to refine training data and establish acceptance criteria',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Senior Software Engineer',
    period: 'Mar 2021 - Jan 2023',
    icon: Code2,
    achievements: [
      'Delivered 20+ SAP ABAP enhancements across the SDLC, improving system functionality for business users',
      'Optimized SQL queries in SAP custom reports by 40% through indexing and query refactoring',
      'Debugged and resolved 200+ critical SAP issues, achieving 90% SLA compliance',
      'Configured SAP bank setups using SFTP for seamless host-to-host integration',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building intelligent systems and data-driven solutions
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={exp.company}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <div className="h-4 w-4 rounded-full bg-primary shadow-glow"></div>
                    </div>

                    <div className={`md:grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:direction-rtl'}`}>
                      <div className={isEven ? 'md:text-left' : 'md:col-start-2'}>
                        <Card className="gradient-card p-6 md:p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                              <p className="text-primary font-semibold">{exp.company}</p>
                              <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                            </div>
                          </div>

                          <ul className="space-y-3 mt-6">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/80">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
