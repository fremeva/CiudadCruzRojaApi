'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'usuario',
			passwordField: 'password'
		},
		function(usuario, password, done) {
			User.findOne({
				usuario: usuario
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, {
						message: 'Unknown user or invalid password'
					});
				}
				if (!user.authenticate(password)) {
					console.log(password);
					console.log("-------------------");
					console.log(user.password);
					return done(null, false, {
						message: 'Unknown invalid password'
					});
				}

				return done(null, user);
			});
		}
	));
};
