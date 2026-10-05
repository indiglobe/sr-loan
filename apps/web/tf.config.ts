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
        PORT: 12430,
      },
    },
    start: {
      execute: "node dist/server/index.mjs",
      envFile: ".env.production",
      envValues: {
        NODE_ENV: "production",
      },
    },
    build: {
      execute: "vite build",
      envFile: ".env.production",
    },
    "sb:dev": {
      execute: "storybook dev -p 15101 --no-open",
      envFile: ".env.development",
    },
    "sb:build": {
      execute: "storybook build",
      envFile: ".env.production",
    },
  },
});
