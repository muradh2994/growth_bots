import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Booking = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById("calendly-widget-script")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/mohamedmuradh07/30min",
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {},
          });
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/mohamedmuradh07/30min",
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {},
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />      
      <main className="flex-grow pt-20">
        {/* Watch Demo Section */}
        <section className="py-16 md:py-20 bg-secondary/10 text-center">
          <h2 className="text-4xl font-bold mb-8">Watch Demo</h2>
          <div className="flex justify-center">
            <iframe
              width="960"
              height="540"
              src="https://www.youtube.com/embed/cTcb7BGh_UQ?si=Wa1aX0g8Anqc5ZvP"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Book Appointment Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Consultation
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Schedule a personalized consultation with our AI experts.
            </p>
          </div>
        </section>

        <div className="min-h-screen p-8">
          <div ref={calendlyRef} style={{ minWidth: "320px", height: "700px" }}></div>
        </div>

        <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/80">
                Have questions about our consultation process? Find answers below.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What happens during the consultation?",
                  answer:
                    "During the 30-minute consultation, our AI experts will discuss your business challenges, explore potential solutions, and provide recommendations tailored to your specific needs.",
                },
                {
                  question: "Is there a cost for the initial consultation?",
                  answer:
                    "No, the initial consultation is completely free. It's an opportunity for us to understand your needs and for you to learn about our solutions without any obligation.",
                },
                {
                  question: "How should I prepare for the consultation?",
                  answer:
                    "Think about the specific challenges you're facing and what you'd like to achieve with AI solutions. Having clear goals will help us provide more targeted recommendations.",
                },
                {
                  question: "What happens after the consultation?",
                  answer:
                    "After the consultation, we'll send you a summary of our discussion and recommendations. If you're interested in proceeding, we'll provide a detailed proposal tailored to your needs.",
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-foreground/80">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;