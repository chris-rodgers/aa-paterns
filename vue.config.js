var jsonImporter = require('node-sass-json-importer');

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/styles/app.scss";`,
				importer: jsonImporter()
			}
		}
	},
	runtimeCompiler: true
};
