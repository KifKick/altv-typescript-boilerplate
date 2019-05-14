import alt from 'alt'
import natives from 'natives'

natives.freezeEntityPosition(alt.getLocalPlayer().scriptID, false)
natives.setPedDefaultComponentVariation(alt.getLocalPlayer().scriptID)

import exampleModule from 'client/modules/exampleModule/init'

const init = async() => {
	await exampleModule()
}

init()