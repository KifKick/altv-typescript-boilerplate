/// <reference path="./typings/alt.d.ts" />
import alt from 'alt'
import {getConnection} from './database'

const modules = [
	'exampleModule',
]

const init = async () => {
	for (const module of modules) {
		import(`./modules/${module}/init`)
			.then(async (importedModule) => {
				await importedModule.default()
				alt.log(`Module ${module} loaded`)
			})
			.catch((err) => {
				alt.logError(`Module ${module} failed to load. ${err.message}`)
			})
	}
	getConnection()
}
init()