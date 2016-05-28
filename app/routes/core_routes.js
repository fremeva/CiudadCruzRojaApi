'use strict';

var express = require('express');
var router = express.Router();

router.route('/')
	.get(function (req, res) {
		res.send("Estas en la Api :D");
	})
	//.post(TVShowCtrl.addTVShow);

module.exports = router;
/*module.exports = function(app) {
	// Root routing
	//var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(function(req,res){
		res.send("FUNCIONA");
	});
};*/
