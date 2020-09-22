/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import alt from 'alt-client'
import natives from 'natives'

natives.freezeEntityPosition(alt.Player.local.scriptID, false)
natives.setPedDefaultComponentVariation(alt.Player.local.scriptID)

import exampleModule from 'client/modules/exampleModule/init'

const init = async() => {
	await exampleModule()


	alt.on('test', (testarg: number, bleble: string) => {
		alt.log(testarg)
	})

	alt.on('disconnect', () => {
		alt.log('disconnected')
	})

	alt.on('gameEntityCreate', (entity) => {
		alt.log(typeof entity)
	})

	alt.on('gameEntityDestroy', (entity) => {
		alt.log(typeof entity)
	})

	alt.on('syncedMetaChange', (myarg: number, arg) => {
		alt.log(typeof myarg)
	})

}

init()