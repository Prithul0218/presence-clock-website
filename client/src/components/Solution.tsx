import { Radio, Activity, MousePointerClick } from "lucide-react";

export default function Solution() {
  const features = [
    {
      icon: <Radio className="w-8 h-8 text-primary" />,
      title: "Always Aware",
      description: "Radar sensor automatically detects when you're at your desk. No buttons. No apps. Just sit down and it starts tracking."
    },
    {
      icon: <Activity className="w-8 h-8 text-secondary" />,
      title: "See Your Progress",
      description: "A 300° LED ring fills with color as you work. Green → Yellow → Red. Visual feedback that respects your focus."
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-success" />,
      title: "Honest Breaks",
      description: "Tap the encoder to log breaks. No guessing. Your device knows: 5 hours work, 2 documented breaks. Show your clients."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Automatic detection. Beautiful feedback. Honest tracking.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
