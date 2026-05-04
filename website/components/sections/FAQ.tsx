import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section className="py-24 bg-cream-deep relative overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/section_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Got Questions?</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-ink">Frequently Asked Questions</h3>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm rounded-xl px-6 data-[state=open]:shadow-md data-[state=open]:bg-white transition-all duration-300">
              <AccordionTrigger className="text-left font-display font-bold text-lg text-ink hover:text-primary py-6 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-ink/70 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
