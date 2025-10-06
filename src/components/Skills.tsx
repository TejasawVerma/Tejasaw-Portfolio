import { Code, Brain, Cloud, Database, Wrench, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Programming & Libraries',
    icon: Code,
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'VTK', 'SQL'],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'PyTorch',
      'Hugging Face',
      'LLM Optimization',
    ],
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    skills: ['Azure ML', 'Azure Databricks', 'Docker', 'Prometheus', 'Grafana', 'Azure Functions'],
  },
  {
    title: 'Data Processing',
    icon: Database,
    skills: ['Data Preprocessing', 'Data Cleaning', 'Feature Engineering', 'ETL Pipelines'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['VS Code', 'Git', 'Jupyter Notebooks', 'Power BI', 'Azure Data Factory'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Problem-Solving', 'Cross-functional Collaboration', 'Agile/Scrum', 'Technical Communication'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="gradient-card p-6 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
