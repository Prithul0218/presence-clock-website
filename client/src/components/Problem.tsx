import { XCircle, AlertCircle, Clock } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-white border border-border/50">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/50">
                
                {/* Timer Visual */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full border-8 border-red-100 flex flex-col items-center justify-center bg-white shadow-sm">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Session</span>
                    <span className="text-4xl font-mono font-bold text-slate-700">04:12</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Overworked</span>
                  </div>
                  <p className="text-xl font-medium text-slate-600">"4 hours passed... back hurts..." Never again. Never again.</p>
                </div>

              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400/20 to-transparent" />
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
