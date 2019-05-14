import alt from 'alt'
import exampleFunction from './functions/exampleFunction'

export default async () => {
	await exampleFunction()
	alt.log('exampleModule inited')
}