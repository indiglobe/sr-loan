import z from "zod";

export const read__OneServiceDetailsSchema = z.object({
  identifier: z.object({
    serviceTypeId: z.string(),
  }),
});
