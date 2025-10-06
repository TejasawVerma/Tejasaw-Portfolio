import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CTO',
    company: 'Tech Solutions Inc',
    content:
      'Tejasaw demonstrated exceptional expertise in machine learning and delivered outstanding results on our LLM optimization project. His technical skills and problem-solving abilities are truly impressive.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Data Science Manager',
    company: 'Innovation Labs',
    content:
      'Working with Tejasaw was a pleasure. His deep understanding of PyTorch and ability to implement complex neural networks helped us achieve breakthrough results in our medical AI project.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Engineering Director',
    company: 'DataFlow Systems',
    content:
      'Tejasaw\'s expertise in data engineering and cloud deployment is outstanding. He built robust pipelines that transformed our data infrastructure and significantly improved our analytics capabilities.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What people say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="gradient-card p-6 md:p-8 border-border shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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

export default Testimonials;
