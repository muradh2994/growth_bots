
import { Mic, MessageSquare, Workflow, Building, Hotel, ShoppingBag, ArrowRight, CheckCircle, MessageCircle, Instagram, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "voice-agents",
      title: "AI Voice Agents",
      description: "Our AI Voice Agents provide natural, human-like conversations over the phone, handling customer inquiries with remarkable accuracy and efficiency.",
      icon: <Mic className="h-8 w-8" />,
      benefits: [
        "Reduce call center costs by up to 40%",
        "Handle high call volumes without adding staff",
        "Consistent customer experience across all interactions",
        "Seamless escalation to human agents when needed",
        "Multilingual support for global operations"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "Book a Demo"
    },
    {
      id: "chatbots",
      title: "AI Chatbots",
      description: "Industry-specific AI Chatbots designed to enhance customer engagement, provide instant support, and drive conversions for your business.",
      icon: <MessageSquare className="h-8 w-8" />,
      benefits: [
        "24/7 customer support without human intervention",
        "Personalized responses based on user behavior",
        "Integration with your existing business systems",
        "Continuous learning and improvement over time",
        "Detailed analytics on customer interactions"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "Explore Chatbot Solutions"
    },
    {
      id: "social-bots",
      title: "WhatsApp and Instagram Bots",
      description: "Powerful bots for social platforms to help businesses automate marketing campaigns, support, lead generation, and appointment scheduling.",
      icon: <MessageCircle className="h-8 w-8" />,
      benefits: [
        "Engage customers on their preferred messaging platforms",
        "Automate bulk marketing campaigns with personalization",
        "Provide 24/7 customer support with quick response times",
        "Generate and qualify leads automatically",
        "Streamline appointment booking and reminders"
      ],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "Discover Social Bots"
    },
    {
      id: "workflow",
      title: "Workflow Automation",
      description: "Streamline your business operations with intelligent workflow automation that reduces manual tasks, minimizes errors, and increases productivity.",
      icon: <Workflow className="h-8 w-8" />,
      benefits: [
        "Automate repetitive and time-consuming tasks",
        "Reduce human error in critical processes",
        "Improve employee satisfaction and retention",
        "Scale operations without proportional cost increases",
        "Detailed process analytics and optimization"
      ],
      image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "Streamline Your Workflow"
    }
  ];

  const industrySpecific = [
    {
      title: "Real Estate",
      description: "AI solutions for property inquiries, scheduling viewings, and nurturing leads throughout the buying journey.",
      icon: <Building className="h-6 w-6" />,
      delay: 0
    },
    {
      title: "Hospitality",
      description: "Enhance guest experiences with AI hotel concierge, room service automation, and personalized recommendations.",
      icon: <Hotel className="h-6 w-6" />,
      delay: 100
    },
    {
      title: "E-commerce",
      description: "Boost sales with intelligent product recommendations, order tracking, and personalized shopping assistance.",
      icon: <ShoppingBag className="h-6 w-6" />,
      delay: 200
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-1/3 -right-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent AI Solutions for Modern Business</h1>
              <p className="text-lg md:text-xl text-foreground/80 text-balance">
                Discover our comprehensive range of AI services designed to transform your business operations and enhance customer experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        {mainServices.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-secondary/30' : ''} relative overflow-hidden`}>
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`animate-fade-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                    {service.icon}
                    <span className="ml-2 font-medium">{service.title}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-foreground/80 mb-8 text-balance">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <p className="text-foreground/70">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/booking" className="btn-primary inline-flex items-center group">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className={`relative animate-fade-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  <div className="relative glass-card rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover aspect-[4/3]" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Industry-Specific Solutions */}
        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Specific Solutions</h2>
              <p className="text-lg text-foreground/80 text-balance">
                Our AI technologies are tailored to address the unique challenges of different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industrySpecific.map((industry, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 animate-fade-up" 
                  style={{ animationDelay: `${industry.delay}ms` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mb-6 inline-block">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-foreground/80 mb-6 text-balance">{industry.description}</p>
                  <Link
                    to="/booking"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass-card rounded-3xl p-8 md:p-12 animate-fade-up">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                  <p className="text-lg text-foreground/80 mb-8 text-balance">
                    Schedule a consultation with our AI experts to discover the right solution for your business needs.
                  </p>
                  <Link to="/booking" className="btn-primary inline-flex items-center group">
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
