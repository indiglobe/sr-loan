import { serverFn__login } from "@/integrations/form-actions/log-in";
import { cn } from "@repo/styles/cn";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "@repo/ui/sonner";
import z from "zod";

type LoginRole = "ADMIN" | "AGENT";

const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const [role, setRole] = useState<LoginRole>("ADMIN");

  const loginMutation = useLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onChange: loginSchema,
    },

    onSubmit: async ({ value }) => {
      const response = await loginMutation.mutateAsync({
        data: { email: value.email, password: value.password, role: role },
      });

      if (response.status === "error") {
        toast.error("Login failed", {
          description: response.message ?? "Invalid email or password.",
        });

        return;
      }

      toast.success("Login successful", {
        description: `Welcome back! You are logged in as ${
          response.user?.role === "ADMIN" ? "Admin" : "Agent"
        }.`,
      });
    },
  });

  return (
    <main
      className={cn(
        "flex min-h-svh items-center justify-center bg-background px-4 py-8 text-foreground sm:px-6",
      )}
    >
      <div className={cn("w-full max-w-md")}>
        <div
          className={cn(
            "overflow-hidden rounded-3xl border border-accent-200 bg-white shadow-[0_20px_60px_rgba(63,23,9,0.08)] dark:border-accent-800 dark:bg-accent-950",
          )}
        >
          {/* Header */}
          <div className={cn("px-5 pt-7 sm:px-8 sm:pt-9")}>
            <div
              className={cn(
                "mb-2 inline-flex rounded-md bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300",
              )}
            >
              Secure Login
            </div>

            <h1
              className={cn(
                "font-brand-secondary text-2xl font-bold tracking-tight text-accent-950 sm:text-3xl dark:text-accent-50",
              )}
            >
              Welcome Back
            </h1>

            <p
              className={cn(
                "mt-2 text-sm leading-6 text-accent-600 dark:text-accent-300",
              )}
            >
              Select your account type and enter your login credentials.
            </p>
          </div>

          <div className={cn("px-5 pt-6 pb-7 sm:px-8 sm:pb-9")}>
            {/* Admin / Agent Toggle */}
            <div
              className={cn(
                "mb-7 grid grid-cols-2 rounded-md bg-accent-100 p-1 dark:bg-accent-900",
              )}
            >
              <button
                type="button"
                onClick={() => setRole("ADMIN")}
                disabled={loginMutation.isPending}
                className={cn(
                  "rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                  role === "ADMIN"
                    ? cn(
                        "bg-primary-500 text-white shadow-sm hover:bg-primary-600",
                      )
                    : cn(
                        "text-accent-600 hover:bg-white/60 hover:text-accent-950 dark:text-accent-300 dark:hover:bg-accent-800 dark:hover:text-white",
                      ),
                )}
              >
                Admin
              </button>

              <button
                type="button"
                onClick={() => setRole("AGENT")}
                disabled={loginMutation.isPending}
                className={cn(
                  "rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                  role === "AGENT"
                    ? cn(
                        "bg-primary-500 text-white shadow-sm hover:bg-primary-600",
                      )
                    : cn(
                        "text-accent-600 hover:bg-white/60 hover:text-accent-950 dark:text-accent-300 dark:hover:bg-accent-800 dark:hover:text-white",
                      ),
                )}
              >
                Agent
              </button>
            </div>

            {/* Login Form */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();

                void form.handleSubmit();
              }}
              className={cn("space-y-5")}
            >
              {/* Email */}
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) {
                      return "Email is required";
                    }

                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                      return "Enter a valid email address";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div className={cn("space-y-2")}>
                    <label
                      htmlFor={field.name}
                      className={cn(
                        "block text-sm font-semibold text-accent-800 dark:text-accent-100",
                      )}
                    >
                      Email
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="email"
                      autoComplete="email"
                      placeholder={
                        role === "ADMIN"
                          ? "admin@example.com"
                          : "agent@example.com"
                      }
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className={cn(
                        "h-12 w-full rounded-md border bg-white px-4 text-sm text-accent-950 outline-none transition-all duration-200 placeholder:text-accent-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 dark:bg-accent-900 dark:text-accent-50 dark:placeholder:text-accent-500",
                        field.state.meta.isTouched &&
                          field.state.meta.errors.length > 0
                          ? cn(
                              "border-red-500",
                              "focus:border-red-500",
                              "focus:ring-red-500/10",
                            )
                          : cn("border-accent-200", "dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p
                          className={cn("text-xs font-medium", "text-red-500")}
                        >
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                  </div>
                )}
              </form.Field>

              {/* Password */}
              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "Password is required";
                    }

                    if (value.length < 6) {
                      return "Password must be at least 6 characters";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div className={cn("space-y-2")}>
                    <label
                      htmlFor={field.name}
                      className={cn(
                        "block text-sm font-semibold text-accent-800 dark:text-accent-100",
                      )}
                    >
                      Password
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      className={cn(
                        "h-12 w-full rounded-md border bg-white px-4 text-sm text-accent-950 outline-none transition-all duration-200 placeholder:text-accent-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 dark:bg-accent-900 dark:text-accent-50 dark:placeholder:text-accent-500",
                        field.state.meta.isTouched &&
                          field.state.meta.errors.length > 0
                          ? cn(
                              "border-red-500",
                              "focus:border-red-500",
                              "focus:ring-red-500/10",
                            )
                          : cn("border-accent-200", "dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p
                          className={cn("text-xs font-medium", "text-red-500")}
                        >
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                  </div>
                )}
              </form.Field>

              {/* Submit */}
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
              >
                {([canSubmit, isSubmitting]) => {
                  const loading = isSubmitting || loginMutation.isPending;

                  return (
                    <button
                      type="submit"
                      disabled={!canSubmit || loading}
                      className={cn(
                        "mt-2 flex h-12 w-full items-center justify-center rounded-md bg-primary-500 px-5 text-sm font-bold text-white transition-all duration-200 hover:bg-primary-600 active:scale-[0.99] focus:ring-4 focus:ring-primary-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:bg-primary-500 dark:hover:bg-primary-400",
                      )}
                    >
                      {loading
                        ? "Logging in..."
                        : `Login as ${role === "ADMIN" ? "Admin" : "Agent"}`}
                    </button>
                  );
                }}
              </form.Subscribe>
            </form>
          </div>

          {/* Bottom Accent */}
          <div
            className={cn(
              "h-1.5 w-full bg-linear-to-r from-primary-500 via-primary-400 to-secondary-400",
            )}
          />
        </div>
      </div>
    </main>
  );
}

export function useLogin() {
  const login = useServerFn(serverFn__login);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,

    onSuccess: ({ user, status }) => {
      if (status === "success") {
        const { role } = user;

        if (role === "ADMIN") {
          navigate({ to: "/admin/dashboard" });
        } else {
          navigate({ to: "/agent/dashboard" });
        }
      }
    },
  });
}
