import typescript2 from 'rollup-plugin-typescript2';
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
    plugins: [typescript2()],
  },
  {
    input,
    output: {
      file: pkg.main.replace(/\.js$/, '.min.js'),
      format: 'cjs',
    },
    plugins: [typescript2(), terser()],
  },
];
