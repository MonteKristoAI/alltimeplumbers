"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { submitBooking } from "@/app/actions/booking";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// Maps the service slug from /services/[slug] to the corresponding
// BookingFlow Select option(s). Emergency has no service type
// counterpart, so we pre-fill urgency instead.
const SERVICE_PRESETS: Record<string, { serviceType?: string; urgency?: string }> = {
  "drain-cleaning": { serviceType: "drain" },
  "water-heater": { serviceType: "water-heater" },
  "leak-repair": { serviceType: "leak" },
  "repipe": { serviceType: "repipe" },
  "emergency": { urgency: "emergency" },
};

const bookingSchema = z.object({
  serviceType: z.string().min(1, { message: "Please select a service" }),
  urgency: z.string().min(1, { message: "Please select urgency" }),
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Valid phone required" }),
  address: z.string().min(5, { message: "Address is required" }),
  details: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.serviceType === "other" && (!data.details || data.details.trim() === "")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please provide details about your issue",
      path: ["details"],
    });
  }
});

function BookingFlowInner() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service");
  const preset = serviceSlug ? SERVICE_PRESETS[serviceSlug] : undefined;

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: preset?.serviceType ?? "",
      urgency: preset?.urgency ?? "",
      name: "",
      phone: "",
      address: "",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    setIsSubmitting(true);
    try {
      const res = await submitBooking(values);
      if (res.success) {
        setStep(3); // Success step
      } else {
        toast.error("Failed to submit booking");
      }
    } catch (e) {
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  const nextStep = async () => {
    const fields = step === 1 ? ["serviceType", "urgency"] as const : ["name", "phone", "address"] as const;
    const isValid = await form.trigger(fields);
    if (isValid) setStep(step + 1);
  };

  const selectedServiceType = form.watch("serviceType");

  return (
    <div className="w-full max-w-xl mx-auto bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 text-left relative z-40 mt-12 mb-12">
      <div className="mb-8 flex justify-between items-center relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 -z-10 rounded-full"></div>
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-navy -z-10 transition-all duration-700 ease-out rounded-full`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
        
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-500 ${step >= 1 ? 'border-navy bg-navy text-white drop-shadow-[0_0_10px_rgba(27,46,85,0.5)]' : 'border-white/20 bg-black/20 text-white/50'}`}>1</div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-500 ${step >= 2 ? 'border-navy bg-navy text-white drop-shadow-[0_0_10px_rgba(27,46,85,0.5)]' : 'border-white/20 bg-black/20 text-white/50'}`}>2</div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-500 ${step >= 3 ? 'border-navy bg-navy text-white drop-shadow-[0_0_10px_rgba(27,46,85,0.5)]' : 'border-white/20 bg-black/20 text-white/50'}`}>3</div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-display font-bold text-2xl text-white">What do you need help with?</h3>
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-semibold text-base">Service Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white data-[placeholder]:text-white/40 hover:bg-white/10 transition-colors focus:ring-navy-mute">
                             <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-navy-ink/95 border-white/20 text-white backdrop-blur-xl">
                          <SelectItem value="drain">Drain Cleaning</SelectItem>
                          <SelectItem value="water-heater">Water Heater</SelectItem>
                          <SelectItem value="leak">Leak Repair</SelectItem>
                          <SelectItem value="repipe">Repipe</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-semibold text-base">Urgency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white data-[placeholder]:text-white/40 hover:bg-white/10 transition-colors focus:ring-navy-mute">
                            <SelectValue placeholder="How urgent is this?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-navy-ink/95 border-white/20 text-white backdrop-blur-xl">
                          <SelectItem value="emergency">Emergency (Need someone now)</SelectItem>
                          <SelectItem value="today">Today / Tomorrow</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button type="button" onClick={nextStep} className="w-full bg-navy hover:bg-navy-mute text-white font-bold cursor-pointer transition-all shadow-[0_0_15px_rgba(27,46,85,0.3)] hover:shadow-[0_0_25px_rgba(27,46,85,0.5)] border border-navy-mute/50">
                  Next Step
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="font-display font-bold text-2xl text-white">Your Details</h3>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-navy-mute cursor-text hover:bg-white/10 transition-colors" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(760) 555-0123" {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-navy-mute cursor-text hover:bg-white/10 transition-colors" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Service Address (San Diego Area)</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, San Diego, CA" {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-navy-mute cursor-text hover:bg-white/10 transition-colors" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Additional Details {selectedServiceType === "other" ? <span className="text-red-400">*</span> : "(Optional)"}</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any specific instructions or description of the issue..." {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-navy-mute cursor-text hover:bg-white/10 transition-colors resize-none" rows={3} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white cursor-pointer">
                    Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="w-2/3 bg-navy hover:bg-navy-mute text-white font-bold cursor-pointer transition-all shadow-[0_0_15px_rgba(27,46,85,0.3)] hover:shadow-[0_0_25px_rgba(27,46,85,0.5)] border border-navy-mute/50">
                    {isSubmitting ? "Submitting..." : "Submit Booking"}
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="font-display font-bold text-3xl text-white">Booking Received!</h3>
                <p className="text-white/80 text-lg">
                  Thank you, {form.getValues("name")}. We have received your request and will contact you shortly at {form.getValues("phone")} to confirm your appointment.
                </p>
                <div className="pt-6">
                  <Button type="button" onClick={() => window.location.href = '/'} variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white cursor-pointer">
                    Return Home
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
}

export function BookingFlow() {
  return (
    <Suspense fallback={null}>
      <BookingFlowInner />
    </Suspense>
  );
}
