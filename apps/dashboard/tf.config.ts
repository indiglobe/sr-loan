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
  },
});
