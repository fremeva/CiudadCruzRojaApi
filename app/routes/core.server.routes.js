'use strict';

module.exports = function(app) {
	// Root routing
	//var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(function(req,res){
		res.send("FUNCIONA");
	});
};
