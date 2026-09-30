import { cn } from "@repo/styles/cn";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import {
  useCreateNewAgent,
  useReadAllUsers,
} from "@/integrations/tanstack/react-query/user.query";
import { tryCatch } from "@repo/utils/try-catch";

export function AdminDashboard() {
  return (
    <main
      className={cn(
        "min-h-svh bg-background px-4 py-5 text-foreground sm:px-6 sm:py-6 lg:px-8",
      )}
    >
      <div className={cn("mx-auto w-full max-w-7xl")}>
        {/* Dashboard Top Bar */}
        <div className={cn("flex w-full items-start justify-between gap-4")}>
          {/* Left */}
          <div>
            <div
              className={cn(
                "mb-2 inline-flex rounded-md bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300",
              )}
            >
              Admin Panel
            </div>

            <h1
              className={cn(
                "font-brand-secondary text-2xl font-bold tracking-tight text-accent-950 sm:text-3xl dark:text-accent-50",
              )}
            >
              Admin Dashboard
            </h1>

            <p
              className={cn(
                "mt-1 max-w-xl text-sm leading-6 text-accent-600 dark:text-accent-300",
              )}
            >
              Manage agents and administration from one place.
            </p>
          </div>

          {/* Top Right */}
          <div className={cn("shrink-0")}>
            <CreateAgent />
          </div>
        </div>

        {/* Agent Table */}
        <AgentTable />
      </div>
    </main>
  );
}

