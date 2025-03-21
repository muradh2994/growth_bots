
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse-subtle animation-delay-300"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
                  Next-Gen AI Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="block">Transform Your Business with</span>
                <span className="text-primary"> Intelligent AI</span>
                <span> Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl text-balance">
                Elevate customer engagement and streamline operations with our cutting-edge AI Voice Agents, Chatbots, and Workflow Automation solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/services" className="btn-primary animate-fade-up animate-delay-100 flex items-center group">
                  Discover Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/booking" className="btn-outline animate-fade-up animate-delay-200">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-xl animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="glass-card relative rounded-3xl overflow-hidden animate-float shadow-lg">
                <div className="p-6 lg:p-8 bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-transparent">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="w-12 h-1.5 bg-primary rounded-full"></div>
                      <h3 className="text-2xl font-semibold">AI Assistant</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-medium">AI</div>
                        <div className="p-3 bg-secondary rounded-2xl rounded-tl-none">
                          <p className="text-sm">How can I help your business today?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 justify-end">
                        <div className="p-3 bg-primary/10 rounded-2xl rounded-tr-none">
                          <p className="text-sm">I need a solution for my customer support team.</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-xs font-medium text-white">You</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-medium">AI</div>
                        <div className="p-3 bg-secondary rounded-2xl rounded-tl-none">
                          <p className="text-sm">I recommend our AI Voice Agents - they can handle 80% of routine inquiries while maintaining a 98% satisfaction rate.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
