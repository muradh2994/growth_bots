
import { Link } from "react-router-dom";
import { Mic, MessageSquare, Workflow, ArrowRight, CheckCircle, Users, BarChart3, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Index = () => {
  const services = [
    {
      title: "AI Voice Agents",
      description: "Intelligent voice agents that handle customer calls with natural language processing and contextual understanding.",
      icon: <Mic className="h-6 w-6" />,
      features: [
        "Natural conversation flow",
        "Context retention & learning",
        "24/7 availability",
        "Multilingual support"
      ],
      href: "/services",
      delay: 0
    },
    {
      title: "AI Chatbots",
      description: "Customized chatbots for real estate, hotels, e-commerce and other industries to enhance customer engagement.",
      icon: <MessageSquare className="h-6 w-6" />,
      features: [
        "Industry-specific solutions",
        "Seamless integration",
        "Conversational UI",
        "Continuous improvement"
      ],
      href: "/services",
      delay: 100
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes and eliminate repetitive tasks with intelligent automation solutions.",
      icon: <Workflow className="h-6 w-6" />,
      features: [
        "Process optimization",
        "Error reduction",
        "Cost savings",
        "Scalable solutions"
      ],
      href: "/services",
      delay: 200
    }
  ];

  const testimonials = [
    {
      quote: "The AI Voice Agents transformed our customer service department. We've reduced wait times by 70% while maintaining exceptional quality in customer interactions.",
      author: "Sarah Johnson",
      role: "Customer Service Director",
      company: "Tech Solutions Inc.",
      delay: 0
    },
    {
      quote: "Our hotel chatbot has increased our booking rate by 35%. Guests love the instant responses and personalized recommendations it provides.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Grand Luxury Hotels",
      delay: 100
    },
    {
      quote: "The workflow automation solution saved us countless hours on repetitive tasks. Our team can now focus on strategic initiatives that drive our business forward.",
      author: "Jessica Rodriguez",
      role: "Process Improvement Lead",
      company: "Global Enterprises",
      delay: 200
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-20 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced AI Solutions for Modern Business</h2>
              <p className="text-lg text-foreground/80 text-balance">
                Our cutting-edge AI technologies drive innovation and efficiency across your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link to="/services" className="btn-outline inline-flex items-center group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-fade-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Business Operations with AI</h2>
                <p className="text-lg text-foreground/80 mb-8 text-balance">
                  Our AI solutions provide unprecedented efficiency, customer satisfaction, and business insights. Experience the future of business operations today.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Enhanced Customer Experience</h3>
                      <p className="text-foreground/70 text-balance">Provide 24/7 support with AI agents that understand and respond naturally to customer needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Operational Efficiency</h3>
                      <p className="text-foreground/70 text-balance">Automate routine tasks and streamline workflows to reduce costs and improve productivity.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Data-Driven Insights</h3>
                      <p className="text-foreground/70 text-balance">Gain valuable business intelligence from AI-analyzed customer interactions and operational data.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-left">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl"></div>
                <div className="relative glass-card rounded-3xl p-8 overflow-hidden">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/70 dark:bg-white/10 rounded-xl p-5 flex flex-col items-center text-center animate-fade-up animate-delay-100">
                      <Users className="h-10 w-10 text-primary mb-3" />
                      <h3 className="text-xl font-medium mb-1">98%</h3>
                      <p className="text-sm text-foreground/70">Customer Satisfaction</p>
                    </div>
                    
                    <div className="bg-white/70 dark:bg-white/10 rounded-xl p-5 flex flex-col items-center text-center animate-fade-up animate-delay-200">
                      <Clock className="h-10 w-10 text-primary mb-3" />
                      <h3 className="text-xl font-medium mb-1">80%</h3>
                      <p className="text-sm text-foreground/70">Time Saved</p>
                    </div>
                    
                    <div className="bg-white/70 dark:bg-white/10 rounded-xl p-5 flex flex-col items-center text-center animate-fade-up animate-delay-300">
                      <BarChart3 className="h-10 w-10 text-primary mb-3" />
                      <h3 className="text-xl font-medium mb-1">45%</h3>
                      <p className="text-sm text-foreground/70">Increase in Conversions</p>
                    </div>
                    
                    <div className="bg-white/70 dark:bg-white/10 rounded-xl p-5 flex flex-col items-center text-center animate-fade-up animate-delay-400">
                      <Workflow className="h-10 w-10 text-primary mb-3" />
                      <h3 className="text-xl font-medium mb-1">60%</h3>
                      <p className="text-sm text-foreground/70">Operational Efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-lg text-foreground/80 text-balance">
                Discover how our AI solutions have transformed businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="container-custom">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass-card rounded-3xl p-8 md:p-12 animate-fade-up">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                  <p className="text-lg text-foreground/80 mb-8 text-balance">
                    Schedule a consultation with our AI experts to discover how our solutions can address your specific business challenges.
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

export default Index;
