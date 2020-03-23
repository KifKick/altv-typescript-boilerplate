import * as alt from 'alt-server'
import chalk from 'chalk'
import { getConnection } from './database'

import exampleModule from './modules/exampleModule/init'

(async () => {
	await getConnection()

	await exampleModule()
	alt.log(chalk.yellowBright('All modules loaded'))
})()