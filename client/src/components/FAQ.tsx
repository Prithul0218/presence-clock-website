import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What if I don't have WiFi?",
      answer: "The device works 100% standalone. WiFi is optional for the smart app pause feature and web dashboard. Without WiFi, the LCD display and LED ring still track everything perfectly."
    },
    {
      question: "Can I adjust the sitting threshold?",
      answer: "Yes. Use the rotary encoder to scroll through settings. Change the threshold from 60 to 120+ minutes. The settings are saved locally."
    },
    {
      question: "Is my data stored in the cloud?",
      answer: "No. All data stays on the device or your local network. There's no cloud, no servers, no tracking. Privacy guaranteed."
    },
    {
      question: "How long does the LED ring last?",
      answer: "The NeoPixel LEDs are rated for 50,000+ hours. The device should outlast your job."
    },
    {
      question: "Can I use this for multiple projects/clients?",
      answer: "The dashboard shows daily totals and weekly summaries. For project-specific tracking, the web dashboard provides hourly breakdowns you can screenshot or export."
    },
    {
      question: "What if I'm away from my desk but still in the radar range?",
      answer: "The LD2410 radar is specifically tuned to detect humans at a desk. It won't trigger for passing by. If you need to manually pause, use the encoder."
    },
    {
      question: "Will there be future versions?",
      answer: "Yes. We're planning features like cloud backup (optional), mobile app, and team dashboards. Early supporters will get lifetime updates."
    },
    {
      question: "Is the hardware open-source?",
      answer: "The firmware is open-source. Hardware schematics are available for enthusiasts who want to mod their device."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-accent/30 transition-colors">
              <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
