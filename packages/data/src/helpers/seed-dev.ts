import { faker } from "@faker-js/faker";
import { db } from "..";
import {
  Table__Bank,
  Table__BankLoanDetails,
  Table__Benefits,
  Table__LoanBenefits,
  Table__LoanType,
  Table__User,
} from "../schema";
import bcrypt from "bcryptjs";
import { env } from "@repo/env/server";
import { eq } from "drizzle-orm";
import { platformEmployeeId } from "@repo/utils/id";
/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

function randomInt(min: number, max: number) {
  return faker.number.int({ min, max });
}

// function roundToClosest9(n: number): number {
//   return n % 10 === 9 ? n : Math.floor(n / 10) * 10 + 9;
// }

/* -------------------------------------------------------------------------- */
/*                               CLEAR DATABASE                               */
/* -------------------------------------------------------------------------- */

async function clearTables() {
  console.log("🧹 Clearing tables...");

  await db.delete(Table__LoanBenefits);
  await db.delete(Table__Benefits);
  await db.delete(Table__BankLoanDetails);
  await db.delete(Table__LoanType);
  await db.delete(Table__Bank);
  await db.delete(Table__User);

  console.log("✅ Tables cleared");
}

/* -------------------------------------------------------------------------- */
/*                                Table__User                                 */
/* -------------------------------------------------------------------------- */

async function seedUser() {
  console.log("👤 Seeding Table__User...");

  const __dummyUsers = Array.from({ length: 10 }).map<
    typeof Table__User.$inferInsert
  >((_, idx) => {
    const fullName = faker.person.fullName();

    // Make the distribution deterministic for seeding
    let role: "ADMIN" | "AGENT" | "CUSTOMER";

    if (idx < 2) {
      role = "ADMIN";
    } else if (idx < 6) {
      role = "AGENT";
    } else {
      role = "CUSTOMER";
    }

    return {
      fullName,
      email: `${fullName.split(" ").join("-").toLowerCase()}-${idx}@email.com`,
      employeeId: platformEmployeeId({
        employeeType: role,
      }),
      name: fullName,
      password: bcrypt.hashSync("12341234", env.SALT_ROUND),
      phoneNumber: `${randomInt(9000000000, 9999999999)}`,
      role: role,
      location: faker.location.city(),
      pin: faker.finance.pin({ length: 6 }),
    };
  });

  await db.insert(Table__User).values([...__dummyUsers]);

  // Fetch users
  const users = await db
    .select({
      employeeId: Table__User.employeeId,
      role: Table__User.role,
    })
    .from(Table__User);

  // Separate by role
  const admins = users.filter((user) => user.role === "ADMIN");
  const agents = users.filter((user) => user.role === "AGENT");
  const customers = users.filter((user) => user.role === "CUSTOMER");

  // --------------------------------------------------
  // AGENT -> ADMIN
  // --------------------------------------------------

  for (let i = 0; i < agents.length; i++) {
    const agent = agents[i]!;

    // Distribute agents between admins
    const admin = admins[i % admins.length]!;

    await db
      .update(Table__User)
      .set({
        referrerEmployeeId: admin.employeeId,
      })
      .where(eq(Table__User.employeeId, agent.employeeId));
  }

  // --------------------------------------------------
  // CUSTOMER -> AGENT
  // --------------------------------------------------

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i]!;

    // Distribute customers between agents
    const agent = agents[i % agents.length]!;

    await db
      .update(Table__User)
      .set({
        referrerEmployeeId: agent.employeeId,
      })
      .where(eq(Table__User.employeeId, customer.employeeId));
  }

  console.log("✅ Table__User seeded");
}

/* -------------------------------------------------------------------------- */
/*                              Table__Bank                                   */
/* -------------------------------------------------------------------------- */

async function seedBank() {
  console.log("👤 Seeding Table__Bank...");

  const fullNames = [
    ...new Set(Array.from({ length: 10 }).map(() => faker.person.fullName())),
  ];

  const __dummyBanks = fullNames.map<typeof Table__Bank.$inferInsert>(
    (name) => ({
      bankName: name,
      bankId: name.split(" ").join("-").toLowerCase(),
    }),
  );

  await db.insert(Table__Bank).values([...__dummyBanks]);

  console.log("✅ Table__Bank seeded");
}