function CreateAgent() {
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync } = useCreateNewAgent();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
      emergencyPhoneNumber: "",
    },

    onSubmit: async ({ value }) => {
      const { email, emergencyPhoneNumber, name, password, phoneNumber } =
        value;

      await tryCatch(
        mutateAsync({
          data: { email, emergencyPhoneNumber, name, password, phoneNumber },
        }),
      );

      setIsOpen(false);
    },
  });

  return (
    <>
      {/* Create Agent Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 bg-primary-500 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-600 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary-500/20 dark:bg-primary-500 dark:hover:bg-primary-400",
        )}
      >
        <LuPlus className="size-4" />
        Create Agent
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-accent-950/40 px-4 py-8 backdrop-blur-sm",
          )}
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            className={cn(
              "w-full max-w-md overflow-hidden rounded-md border border-accent-200 bg-white shadow-[0_25px_80px_rgba(44,36,30,0.25)] dark:border-accent-700 dark:bg-accent-950",
            )}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={cn(
                "flex items-start justify-between border-b border-accent-100 px-5 py-5 sm:px-6 dark:border-accent-800",
              )}
            >
              <div>
                <div
                  className={cn(
                    "mb-2 inline-flex rounded-md bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300",
                  )}
                >
                  Agent Management
                </div>

                <h2
                  className={cn(
                    "font-brand-secondary text-xl font-bold text-accent-950 sm:text-2xl dark:text-accent-50",
                  )}
                >
                  Create New Agent
                </h2>

                <p
                  className={cn(
                    "mt-1 text-sm text-accent-600 dark:text-accent-300",
                  )}
                >
                  Enter the login credentials for the new agent.
                </p>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "ml-4 flex size-9 shrink-0 items-center justify-center rounded-md border border-accent-200 bg-accent-50 text-lg text-accent-600 transition-all duration-200 hover:bg-primary-50 hover:text-primary-700 dark:border-accent-700 dark:bg-accent-900 dark:text-accent-300 dark:hover:bg-primary-950 dark:hover:text-primary-300",
                )}
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();

                void form.handleSubmit();
              }}
              className={cn("space-y-5 px-5 py-6 sm:px-6")}
            >
              {/* Name */}
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) {
                      return "Agent name is required";
                    }

                    if (value.trim().length < 2) {
                      return "Agent name must be at least 2 characters";
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
                      Agent Name <sup className="text-red-500">*</sup>
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="text"
                      autoComplete="name"
                      placeholder="Enter agent name"
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
                              "border-red-500 focus:border-red-500 focus:ring-red-500/10",
                            )
                          : cn("border-accent-200 dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className={cn("text-xs font-medium text-red-500")}>
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                  </div>
                )}
              </form.Field>

              {/* Phone No. */}
              <form.Field
                name="phoneNumber"
                validators={{
                  onChange: ({ value }) => {
                    const phone = value.trim();

                    if (!phone) {
                      return "Phone number is required";
                    }

                    if (!/^\d{10}$/.test(phone)) {
                      return "Phone number must be exactly 10 digits";
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
                      Phone No. <sup className="text-red-500">*</sup>
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      placeholder="Enter phone number"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) => {
                        const value = event.target.value.replace(/\D/g, "");
                        field.handleChange(value);
                      }}
                      className={cn(
                        "h-12 w-full rounded-md border bg-white px-4 text-sm text-accent-950 outline-none transition-all duration-200 placeholder:text-accent-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 dark:bg-accent-900 dark:text-accent-50 dark:placeholder:text-accent-500",
                        field.state.meta.isTouched &&
                          field.state.meta.errors.length > 0
                          ? cn(
                              "border-red-500 focus:border-red-500 focus:ring-red-500/10",
                            )
                          : cn("border-accent-200 dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className={cn("text-xs font-medium text-red-500")}>
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                  </div>
                )}
              </form.Field>

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
                      Agent Email <sup className="text-red-500">*</sup>
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="email"
                      autoComplete="email"
                      placeholder="agent@example.com"
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
                              "border-red-500 focus:border-red-500 focus:ring-red-500/10",
                            )
                          : cn("border-accent-200 dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className={cn("text-xs font-medium text-red-500")}>
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
                      Password <sup className="text-red-500">*</sup>
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="password"
                      autoComplete="new-password"
                      placeholder="Enter agent password"
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
                              "border-red-500 focus:border-red-500 focus:ring-red-500/10",
                            )
                          : cn("border-accent-200 dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className={cn("text-xs font-medium text-red-500")}>
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                  </div>
                )}
              </form.Field>

              {/* Emergency Phone No. (Optional) */}
              <form.Field
                name="emergencyPhoneNumber"
                validators={{
                  onChange: ({ value }) => {
                    const phone = value.trim();

                    // Optional field
                    if (!phone) {
                      return undefined;
                    }

                    if (!/^\d{10}$/.test(phone)) {
                      return "Emergency phone number must be exactly 10 digits";
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
                      Emergency Phone No.{" "}
                      <span
                        className={cn(
                          "font-normal text-accent-400 dark:text-accent-500",
                        )}
                      >
                        (Optional)
                      </span>
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      placeholder="Enter emergency phone number"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) => {
                        const value = event.target.value.replace(/\D/g, "");
                        field.handleChange(value);
                      }}
                      className={cn(
                        "h-12 w-full rounded-md border bg-white px-4 text-sm text-accent-950 outline-none transition-all duration-200 placeholder:text-accent-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 dark:bg-accent-900 dark:text-accent-50 dark:placeholder:text-accent-500",
                        field.state.meta.isTouched &&
                          field.state.meta.errors.length > 0
                          ? cn(
                              "border-red-500 focus:border-red-500 focus:ring-red-500/10",
                            )
                          : cn("border-accent-200 dark:border-accent-700"),
                      )}
                    />

                    {field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0 && (
                        <p className={cn("text-xs font-medium text-red-500")}>
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                  </div>
                )}
              </form.Field>

              {/* Buttons */}
              <div
                className={cn(
                  "flex flex-col-reverse gap-3 pt-2 3xs:flex-row 3xs:justify-end",
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    form.reset();
                    setIsOpen(false);
                  }}
                  className={cn(
                    "h-11 rounded-md border border-accent-200 bg-white px-5 text-sm font-semibold text-accent-700 transition-all duration-200 hover:bg-accent-100 hover:text-accent-950 dark:border-accent-700 dark:bg-accent-900 dark:text-accent-200 dark:hover:bg-accent-800 dark:hover:text-white",
                  )}
                >
                  Cancel
                </button>

                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className={cn(
                        "h-11 rounded-md bg-primary-500 px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-primary-600 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-primary-400",
                      )}
                    >
                      {isSubmitting ? "Creating..." : "Create Agent"}
                    </button>
                  )}
                </form.Subscribe>
              </div>
            </form>

            {/* Bottom Accent */}
            <div
              className={cn(
                "h-1.5 w-full bg-linear-to-r from-primary-500 via-primary-400 to-secondary-400",
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}

function AgentTableLoading() {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-accent-200 bg-white shadow-[0_16px_45px_rgba(63,23,9,0.06)] dark:border-accent-800 dark:bg-accent-950",
      )}
    >
      <div className={cn("overflow-x-auto")}>
        <table className={cn("w-full min-w-225")}>
          <thead
            className={cn(
              "border-b border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-900",
            )}
          >
            <tr>
              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Employee ID
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Name
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Email
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Phone No.
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Emergency Phone No.
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  "border-b border-accent-100 last:border-b-0 dark:border-accent-800",
                )}
              >
                {/* eslint-disable-next-line no-shadow */}
                {Array.from({ length: 5 }).map((_, columnIndex) => (
                  <td key={columnIndex} className={cn("px-5 py-5")}>
                    <div
                      className={cn(
                        "h-4 animate-pulse rounded-md bg-accent-200 dark:bg-accent-800",
                        columnIndex === 0 && "w-24",
                        columnIndex === 1 && "w-32",
                        columnIndex === 2 && "w-44",
                        columnIndex === 3 && "w-28",
                        columnIndex === 4 && "w-32",
                      )}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AgentTableError() {
  return (
    <div
      className={cn(
        "flex min-h-67.5 items-center justify-center rounded-md border border-primary-200 bg-primary-50/70 px-6 py-10 text-center shadow-[0_16px_45px_rgba(63,23,9,0.06)] dark:border-primary-900 dark:bg-primary-950/40",
      )}
    >
      <div className={cn("max-w-md")}>
        <div
          className={cn(
            "mx-auto mb-4 flex size-12 items-center justify-center rounded-md bg-primary-100 text-xl font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300",
          )}
        >
          !
        </div>

        <h3
          className={cn(
            "font-brand-secondary text-lg font-bold text-accent-950 dark:text-accent-50",
          )}
        >
          Unable to load agents
        </h3>

        <p
          className={cn(
            "mt-2 text-sm leading-6 text-accent-600 dark:text-accent-300",
          )}
        >
          Something went wrong while fetching agent information. Please try
          again.
        </p>
      </div>
    </div>
  );
}

function AgentTableData() {
  const { data } = useReadAllUsers({ role: "AGENT" });

  if (!data) return null;

  if (data.length === 0) {
    return (
      <div
        className={cn(
          "flex min-h-67.5 items-center justify-center rounded-md border border-accent-200 bg-white px-6 py-10 text-center shadow-[0_16px_45px_rgba(63,23,9,0.06)] dark:border-accent-800 dark:bg-accent-950",
        )}
      >
        <div>
          <div
            className={cn(
              "mx-auto mb-4 flex size-12 items-center justify-center rounded-md bg-primary-50 text-xl font-bold text-primary-600 dark:bg-primary-950 dark:text-primary-300",
            )}
          >
            <LuPlus className={cn("size-5")} />
          </div>

          <h3
            className={cn(
              "font-brand-secondary text-lg font-bold text-accent-950 dark:text-accent-50",
            )}
          >
            No agents found
          </h3>

          <p
            className={cn("mt-2 text-sm text-accent-600 dark:text-accent-300")}
          >
            Create an agent and their information will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-accent-200 bg-white shadow-[0_16px_45px_rgba(63,23,9,0.06)] dark:border-accent-800 dark:bg-accent-950",
      )}
    >
      <div className={cn("overflow-x-auto")}>
        <table className={cn("w-full min-w-225")}>
          <thead
            className={cn(
              "border-b border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-900",
            )}
          >
            <tr>
              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Employee ID
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Name
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Email
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Phone No.
              </th>

              <th
                className={cn(
                  "px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-accent-600 dark:text-accent-300",
                )}
              >
                Emergency Phone No.
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((agent) => (
              <tr
                key={agent.employeeId}
                className={cn(
                  "border-b border-accent-100 transition-colors duration-200 last:border-b-0 hover:bg-primary-50/50 dark:border-accent-800 dark:hover:bg-primary-950/30",
                )}
              >
                <td
                  className={cn(
                    "px-5 py-4 text-sm font-semibold text-primary-700 dark:text-primary-300",
                  )}
                >
                  {agent.employeeId}
                </td>

                <td
                  className={cn(
                    "px-5 py-4 text-sm font-semibold text-accent-950 dark:text-accent-50",
                  )}
                >
                  {agent.name}
                </td>

                <td
                  className={cn(
                    "px-5 py-4 text-sm text-accent-700 dark:text-accent-300",
                  )}
                >
                  {agent.email}
                </td>

                <td
                  className={cn(
                    "px-5 py-4 text-sm text-accent-700 dark:text-accent-300",
                  )}
                >
                  {agent.phoneNumber}
                </td>

                <td
                  className={cn(
                    "px-5 py-4 text-sm text-accent-700 dark:text-accent-300",
                  )}
                >
                  {agent.emergencyPhoneNumber ? (
                    agent.emergencyPhoneNumber
                  ) : (
                    <span
                      className={cn(
                        "inline-flex rounded-md bg-accent-100 px-2.5 py-1 text-xs font-semibold text-accent-500 dark:bg-accent-800 dark:text-accent-400",
                      )}
                    >
                      Not provided
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AgentTable() {
  const {
    data: agentsData,
    isError: agentsIsError,
    isPending: agentsIsPending,
  } = useReadAllUsers({
    role: "AGENT",
  });
  return (
    <section className={cn("mt-8 w-full")}>
      {/* Table Header */}
      <div
        className={cn(
          "mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        )}
      >
        <div>
          <h2
            className={cn(
              "font-brand-secondary text-xl font-bold text-accent-950 sm:text-2xl dark:text-accent-50",
            )}
          >
            Agents
          </h2>

          <p
            className={cn("mt-1 text-sm text-accent-600 dark:text-accent-300")}
          >
            View all registered agents and their contact information.
          </p>
        </div>

        {!agentsIsPending && !agentsIsError && (
          <div
            className={cn(
              "inline-flex w-fit rounded-md bg-accent-100 px-3 py-1.5 text-xs font-semibold text-accent-700 dark:bg-accent-900 dark:text-accent-300",
            )}
          >
            {agentsData.length} {agentsData.length === 1 ? "Agent" : "Agents"}
          </div>
        )}
      </div>

      {/* 3 States */}
      {agentsIsPending ? (
        <AgentTableLoading />
      ) : agentsIsError ? (
        <AgentTableError />
      ) : (
        <AgentTableData />
      )}
    </section>
  );
}
