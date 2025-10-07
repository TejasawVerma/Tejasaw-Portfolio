import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Dr. Kridsada TosakParalerd',
    role: 'Chief Executive Officer',
    company: 'Tomorrow Smile Digital Healthcare Ltd.',
    content:
      'Mr. Verma has shown exceptional skill and dedication during his tenure with us as an intern Machine Learning developer. During his internship, Mr. Verma exhibited a comprehensive understanding of software development principles and applying his knowledge in machine learning algorithms and data analysis to enhance our software solutions. His proficiency in python enabled him to deploy advanced machine learning models, significantly improving our orthodontic treatment planning software, reflecting both his technical proficiency and his commitment to advancing healthcare technologies. Beyond his technical skills, Mr. Verma has proven himself a reliable team member, often going beyond his assigned duties to assist colleagues and contribute to a positive working environment. His proactive approach and willingness to share knowledge have been invaluable to our team. Mr. Vermas blend of skills, experience, and dedication makes him an excellent candidate for any role in software engineering. I am confident that he will bring success and innovation to his future endeavors',
    rating: 5,
  },
  {
    name: 'Dr. Channarong Intahchamphoo',
    role: 'Professor of School of Engineering Design and Teaching Innovation',
    company: 'University of Ottawa',
    content:
      'Tejasaw combines strong technical skills, exceptional soft skills, and a passion for innovation. In my AI Ethics research course, he has conducted impactful research on AI in dentistry, focusing on patient privacy and trust, and applied his expertise during internship with Tomorrow Smile (AI-powered dentistry). Currently, Tejasaw is interning with Indigenous Box Inc. (an award-winning e-commerce platform creating social impact for Indigenous communities across Canada).\n\nTejasaw\'s mix of technical expertise, ethical insight, and social awareness makes him an incredible asset. Connect with him or reach out to me for more details!',
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
              <span className="text-gradient">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="gradient-card p-6 md:p-8 border-border shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up flex flex-col justify-between h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content area */}
                <div className="flex-1 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author - move outside flex-1 so it stays at the bottom */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
