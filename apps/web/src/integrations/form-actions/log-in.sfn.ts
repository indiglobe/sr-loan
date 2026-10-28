import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { tryCatch } from "@repo/utils/try-catch";
import bcrypt from "bcryptjs";
import { signJWT } from "@repo/utils/jwt";
import { ROLE_ENUM } from "@repo/utils/enums/db-enums";
import { setUserDetailsCookie } from "@/integrations/auth/session";
import { read__OneUser } from "@repo/data/querries/user";

export const loginSchema = z.object({
  role: z.enum(ROLE_ENUM, {
    message: "Please select a valid role",
  }),

  email: z.email("Enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const serverFn__login = createServerFn({ method: "POST" })
  .validator(loginSchema)
  .handler(async ({ data }) => {
    const { email, password, role } = data;

    const [fetchingExistingUserError, user] = await tryCatch(
      read__OneUser({
        identifier: {
          email,
        },
        include: { password: true },
      }),
    );

    if (fetchingExistingUserError) {
      console.error("Error in fetchingExistingUserError in serverFn__login");
      console.error(fetchingExistingUserError);

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
