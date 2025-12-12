import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10).max(10),
});