/* -------------------------------------------------------------------------- */
/*                               Table__LoanType                              */
/* -------------------------------------------------------------------------- */

async function seedLoanType() {
  console.log("👤 Seeding Table__LoanType...");

  const fullNames = [
    ...new Set(Array.from({ length: 2 }).map(() => faker.person.fullName())),
  ];

  const __dummyLoanTypes = fullNames.map<typeof Table__LoanType.$inferInsert>(
    (name) => ({
      bankLoanType: name,
      loanTypeId: name.split(" ").join("-").toLowerCase(),
    }),
  );

  await db.insert(Table__LoanType).values([...__dummyLoanTypes]);

  console.log("✅ Table__LoanType seeded");
}

/* -------------------------------------------------------------------------- */
/*                            Table__BankLoanDetails                          */
/* -------------------------------------------------------------------------- */

async function seedBankLoanDetails() {
  console.log("👤 Seeding Table__BankLoanDetails...");
  const banks = await db.select().from(Table__Bank);
  const loans = await db.select().from(Table__LoanType);

  const __dummyBankLoanDetails = banks.map<
    typeof Table__BankLoanDetails.$inferInsert
  >((b) => ({
    bankId: b.bankId,
    loanTypeId: faker.helpers.arrayElement(loans.map((l) => l.loanTypeId)),
    maxTenureInMonth: randomInt(1, 10) * 6,
    processingTimeInDays: randomInt(1, 5),
    returnOnInvest: randomInt(6, 14),
  }));

  await db.insert(Table__BankLoanDetails).values([...__dummyBankLoanDetails]);

  console.log("✅ Table__BankLoanDetails seeded");
}

/* -------------------------------------------------------------------------- */
/*                                Table__Benefits                             */
/* -------------------------------------------------------------------------- */

async function seedBenefits() {
  console.log("👤 Seeding Table__Benefits...");
  const icons = [
    "ShieldCheck",
    "TrendingUp",
    "CalendarDays",
    "BadgeCheck",
    "Clock",
  ] as const;

  const __dummyBenefits = Array.from({ length: 10 }).map(() => ({
    description: faker.lorem.lines(1),
    icon: faker.helpers.arrayElement(icons),
    title: faker.person.fullName(),
  }));

  await db.insert(Table__Benefits).values([...__dummyBenefits]);

  console.log("✅ Table__Benefits seeded");
}

/* -------------------------------------------------------------------------- */
/*                                Table__LoanBenefits                             */
/* -------------------------------------------------------------------------- */

async function seedLoanBenefits() {
  console.log("👤 Seeding Table__LoanBenefits...");

  const bankLoans = await db.select().from(Table__BankLoanDetails);
  const benefits = await db.select().from(Table__Benefits);

  const __dummyLoanBenefits: (typeof Table__LoanBenefits.$inferInsert)[] = [];

  bankLoans.forEach((bl) => {
    faker.helpers.arrayElements(benefits, 4).forEach((bn) => {
      __dummyLoanBenefits.push({ bankLoanId: bl.id, benefitId: bn.id });
    });
  });

  await db.insert(Table__LoanBenefits).values([...__dummyLoanBenefits]);

  console.log("✅ Table__LoanBenefits seeded");
}

/* -------------------------------------------------------------------------- */
/*                                    MAIN                                    */
/* -------------------------------------------------------------------------- */

export async function seed() {
  try {
    console.log("🚀 SEEDING STARTED");

    await clearTables();

    await seedUser();
    await seedBank();
    await seedLoanType();
    await seedBankLoanDetails();
    await seedBenefits();
    await seedLoanBenefits();

    console.log("🎉 SEEDING COMPLETED");

    process.exit(0);
  } catch (err) {
    console.error("❌ SEED FAILED", err);
    process.exit(1);
  }
}

seed();
