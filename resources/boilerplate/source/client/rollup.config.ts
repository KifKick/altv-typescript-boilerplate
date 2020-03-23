import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'

export default {
	input: path.resolve(__dirname, 'index.ts'),
	output: {
		file: path.resolve(__dirname, '..', '..', 'client', 'index.bundle.js'),
		format: 'esm',
	},

	external: ['alt', 'alt-client', 'natives'],

	plugins: [
		eslint(),
		typescript({
			tsconfig: path.resolve(__dirname, 'tsconfig.json'),
		}),
		resolve({
			preferBuiltins: true,
		}),
		builtins(),
		json(),
		terser(),
	],
}
