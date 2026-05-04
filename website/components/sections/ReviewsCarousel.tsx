"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
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

export function ReviewsCarousel() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <section id="reviews" className="py-24 bg-navy-ink relative overflow-hidden">
      {/* Texture Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/section_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
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
        </div>

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
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(191,34,53,0.3)] hover:shadow-[0_0_50px_rgba(191,34,53,0.6)] hover:-translate-y-1 hover:bg-primary-deep transition-all duration-300">
                <Star className="w-5 h-5 fill-current" />
                Leave a Review
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-navy-ink border border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display font-bold">Rate Our Service</DialogTitle>
                <DialogDescription className="text-white/70">
                  We'd love to hear about your experience with All Time Plumbers.
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-6 space-y-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">Select Rating</span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star 
                          className={`w-10 h-10 transition-colors ${
                            star <= (hoveredStar || rating) 
                              ? "fill-primary text-primary drop-shadow-[0_0_10px_rgba(191,34,53,0.8)]" 
                              : "text-white/20"
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="reviewer-name" className="text-sm font-medium text-white/80">Full Name</label>
                    <Input id="reviewer-name" placeholder="John Doe" className="bg-white/5 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary placeholder:text-white/30" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="review-text" className="text-sm font-medium text-white/80">Your Review</label>
                    <Textarea 
                      id="review-text" 
                      placeholder="Tell us what you liked about our service..." 
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-primary focus-visible:border-primary min-h-[100px] placeholder:text-white/30 resize-none" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button type="submit" className="w-full bg-primary hover:bg-primary-deep text-white font-bold py-6">
                  Submit Review
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
