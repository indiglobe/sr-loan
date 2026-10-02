import { read__AllRecentWebinars, read__AllUpcomingWebinars } from "@repo/data/querries/webinars";
import { read__AllRecentWebinarsSchema, read__AllUpcomingWebinarsSchema } from "@repo/data/validators/webinar";
import { createServerFn } from "@tanstack/react-start";

export const serverFn__readAllRecentWebinars = createServerFn()
  .validator(read__AllRecentWebinarsSchema)
  .handler(async ({ data }) => {
    return await read__AllRecentWebinars(data);
  });

export const serverFn__readAllUpcomingWebinars = createServerFn()
  .validator(read__AllUpcomingWebinarsSchema)
  .handler(async ({ data }) => {
    return await read__AllUpcomingWebinars(data);
  });
