/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import alt from 'alt-client'
import natives from 'natives'

natives.freezeEntityPosition(alt.Player.local.scriptID, false)
natives.setPedDefaultComponentVariation(alt.Player.local.scriptID)

import exampleModule from 'client/modules/exampleModule/init'

const init = async() => {
	await exampleModule()
}

init()