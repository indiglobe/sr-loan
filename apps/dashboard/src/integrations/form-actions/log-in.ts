import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { serverFn__readOneUser } from "../tanstack/server-funciton/user.sfn";
import { tryCatch } from "@repo/utils/try-catch";
import bcrypt from "bcryptjs";
import { signJWT } from "@repo/utils/jwt";
import { setUserDetailsCookie } from "@/lib/auth/session";

export const loginSchema = z.object({
  role: z.enum(["ADMIN", "AGENT"], {
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
    const [passwordError, passwordValid] = await tryCatch(
      bcrypt.compare(password, user.password),
    );

    if (passwordError) {
      console.error("Error comparing password:", passwordError);

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

    const { email: userEmail, name, role: userRole, id, phoneNumber } = user;

    const [jwtCreationError] = await tryCatch(
      signJWT({
        name,
        email: userEmail,
        phone: phoneNumber,
        role: userRole,
        userId: id,
      }),
    );

    if (jwtCreationError) {
      console.log(`Error in jwtCreationError in serverFn__login`);
      throw jwtCreationError;
    }

    await setUserDetailsCookie({
      data: {
        email: userEmail,
        name,
        phone: phoneNumber,
        role: userRole,
        userId: id,
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
