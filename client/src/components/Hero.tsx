import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Presence</span> Clock
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                See your sitting before your back does.
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A physical device designed for people who lock into deep work. Automatic presence tracking, beautiful LED feedback, and honest work hour logging. No distractions. No subscriptions. Just focus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Reserve Now - $5
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-accent/50">
                Learn the story
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="ml-2">Join 500+ early supporters</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-white/50 backdrop-blur-sm">
              <img 
                src="/images/hero-product.png" 
                alt="Presence Clock Device" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-border/50 flex items-center gap-2 animate-bounce-slow">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Session Active: 03:45</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-primary/20 rounded-[2.5rem] translate-x-4 translate-y-4" />
          </div>

        </div>
      </div>
    </section>
  );
}
