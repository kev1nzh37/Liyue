import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import dts from 'rollup-plugin-dts'

const globals = {}
export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: 'lib/bundle.mjs',
        format: 'esm',
        globals,
      },
    ],
    external: Object.keys(globals),
    plugins: [
      typescript({ compilerOptions: { lib: ['esnext', 'dom'] } }),
      terser({
        format: {
          comments: true,
        },
      }),
    ],
    watch: {
      exclude: 'node_modules/**',
    },
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: 'lib/bundle.cjs',
        format: 'esm',
        globals,
      },
    ],
    external: Object.keys(globals),
    plugins: [
      typescript({ compilerOptions: { lib: ['esnext', 'dom'] } }),
      terser({
        format: {
          comments: true,
        },
      }),
    ],
    watch: {
      exclude: 'node_modules/**',
    },
  },
  {
    input: './src/index_browser.ts',
    output: [
      {
        file: 'lib/bundle.umd.js',
        format: 'umd',
        name: 'liyue',
        globals,
        exports: 'default',
      },
    ],
    // external: Object.keys(globals),
    plugins: [
      typescript({ compilerOptions: { lib: ['esnext', 'dom'] } }),
      terser({
        format: {
          comments: true,
        },
      }),
      nodeResolve({
        browser: true,
      }),
      nodePolyfills(),
    ],
    watch: {
      exclude: 'node_modules/**',
    },
  },
  {
    input: './src/index.ts',
    output: [{ file: 'lib/bundle.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
])
