import z from "zod";

export const read__OneLoansDetailsSchema = z.object({
  identifier: z.object({
    loanTypeId: z.string(),
  }),
});