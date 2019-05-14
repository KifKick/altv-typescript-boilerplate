import alt from 'alt'
import exampleFunction from 'client/modules/exampleModule/functions/exampleFunction'

export default async () => {
	await exampleFunction()
	alt.log('exampleModule inited')
}