import { Briefcase, Database, Brain, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'JSI Telecom',
    role: 'AI Analyst',
    period: 'Jul 2025 - Present',
    icon: Brain,
    achievements: [
      'Developed benchmarking script using python and OpenAI API to test vLLM inference performance under GPU constraints, identifying Large Language Models prefill vs decode bottlenecks that directly informed resource allocation decisions for production deployment.',
      'Implemented inference performance monitoring using Prometheus and Grafana dashboards, enabling accurate trade-off analysis of latency, throughput, and GPU utilization under varied user loads.',
      'Implemented end-to-end LLM inference performance monitoring using Prometheus and Grafana dashboards',
      'Optimized inference efficiency through quantization and tuning vLLM parameters, gaining a 30% increase in throughput and lowering latency below 30 seconds.',
    ],
  },
  {
    company: 'Indigenous Box Inc',
    role: 'Data Engineer',
    period: 'Aug 2024 - Dec 2024',
    icon: Database,
    achievements: [
      'Implemented Azure Data Factory pipelines to integrate structured data (sales transactions) and unstructured data (supplier feeds, customer logs), enabling real-time analytics and improving data availability for reporting.',
      'Deployed Python scripts on Azure Functions to automate data synchronization between sales and inventory systems.',
      'Developed Power BI dashboards for Price Purchase Variance and Sales Order Root Cause Analysis, cutting stockouts by 18%.',
      'Collaborated with Operations and Finance teams to translate reporting needs into clear technical specifications, enabling faster decision-making through tailored data solutions.',
    ],
  },
  {
    company: 'TomorrowSmile',
    role: 'Machine Learning Developer',
    period: 'Jan 2024 - Aug 2024',
    icon: Brain,
    achievements: [
      'Developed a UNET-based deep learning model using PyTorch framework in Python for orthodontic landmark detection on dental scans, achieving 90% accuracy through multi-view rendering, Dice-CE loss functions.',
      'Implemented end-to-end preprocessing pipeline using VTK for image data normalization, surface scaling, and landmark transformation, reducing manual data preparation time by 75%.',
      'Developed visualization tool using VTK library to display predicted landmarks on dental scans and calculate arch length measurements for orthodontic treatment assessment.',
      'Collaborated with dental professionals to refine training data and establish acceptance criteria, improving model reliability and clinical relevance.',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Senior Software Engineer',
    period: 'Mar 2021 - Jan 2023',
    icon: Code2,
    achievements: [
      'Delivered 20+ SAP ABAP enhancements across the SDLC, improving system functionality for business users by analyzing requirements, developing, testing, and implementing solutions.',
      'Optimized SQL queries in SAP custom reports and smart forms by applying indexing, query refactoring, and join optimization, reducing query runtime by 40%.',
      'Debugged and resolved 200+ critical SAP module issues using ABAP runtime analysis, SQL trace, and SAP Solution Manager, achieving 90% SLA compliance and cutting ticket backlog by 50% within 3 months.',
      'Configured and implemented SAP bank setups using SFTP for seamless host-to-host bank integration, enabling bank statement data transfers for financial reporting.',
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
