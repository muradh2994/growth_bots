
import { Users, Award, TrendingUp, Layers, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Alexandra Chen",
      role: "CEO & AI Strategist",
      bio: "With over 15 years in AI and machine learning, Alexandra leads our vision to make advanced AI accessible to businesses of all sizes.",
      initial: "A",
      delay: 0
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Marcus brings 12+ years of technical expertise in developing scalable AI solutions for enterprise clients across various industries.",
      initial: "M",
      delay: 100
    },
    {
      name: "Sophia Williams",
      role: "Head of AI Voice Technologies",
      bio: "Sophia specializes in natural language processing and voice recognition systems with a focus on creating human-like conversational experiences.",
      initial: "S",
      delay: 200
    },
    {
      name: "David Park",
      role: "Lead AI Solutions Architect",
      bio: "David excels at designing custom AI implementations that integrate seamlessly with existing business systems and processes.",
      initial: "D",
      delay: 300
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI, exploring new technologies and approaches to deliver exceptional results.",
      icon: <Layers className="h-8 w-8" />,
      delay: 0
    },
    {
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering solutions that drive real business outcomes.",
      icon: <TrendingUp className="h-8 w-8" />,
      delay: 100
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from development and testing to deployment and support.",
      icon: <Award className="h-8 w-8" />,
      delay: 200
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, treating their challenges as our own and developing solutions together as partners.",
      icon: <Users className="h-8 w-8" />,
      delay: 300
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
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pioneering AI Solutions for Business Growth</h1>
              <p className="text-lg md:text-xl text-foreground/80 text-balance">
                We're a team of AI experts passionate about helping businesses transform their operations and customer experiences through innovative technology.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-fade-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-foreground/80">
                  <p>
                    Founded in 2018, AI Agency began with a simple mission: to make advanced artificial intelligence accessible to businesses of all sizes. What started as a small team of AI enthusiasts has grown into a leading provider of innovative AI solutions across multiple industries.
                  </p>
                  <p>
                    We recognized early on that while large enterprises had the resources to implement sophisticated AI systems, small and medium-sized businesses were often left behind. Our goal was to bridge this gap by developing AI solutions that were powerful yet accessible.
                  </p>
                  <p>
                    Today, we're proud to serve clients worldwide, helping them leverage the power of AI to enhance customer experiences, streamline operations, and drive growth. Our commitment to innovation, excellence, and client success remains at the heart of everything we do.
                  </p>
                </div>
              </div>
              
              <div className="relative animate-fade-left">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <div className="relative glass-card rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our team collaborating" 
                    className="w-full h-auto object-cover aspect-[4/3]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-foreground/80 text-balance">
                These principles guide our work and define our approach to creating AI solutions that make a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 animate-fade-up" 
                  style={{ animationDelay: `${value.delay}ms` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mb-6 inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/80 text-balance">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-foreground/80 text-balance">
                Our diverse team of AI experts brings together decades of experience in machine learning, natural language processing, and business transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 text-center animate-fade-up" 
                  style={{ animationDelay: `${member.delay}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-4">
                    {member.initial}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary/80 text-sm mb-4">{member.role}</p>
                  <p className="text-foreground/80 text-sm text-balance">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-foreground/80 text-balance">
                Have questions about our services? We'd love to hear from you. Reach out through any of the channels below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6 text-center animate-fade-up">
                <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <a href="mailto:contact@aiagency.com" className="text-foreground/80 hover:text-primary transition-colors">
                  contact@aiagency.com
                </a>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center animate-fade-up animate-delay-100">
                <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <a href="tel:+1234567890" className="text-foreground/80 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="glass-card rounded-xl p-6 text-center animate-fade-up animate-delay-200">
                <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-foreground/80">
                  123 AI Avenue, Tech District<br />San Francisco, CA 94105
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12 animate-fade-up animate-delay-300">
              <Link to="/booking" className="btn-primary inline-flex items-center group">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
