import z from "zod";

export const read__AllLoansDetailsSchema = z
  .object({
    identifier: z
      .object({
        loanTypeId: z.string().optional(),
      })
      .optional(),
  })
  .optional();
