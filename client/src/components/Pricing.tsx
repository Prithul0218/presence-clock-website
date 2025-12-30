import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-50 pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 p-8 md:p-16 text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 border border-primary/30">
                Early Bird Pricing - Lifetime Local Dashboard Access
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Reserve Your Device</h2>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-6xl font-bold">$49.99</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-slate-400 line-through">$79.99</span>
                  <span className="text-sm text-green-400 font-medium">40% OFF</span>
                </div>
              </div>

              <p className="text-slate-300 mb-12 max-w-lg mx-auto">
                Secure your spot in the first batch. Limited to first 500 units.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12 text-left">
                {[
                  "Pre-assembled Presence Clock",
                  "WiFi setup guide",
                  "Lifetime local dashboard access",
                  "30-day cloud dashboard access",
                  "Lifetime firmware updates",
                  "Access to community Discord"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                <Link href="/pre-order">
                  <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-slate-900 hover:bg-slate-100 w-full md:w-auto shadow-xl shadow-white/10">
                    Pre-order Now - $5
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <p className="text-sm text-slate-500">
                  Limited to first 500 units
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Not ready to buy?</p>
            <Link href="/pre-order">
              <Button variant="link" className="text-primary text-lg">
                Join the Waitlist (Free)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
