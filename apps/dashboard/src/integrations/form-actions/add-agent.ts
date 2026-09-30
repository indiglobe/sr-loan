import { tryCatch } from "@repo/utils/try-catch";
import { createServerFn } from "@tanstack/react-start";
import { serverFn__createNewUser } from "../tanstack/server-funciton/user.sfn";
import z from "zod";
import { hashPassword, generateAgentId } from "@repo/utils/utility";

const createNewAgentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  emergencyPhoneNumber: z.string().nullable().optional(),
});

export const serverFn__createNewAgent = createServerFn()
  .validator(createNewAgentSchema)
  .handler(async ({ data }) => {
    const { email, name, phoneNumber, password, emergencyPhoneNumber } = data;

    const [passwordHashingError, hashedPassword] = await tryCatch(
      hashPassword(password),
    );

    if (passwordHashingError) {
      console.log("Hiii");
      return 
    }

    const [serverFnError, serverFnRes] = await tryCatch(
      serverFn__createNewUser({
        data: {
          dataToUpload: {
            email,
            name,
            password: hashedPassword,
            phoneNumber,
            emergencyPhoneNumber: emergencyPhoneNumber
              ? emergencyPhoneNumber
              : null,
            employeeId: generateAgentId(),
          },
        },
      }),
    );

    if (serverFnError) {
      console.log("Error in serverFnError in serverFn__createNewAgent");
      throw serverFnError;
    }

    return serverFnRes;
  });
