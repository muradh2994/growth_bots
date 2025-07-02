
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking = () => {

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
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-8 shadow-lg animate-fade-up">
                <h2 className="text-2xl font-bold mb-6 text-center">Schedule Your Consultation</h2>
                <p className="text-foreground/80 text-center mb-8">
                  Book a 30-minute consultation with our AI experts to discuss your business needs and explore tailored solutions.
                </p>
                
                {/* Calendly inline widget */}
                <div className="calendly-inline-widget" data-url="https://calendly.com/mohamedmuradh07/30min" style={{minWidth: '320px', height: '700px'}}></div>
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
