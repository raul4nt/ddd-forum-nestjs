// import { defineConfig } from 'vite'
// import tsConfigPaths from 'vite-tsconfig-paths'

// export default defineConfig({
//     plugins: [tsConfigPaths()],
//     test: {
//         globals: true,
//         // usando isso nn precisa mais importar funçoes do vitest
//         // usa de forma global
//     }
// })

import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const tsConfigPaths = (await import('vite-tsconfig-paths')).default;

  return {
    plugins: [tsConfigPaths()],
    test: {
      globals: true,
      // usando isso nn precisa mais importar funçoes do vitest
      // usa de forma global
    },
  };
});
