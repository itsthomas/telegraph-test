const path = require( "path" );

module.exports = {
	mode: "development",
	entry: ["./src/js/sort.js"],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "app.bundle.js",
		library: 'ui'
	}
};
