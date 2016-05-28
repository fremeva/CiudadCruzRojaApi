'use strict';
/**
 * Module dependencies.
 */

var config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');


var configApp = config.configApp;


/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(configApp.db, function(err) {
	if (err) {
		console.error(chalk.red('Error al conectar con MongoDB!'));
		console.log(chalk.red(err));
	}
	else{
		console.log(chalk.green(db.connection.db));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(configApp.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + configApp.port);
