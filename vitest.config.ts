import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: "nuxt",
    alias: {
      "@/": new URL(".", import.meta.url).pathname,
    },
    coverage: {
      provider: "v8",
      enabled: true,
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        "**/nuxt.config.ts",
      ],
    },
  },
});
