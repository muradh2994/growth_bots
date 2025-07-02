
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Consultation Request Sent",
      description: "We'll be in touch shortly to confirm your appointment.",
    });
    
    setSubmitted(true);
  };

  const availableTimes = [
    { date: "Monday, July 15", times: ["10:00 AM", "1:00 PM", "3:30 PM"] },
    { date: "Tuesday, July 16", times: ["9:30 AM", "11:00 AM", "2:00 PM"] },
    { date: "Wednesday, July 17", times: ["10:00 AM", "12:30 PM", "4:00 PM"] },
    { date: "Thursday, July 18", times: ["9:00 AM", "11:30 AM", "2:30 PM"] },
    { date: "Friday, July 19", times: ["10:30 AM", "1:00 PM", "3:00 PM"] },
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
                  Schedule Now
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Consultation</h1>
              <p className="text-lg md:text-xl text-foreground/80 text-balance">
                Take the first step towards transforming your business with our AI solutions. Schedule a personalized consultation with our experts.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div className="animate-fade-right">
                <div className="glass-card rounded-3xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Consultation Request Submitted</h3>
                      <p className="text-foreground/80 mb-6">
                        Thank you for your interest! We've received your request and will contact you shortly to confirm your appointment.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="relative">
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="block w-full pl-10 rounded-md border-input py-2.5 px-3 bg-background shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="block w-full pl-10 rounded-md border-input py-2.5 px-3 bg-background shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="block w-full pl-10 rounded-md border-input py-2.5 px-3 bg-background shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="+1 (234) 567-8900"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Building className="h-5 w-5 text-foreground/40" />
                            </div>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="block w-full pl-10 rounded-md border-input py-2.5 px-3 bg-background shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="Company Inc."
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-input py-2.5 px-3 bg-background shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="AI Voice Agents">AI Voice Agents</option>
                            <option value="AI Chatbots">AI Chatbots</option>
                            <option value="Workflow Automation">Workflow Automation</option>
                            <option value="Multiple Services">Multiple Services</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Information</label>
                          <div className="relative">
                            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                              <MessageSquare className="h-5 w-5 text-foreground/40" />
                            </div>
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              className="block w-full pl-10 rounded-md border-input py-2.5 px-3 bg-background shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="Tell us about your business needs..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full btn-primary flex justify-center"
                      >
                        Request Consultation
                      </button>
                    </form>
                  )}
                </div>
              </div>
              
              {/* Calendar */}
              <div className="animate-fade-left">
                <div className="glass-card rounded-3xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Available Time Slots</h2>
                  <div className="mb-8">
                    <p className="text-foreground/80 mb-4">
                      Select a convenient time for your 30-minute consultation. Our experts will provide personalized insights for your business.
                    </p>
                    <div className="flex items-center text-primary mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">July 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {availableTimes.map((day, index) => (
                      <div key={index} className="border-b border-border/50 pb-4 last:border-0">
                        <h3 className="font-medium mb-3">{day.date}</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {day.times.map((time, idx) => (
                            <button
                              key={idx}
                              className="flex items-center justify-center px-3 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-sm font-medium transition-colors"
                            >
                              <Clock className="h-4 w-4 mr-1.5" />
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm text-foreground/70">
                      <span className="font-medium">Note:</span> This calendar shows sample availability. In a production environment, this would be integrated with Cal App or another scheduling tool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-foreground/80">
                Have questions about our consultation process? Find answers below.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6 animate-fade-up animate-delay-100">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">What happens during the consultation?</h3>
                <p className="text-foreground/80">
                  During the 30-minute consultation, our AI experts will discuss your business challenges, explore potential solutions, and provide recommendations tailored to your specific needs.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Is there a cost for the initial consultation?</h3>
                <p className="text-foreground/80">
                  No, the initial consultation is completely free. It's an opportunity for us to understand your needs and for you to learn about our solutions without any obligation.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">How should I prepare for the consultation?</h3>
                <p className="text-foreground/80">
                  Think about the specific challenges you're facing and what you'd like to achieve with AI solutions. Having clear goals will help us provide more targeted recommendations.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">What happens after the consultation?</h3>
                <p className="text-foreground/80">
                  After the consultation, we'll send you a summary of our discussion and recommendations. If you're interested in proceeding, we'll provide a detailed proposal tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
