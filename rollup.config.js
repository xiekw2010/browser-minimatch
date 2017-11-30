import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import node from 'rollup-plugin-node-builtins'

export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/minimatch.js',
        format: 'umd',
        name: 'minimatch',
      },
    ],
    plugins: [
      commonjs(),
      resolve(),
      node(),
      uglify(),
    ],
  },
]