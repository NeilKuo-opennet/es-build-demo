import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'rollup/index.js', // ES module
      format: 'es',
			inlineDynamicImports: true
    }
  ],
  plugins: [
    nodeResolve({
		}),
    // commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['idb'],
};