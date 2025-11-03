import { Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    description:
      'Supervised and unsupervised learning, CNNs, RNNs, LSTMs, Generative AI, and OCI AI services.',
    link: 
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=68DC650EB51E08DE8D51BEFBCF0BCDDEE395B47AF4E9A9CDA2102C2CBB261EA2',  
  },
  {
    title: 'Microsoft Azure Data Fundamentals - DP900',
    description:
      'Relational/non-relational data concepts, Azure data services (SQL Database, Cosmos DB, Synapse Analytics)',
    link: 
      'https://learn.microsoft.com/en-us/users/tejasawverma-5400/credentials/5666c67d1eab67ef?ref=https%3A%2F%2Fwww.linkedin.com%2F',  
  },
  {
    title: 'Microsoft Azure Fundamentals - AZ900',
    description:
      'Azure core services (compute, networking, storage), pricing models, and cloud security/compliance fundamentals.',
    link: 
      'https://learn.microsoft.com/en-us/users/tejasawverma-4217/credentials/eaed4273b7f1acbf?ref=https%3A%2F%2Fwww.linkedin.com%2F',  
  },
  {
    title: 'Artificial Intelligence Foundations: Machine Learning',
    description:
      'Supervised/unsupervised learning algorithms, model evaluation metrics, training/testing ML models, and ML project lifecycle',
    link: 
      'https://www.linkedin.com/learning/certificates/7fcae711a9de7b8e399dd71738d6c4c7da721e2f5c6d02a20632ba5132041ff1',  
  },
  {
    title: 'Machine Learning Foundations: Linear Algebra',
    description:
      'Vector/matrix operations, linear transformations, eigenvalues and eigenvectors for dimensionality reduction',
    link: 
      'https://www.linkedin.com/learning/certificates/beb4e9594766c6b19a35bdf4aa82ebc3ed61e8c09065ee5d57a824f0ced6869f',
  },
  {
    title: 'Machine Learning Foundations: Calculus',
    description:
      'Derivatives for backpropagation, gradient descent optimization, and calculus applications in neural networks',
    link: 
      'https://www.linkedin.com/learning/certificates/936e2a06022629dcedcde975512c070a8c984369ad872392d0ace236b9caa7b8',  
  },
  {
    title: 'Machine Learning Foundations: Probability',
    description:
      'Probability distributions for statistical modeling, Bayesian inference, and probabilistic machine learning',
    link: 
      'https://www.linkedin.com/learning/certificates/3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n',
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
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <Button
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                    </a>
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
