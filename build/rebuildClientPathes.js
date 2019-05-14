const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const rif = require('replace-in-file')

const files = (dir) => fs.readdirSync(dir)
let output = []
const reproduceUtilsFiles = (dir, folder = '') => {
	files(dir).forEach(file => {
		fs.statSync(path.join(dir, file)).isDirectory() ? reproduceUtilsFiles(path.join(dir, file), `${folder}/${file}`) : output.push({ url: `${folder}`, name: _.replace(file, '.js', '') })
	})
	output.forEach(el => {
		if (el.url[0] === '/') el.url = el.url.slice(1, el.url.lenght)
	})
}
reproduceUtilsFiles(path.join(__dirname, '..', 'resources', 'boilerplate', 'client'), '')

output.forEach(m => {
	if (m.url !== '') {
		const from = `client/${m.url}/${m.name}';`
		const to = `client/${m.url}/${m.name}.js';`
		const results = rif.sync({
			files: path.join(__dirname, '..', 'resources', 'boilerplate', 'client') + '/**/*.js',
			from,
			to
		})
		//console.log(results)
	}
})