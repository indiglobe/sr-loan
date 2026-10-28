import z from "zod";

export const read__AllActivitiesSchema = z
  .object({
    identifier: z
      .union([
        z.object({
          employeeId: z.string().optional(),
        }),
        z.object({
          loanId: z.string().optional(),
        }),
      ])
      .optional(),
  })
  .optional();
