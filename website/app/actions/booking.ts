"use server";

import { z } from "zod";

const bookingSchema = z.object({
  serviceType: z.string().min(1),
  urgency: z.string().min(1),
  name: z.string().min(2),
  phone: z.string().min(10),
  address: z.string().min(5),
  details: z.string().optional(),
});

export async function submitBooking(data: z.infer<typeof bookingSchema>) {
  const result = bookingSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In Phase 2 this routes to n8n webhook
  console.log("Booking submission received:", result.data);

  return { success: true };
}
