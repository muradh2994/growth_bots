
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  href: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, features, href, delay }: ServiceCardProps) => {
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 animate-fade-up`} style={{ animationDelay: `${delay}ms` }}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <div className="text-xs text-foreground/60 uppercase tracking-wider font-medium">
            AI Solution
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/80 mb-6 text-balance">{description}</p>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-2 mt-1 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              </div>
              <p className="text-sm text-foreground/70">{feature}</p>
            </div>
          ))}
        </div>
        <Link
          to={href}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          Learn more
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
