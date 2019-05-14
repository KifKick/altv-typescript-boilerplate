import { createConnection, Connection, ConnectionOptions } from 'typeorm-esm'
import path from 'path'
import fs from 'fs-extra'

import { ExampleModel } from './models/ExampleModel'

const config: ConnectionOptions = {
	...fs.readJsonSync(path.join(path.resolve(), 'ormconfig.json')),
	entities: [
		ExampleModel
	]
}

let conn: Connection = null

createConnection(config)
	.then(async (connection) => {
		conn = connection
		console.log('Database connected successfully')
	})
	.catch(err => {
		console.log(err)
	})

export const getConnection = () => {
	return conn
}