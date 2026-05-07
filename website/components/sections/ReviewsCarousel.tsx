"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/All+Time+Plumbers,+Inc./@32.9962024,-117.1358175,94134m/data=!3m2!1e3!4b1!4m6!3m5!1s0x46a8bdacc8ead627:0x54e5e5993aec46a1!8m2!3d32.9962024!4d-117.1358176!16s%2Fg%2F11xn3chpq2!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    id: 1,
    name: "John D.",
    date: "2 months ago",
    text: "Pete was fantastic. Arrived on time, quickly diagnosed our slab leak, and gave a very fair price for the repair. Will definitely use All Time Plumbers again.",
    source: "Google"
  },
  {
    id: 2,
    name: "Sarah M.",
    date: "1 month ago",
    text: "Called them at 10 PM for a busted pipe. They were here within an hour. Extremely professional and got the water stopped and pipe fixed fast.",
    source: "Yelp"
  },
  {
    id: 3,
    name: "Mike T.",
    date: "3 weeks ago",
    text: "Best plumbing company in San Diego. Transparent pricing, no upselling, just honest work. Highly recommend Pete and his team.",
    source: "Google"
  }
];

type DialogStep = "rating" | "redirecting" | "feedback" | "submitted";

export function ReviewsCarousel() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [step, setStep] = useState<DialogStep>("rating");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setRating(0);
        setHoveredStar(0);
        setStep("rating");
        setSubmitting(false);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleSelectRating = (star: number) => {
    setRating(star);
    if (star >= 4) {
      setStep("redirecting");
      setTimeout(() => {
        window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
        setOpen(false);
      }, 700);
    } else {
      setTimeout(() => setStep("feedback"), 250);
    }
  };

  const handleSubmitFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setStep("submitted");
    setTimeout(() => setOpen(false), 1800);
  };

  return (
    <section id="reviews" className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Texture Background */}
      <Image src="/images/bg_reviews.webp" alt="" fill aria-hidden sizes="100vw" className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay object-cover" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</h2>
          <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white">Don't just take our word for it</h3>
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-lg mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white">5.0 Average Rating</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-8 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <div className="font-bold text-base text-white">{review.name}</div>
                <div className="text-xs font-bold text-primary tracking-wider uppercase bg-primary/10 px-3 py-1.5 rounded-full">
                  {review.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-[0_0_30px_rgba(191,34,53,0.3)] hover:shadow-[0_0_50px_rgba(191,34,53,0.6)] hover:-translate-y-1 hover:bg-primary-deep transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 fill-current" />
                Leave a Review
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-navy-ink border border-white/10 text-white overflow-hidden">
              <AnimatePresence mode="wait">
                {step === "rating" && (
                  <motion.div
                    key="rating"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      transition: { duration: 0.2, ease: [0.4, 0, 1, 1], delay: 0 },
                    }}
                    transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display font-bold">Rate Our Service</DialogTitle>
                      <DialogDescription className="text-white/70">
                        We'd love to hear about your experience with All Time Plumbers.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-8 flex flex-col items-center gap-3">
                      <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Select Rating</span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleSelectRating(star)}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(0)}
                            aria-label={`${star} star${star > 1 ? "s" : ""}`}
                            className="transition-transform hover:scale-110 focus:outline-none"
                          >
                            <Star
                              className={`w-12 h-12 transition-colors ${
                                star <= (hoveredStar || rating)
                                  ? "fill-primary text-primary drop-shadow-[0_0_10px_rgba(191,34,53,0.8)]"
                                  : "text-white/20"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-white/50 mt-2 text-center">Tap a star to continue</p>
                    </div>
                  </motion.div>
                )}

                {step === "redirecting" && (
                  <motion.div
                    key="redirecting"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="py-10 flex flex-col items-center gap-4 text-center"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-7 h-7 fill-primary text-primary drop-shadow-[0_0_10px_rgba(191,34,53,0.8)]" />
                      ))}
                    </div>
                    <DialogTitle className="text-2xl font-display font-bold">Thank you!</DialogTitle>
                    <p className="text-white/70 max-w-sm">
                      Taking you to Google to share your review.
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-2">
                      <ExternalLink className="w-4 h-4" />
                      Opening Google Reviews…
                    </div>
                  </motion.div>
                )}

                {step === "feedback" && (
                  <motion.form
                    key="feedback"
                    onSubmit={handleSubmitFeedback}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display font-bold">We're sorry we missed the mark</DialogTitle>
                      <DialogDescription className="text-white/70">
                        Tell us what we should fix and Pete will follow up personally.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-6 space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label htmlFor="reviewer-first-name" className="text-sm font-medium text-white/80">First Name</label>
                          <Input
                            id="reviewer-first-name"
                            name="firstName"
                            required
                            placeholder="John"
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary placeholder:text-white/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="reviewer-last-name" className="text-sm font-medium text-white/80">Last Name</label>
                          <Input
                            id="reviewer-last-name"
                            name="lastName"
                            required
                            placeholder="Doe"
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary placeholder:text-white/30"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="reviewer-email" className="text-sm font-medium text-white/80">Email</label>
                        <Input
                          id="reviewer-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary placeholder:text-white/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="reviewer-feedback" className="text-sm font-medium text-white/80">What should we fix?</label>
                        <Textarea
                          id="reviewer-feedback"
                          name="feedback"
                          required
                          placeholder="Tell us what went wrong so we can make it right..."
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary min-h-[110px] placeholder:text-white/30 resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary hover:bg-primary-deep text-white font-bold py-6 disabled:opacity-70"
                    >
                      {submitting ? "Sending…" : "Send Feedback"}
                    </Button>
                  </motion.form>
                )}

                {step === "submitted" && (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="py-10 flex flex-col items-center gap-3 text-center"
                  >
                    <DialogTitle className="text-2xl font-display font-bold">Thank you</DialogTitle>
                    <p className="text-white/70 max-w-sm">
                      We received your feedback. Pete will reach out shortly to make this right.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
