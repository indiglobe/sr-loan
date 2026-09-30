import { defineConfig } from "taskforge-cli/config";
import os from "node:os";

export default defineConfig({
  envDir: "../../",
  scripts: {
    dev: {
      execute: "vite dev --open",
      envFile:
        os.platform() === "linux" ? ".env.devcontainer" : ".env.development",
      envValues: {
        PORT: 19288,
      },
    },
    "serve:app": {
      execute: "node dist/server/index.mjs",
      envFile: ".env.production",
    },
    "build:app": {
      execute: "vite build",
      envFile: ".env.production",
    },

    "sb:dev": {
      execute: "storybook dev -p 10096",
      envFile:
        os.platform() === "linux" ? ".env.devcontainer" : ".env.development",
    },
    "sb:build": {
      execute: "storybook build",
      envFile: ".env.production",
    },
     // ===================================
    // DATABASE
    // ===================================
    "db:test:query": {
      execute: "tsx watch ./src/database/helpers/test-query.ts",
      envFile: ".env.development",
    },
    "db:dev": {
      execute: "pnpm db:dev:setup && pnpm db:dev:push && pnpm db:dev:seed",
      envValues: {
        STRICT: false,
        VERBOSE: false,
      },
    },
    "db:dev:seed": {
      execute: "tsx ./src/database/helpers/seed.ts",
      envFile: ".env.development",
    },
    "db:dev:setup": {
      execute: "tsx ./src/database/helpers/setup-db.ts",
      envFile: ".env.development",
    },
    "db:dev:push": {
      execute: "drizzle-kit push",
      envFile: ".env.development",
    },
    "db:dev:studio": {
      execute: "drizzle-kit studio",
      envFile: ".env.development",
    },
    "db:generate": {
      execute: "drizzle-kit generate",
      envFile: ".env.production",
    },
    "db:migrate": {
      execute: "drizzle-kit migrate",
      envFile: ".env.production",
    },
    "db:pull": {
      execute: "drizzle-kit pull",
      envFile: ".env.production",
    },
    "db:export": {
      execute: "drizzle-kit export",
      envFile: ".env.production",
    },
    // ===================================
    // DOCKER
    // ===================================
    "docker:compose:prod": {
      execute: "docker compose -f ./.docker/compose.prod.yaml up -d",
      envFile: ".env.production",
    },

  },
});
