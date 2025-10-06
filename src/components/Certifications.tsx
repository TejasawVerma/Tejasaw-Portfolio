import { Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: 'Artificial Intelligence Foundations: Machine Learning',
    description:
      'Supervised/unsupervised learning algorithms, model evaluation metrics, training/testing ML models, and ML project lifecycle',
  },
  {
    title: 'Machine Learning Foundations: Linear Algebra',
    description:
      'Vector/matrix operations, linear transformations, eigenvalues and eigenvectors for dimensionality reduction',
  },
  {
    title: 'Machine Learning Foundations: Calculus',
    description:
      'Derivatives for backpropagation, gradient descent optimization, and calculus applications in neural networks',
  },
  {
    title: 'Machine Learning Foundations: Probability',
    description:
      'Probability distributions for statistical modeling, Bayesian inference, and probabilistic machine learning',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="gradient-card p-6 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{cert.description}</p>

                    <Button
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
