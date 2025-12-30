export default function FounderStory() {
  return (
    <section id="founder-story" className="py-24 bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-secondary hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">The Origin</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why I Built This</h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              "I'm Prithul, a university student and part-time freelancer. I can lock into deep work and lose 4-5 hours without realizing it.
            </p>
            
            <p className="text-xl leading-relaxed text-foreground font-medium mb-8">
              My lower back paid the price. Sharp pain that made me realize something had to change.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I tried everything. Phone timers got buried in Slack notifications. Alarm clocks? I'd forget to start them, and if the timer did go off, I couldn't hear it through my headphones—no visual indicator.
            </p>

            <p className="text-2xl font-bold text-foreground my-10 pl-6 border-l-4 border-secondary">
              Then I realized: the solution didn't exist. So I built it.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I started with an Arduino on a breadboard. Added an LCD. Added radar detection. Then came the LED ring—and everything clicked. After a few weeks of using my own device, my back pain improved. My focus got sharper. I actually trusted my work hour logs.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              That's when I knew: this wasn't just for me. This was for every student, freelancer, developer, and knowledge worker who gets locked into deep work but needs to respect their body.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-medium">
              The Presence Clock isn't perfect. But it's <em>real</em>—built by someone who lived the problem."
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
              {/* Placeholder for founder image */}
              <img src="https://github.com/shadcn.png" alt="Prithul" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-foreground">Prithul</div>
              <div className="text-sm text-muted-foreground">Founder & Maker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
