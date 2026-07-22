import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Enter a valid email"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  company: z.string().min(2, "Company name is required"),

  teamSize: z.string().min(1, "Please select a team size"),

  message: z
    .string()
    .min(10, "Message should be at least 10 characters"),
});

export type LeadFormData = z.infer<typeof leadSchema>;