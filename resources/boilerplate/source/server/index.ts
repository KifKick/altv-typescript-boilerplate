/// <reference path="./typings/alt.d.ts" />
import alt from 'alt'
import { getConnection } from './database'
import chalk from 'chalk'
import { asyncForEach } from './utils/array'

const modules = [
	'exampleModule',
]

const init = async () => {
	await getConnection()

	await asyncForEach(modules, async (module: string) => {
		const importedModule = await import(`./modules/${module}/init`)
		await importedModule.default()
		alt.log('Module ' + chalk.yellowBright(module) + ' loaded')
	})
}
init()