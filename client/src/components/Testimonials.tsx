import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, a timer I can actually stick with. The LED ring is genius—I see it filling up and actually stand before it's too late.",
      author: "Sarah M.",
      role: "Software Developer",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      quote: "As a freelancer, I can now show clients exactly how many hours I worked and when I took breaks. No more guessing.",
      author: "James K.",
      role: "Freelance Designer",
      avatar: "https://i.pravatar.cc/100?img=3"
    },
    {
      quote: "My back pain decreased within the first week. The visual feedback works where willpower fails.",
      author: "Maya R.",
      role: "Student & Content Creator",
      avatar: "https://i.pravatar.cc/100?img=9"
    },
    {
      quote: "Open-source, local storage, no subscriptions. This is what I wanted all along.",
      author: "Alex T.",
      role: "Developer",
      avatar: "https://i.pravatar.cc/100?img=11"
    }
  ];

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Early Adopters</h2>
          <p className="text-muted-foreground text-lg">Join the community of focused professionals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 min-h-[80px] text-sm leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-sm text-foreground">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
