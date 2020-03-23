import alt from 'alt-server'
import exampleFunction from './functions/exampleFunction'

export default async () => {
	await exampleFunction()
	alt.log('exampleModule inited')
}