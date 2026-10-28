import z from "zod";

export const read__OneLoansTypeSchema = z.object({
  identifier: z.union([
    z.object({
      id: z.string(),
    }),
    z.object({
      loanTypeId: z.string(),
    }),
  ]),
});
