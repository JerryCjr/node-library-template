import typescript2 from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = 'lib/index.ts';
const banner = `/*
 * ${pkg.name}
 * ${pkg.description}
 * ${pkg.author}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;
export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      banner,
    },
    plugins: [typescript2(), nodeResolve()],
  },
  {
    input,
    output: {
      file: pkg.main.replace(/\.js$/, '.min.js'),
      format: 'cjs',
    },
    plugins: [typescript2(), nodeResolve(), terser()],
  },
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      banner,
    },
    plugins: [typescript2(), nodeResolve()],
  },
];
