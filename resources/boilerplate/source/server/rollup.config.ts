import path from 'path'
// tslint:disable: import-name
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import builtinModules from 'builtin-modules'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'

export default {
	input: path.resolve(__dirname, 'index.ts'),
	output: {
		file: path.resolve(__dirname, '..', '..', 'server', 'index.bundle.js'),
		format: 'cjs',
	},

	external: ['alt', 'alt-server', ...builtinModules],

	plugins: [
		eslint(),
		typescript({
			tsconfig: path.resolve(__dirname, 'tsconfig.json'),
		}),
		autoExternal({
			builtins: false,
			dependencies: true,
			packagePath: path.resolve(__dirname, '..', '..', '..', '..', 'package.json'),
			peerDependencies: false,
		}),
		resolve({
			preferBuiltins: true,
			extensions: ['.ts', '.js', '.json']
		}),
		json(),
		terser(),
	],
}
