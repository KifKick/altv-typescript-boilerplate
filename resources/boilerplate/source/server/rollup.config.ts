import path from 'path'
// tslint:disable: import-name
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
	input: path.resolve(__dirname, 'index.ts'),
	output: {
		file: path.resolve(__dirname, '..', '..', 'server', 'index.bundle.mjs'),
		format: 'esm',
	},

	external: ['alt'],

	plugins: [
		typescript({
			tsconfig: path.resolve(__dirname, 'tsconfig.json'),
		}),
		autoExternal({
			builtins: false,
			dependencies: true,
			packagePath: path.resolve(__dirname, '..', '..', '..', '..', 'package.json'),
			peerDependencies: false,
		}),
		builtins(),
		resolve(),
		json(),
		terser(),
	],
}
