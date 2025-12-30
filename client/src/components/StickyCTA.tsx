import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 800px)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-between gap-4">
          <div className="hidden sm:block font-medium">
            Join 500+ early supporters
          </div>
          
          <div className="flex items-center gap-4 flex-1 sm:flex-none justify-center">
            <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6">
              Reserve Now - $5
            </Button>
            <button 
              onClick={() => setIsDismissed(true)}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
