import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    //setupFiles: ['dotenv/config'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['src/test', 'src/infrastructure/services'],
    },
  },
  plugins: [tsconfigPaths()],
});
