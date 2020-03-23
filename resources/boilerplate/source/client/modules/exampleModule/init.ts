import alt from 'alt-client'
import exampleFunction from 'client/modules/exampleModule/functions/exampleFunction'

export default async () => {
	await exampleFunction()
	alt.log('exampleModule inited')
}