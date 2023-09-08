import { nodeResolve } from '@rollup/plugin-node-resolve';import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js', // 入口文件
  output: [
    {
      file: 'dist/my-module.esm.js', // ES 模块
      format: 'es',
			inlineDynamicImports: true
    }
  ],
  plugins: [
    nodeResolve({
		}),
    // commonjs(),
    babel({
      exclude: 'node_modules/**' // 使用 Babel 转译你的源码
    })
  ],
  external: ["idb"],
};