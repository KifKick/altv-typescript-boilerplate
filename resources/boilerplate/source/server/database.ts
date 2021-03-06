import * as alt from 'alt-server'
import { createConnection, Connection, ConnectionOptions } from 'typeorm'
import path from 'path'
import fs from 'fs-extra'
import chalk from 'chalk'

import { ExampleModel } from './models/ExampleModel'

const config: ConnectionOptions = {
	...fs.readJsonSync(path.join(alt.rootDir, 'ormconfig.json')),
	entities: [
		ExampleModel
	]
}

let conn: Connection = null


export const getConnection = async () => {
	try {
		if (conn === null) {
			const connection = await createConnection(config)
			conn = connection
			alt.log(chalk.greenBright('Database connected successfully'))
		}
		return conn
	} catch (err) {
		console.log(err)
	}
}