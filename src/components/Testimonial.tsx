
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay: number;
}

const Testimonial = ({ quote, author, role, company, delay }: TestimonialProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-fade-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="text-foreground/80 mb-6 text-balance">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{author}</p>
          <p className="text-xs text-foreground/60">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
