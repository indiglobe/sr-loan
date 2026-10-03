import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { tryCatch } from "@repo/utils/try-catch";
import bcrypt from "bcryptjs";
import { serverFn__readOneUser } from "@/integrations/tanstack/server-functions/querry/user.sfn";
import { setUserDetailsCookie } from "@/integrations/auth/session.ts";
import { signJWT } from "@repo/utils/jwt";
import { ROLE } from "@repo/data/utils/enums";

export const loginSchema = z.object({
  role: z.enum(ROLE(), {
    message: "Please select a valid role",
  }),

  email: z.email("Enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const serverFn__login = createServerFn()
  .validator(loginSchema)
  .handler(async ({ data }) => {
    const { email, password, role } = data;

    const [serverFnError, user] = await tryCatch(
      serverFn__readOneUser({
        data: {
          identifier: {
            email,
          },
          intentionalFields: { password: true },
        },
      }),
    );

    if (serverFnError) {
      console.error("Error in serverFnError in serverFn__login:");

      return {
        status: "error" as const,
        message: "Something went wrong. Please try again.",
      };
    }

    // Don't reveal whether the email exists.
    if (!user) {
      return {
        status: "error" as const,
        message: "Invalid email or password.",
      };
    }

    // Verify the selected role against the user's actual role.
    if (user.role !== role) {
      return {
        status: "error" as const,
        message: "Invalid email or password.",
      };
    }

    // Compare plaintext password with the stored bcrypt hash.
    const [passwordComparisonError, passwordValid] = await tryCatch(
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      bcrypt.compare(password, user.password!),
    );

    if (passwordComparisonError) {
      console.error("Error comparing password:", passwordComparisonError);

      return {
        status: "error" as const,
        message: "Something went wrong. Please try again.",
      };
    }

    if (!passwordValid) {
      return {
        status: "error" as const,
        message: "Invalid email or password.",
      };
    }

    const { email: userEmail, name, role: userRole, id, employeeId } = user;

    const [jwtCreationError] = await tryCatch(
      signJWT({
        name,
        email: userEmail,
        role: userRole,
        userId: id,
        employeeId,
      }),
    );

    if (jwtCreationError) {
      console.log(`Error in jwtCreationError in serverFn__login`);
      throw jwtCreationError;
    }

    await setUserDetailsCookie({
      data: {
        email: userEmail,
        role: userRole,
        userId: id,
        name,
        employeeId,
      },
    });

    return {
      status: "success" as const,
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        employeeId: user.employeeId,
        role: user.role,
      },
    };
  });
