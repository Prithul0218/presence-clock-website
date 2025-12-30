import { XCircle } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-white">
              {/* Placeholder for video/animation - using a static representation for now */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4 font-bold text-primary/20">?</div>
                  <p className="text-xl font-medium text-muted-foreground">4 hours passed... back hurts...</p>
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative pattern */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pattern-dots opacity-20" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why This Exists</h2>
            </div>

            <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
              "I'm a university student and freelancer. I can lock into work mode and lose 4-5 hours without realizing it. My back paid the price."
            </blockquote>

            <div className="space-y-4">
              {[
                "Phone timers = get distracted by notifications",
                "Alarm clocks = can't hear through headphones, set manually",
                "Pomodoro apps = other apps break focus, forget to pause and start",
                "Willpower alone = often comes at the cost of health"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
