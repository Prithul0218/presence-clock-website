import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  isVideo?: boolean;
  benefits?: string[];
  reversed?: boolean;
  quote?: string;
}

function FeatureBlock({ title, description, image, imageAlt, benefits, reversed, quote }: FeatureProps) {
  return (
    <div className={cn("py-16 md:py-24", reversed ? "bg-white" : "bg-accent/20")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", reversed && "lg:grid-flow-dense")}>
          
          {/* Text Content */}
          <div className={cn("space-y-6", reversed && "lg:col-start-2")}>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h3>
            
            {quote ? (
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                "{quote}"
              </blockquote>
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}

            {benefits && (
              <ul className="space-y-3 pt-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</div>
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image Content */}
          <div className={cn("relative", reversed && "lg:col-start-1")}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-white">
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative blob */}
            <div className={cn(
              "absolute -z-10 w-full h-full rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              reversed ? "bg-secondary/20" : "bg-primary/20"
            )} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features">
      <FeatureBlock 
        title="A Visual Reminder You Can't Ignore"
        description="The LED ring doesn't ring. It doesn't send notifications. It just quietly fills with color. Green when you're fresh. Yellow as you warm up. Orange as fatigue sets in. Red when it's time to stand. Your peripheral vision catches it—no headphones can drown it out."
        image="/images/led-ring-closeup.png"
        imageAlt="LED Ring Detail"
        benefits={[
          "Visible through headphones",
          "Subconscious feedback (works even during deep focus)",
          "Customizable threshold (60/90/120 minutes)"
        ]}
      />

      <FeatureBlock 
        title="Your Phone Stays in Your Pocket"
        quote="Phone timers have a fatal flaw: you have to pick up your phone. And once you do, Slack messages, Instagram, email—they're all waiting. Our device eliminates that choice. No notifications. No temptation. Just a beautiful desk companion that does one thing perfectly."
        image="/images/product-desk-context.png"
        imageAlt="Phone vs Presence Clock"
        reversed={true}
        benefits={[
          "Users report 23% better focus when using a physical timer vs. phone timers"
        ]}
      />

      <FeatureBlock 
        title="Understand Your Work Patterns"
        quote="30 days of sitting and break data. See your weekly totals, best working days, and focus patterns. Perfect for freelancers billing clients. Perfect for anyone curious about their habits. Perfect for proving you actually took breaks."
        image="/images/dashboard-preview.png"
        imageAlt="Web Dashboard"
        benefits={[
          "Access from any device on your WiFi network",
          "No cloud. No subscriptions.",
          "Privacy-first: A truly privacy focused device"
        ]}
      />

      <FeatureBlock 
        title="Tap to Confirm Your Break, Or Simply Walk Away..."
        quote="Most timers just beep. You can ignore them. Ours requires a physical interaction. Walk away to do some stretches, or tap the knob to say 'I'm taking a break.' Come back or tap again when you're ready to lock in. This simple act creates accountability and gives you honest break logs."
        image="/images/encoder-closeup.png"
        imageAlt="Encoder Detail"
        reversed={true}
        benefits={[
          "Real break tracking that you can't fake"
        ]}
      />
    </section>
  );
}
