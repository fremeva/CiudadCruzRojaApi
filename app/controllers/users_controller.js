var mongoose = require('mongoose');
var Usuarios = mongoose.model('User');

//GET - Return all usuarios in the DB
exports.getUsuarios = function (req, res) {
	Usuarios.find(function (err, usuarios) {
		if (err) res.send(500, err.message);

		console.log('GET /usuarios')
		res.status(200).json(usuarios);
	});
};

//GET - Return a usuarios with specified ID
exports.findById = function (req, res) {
	Usuarios.findById(req.params.id, function (err, usuario) {
		if (err) return res.send(500, err.message);

		console.log('GET /usuarios/' + req.params.id);
		res.status(200).json(usuario);
	});
};

//POST - Insert a new usuario in the DB
exports.addUsuarios = function (req, res) {
	console.log('POST');
	console.log(req.body);

	var usuario = new Usuarios(req.body);
	usuario.save(function (err, usuario) {
		if (err) return res.status(500).send(err.message);
		res.status(200).json(usuario);
	});
};
