'use strict';

var express = require('express');
var accesControlRoute = express.Router();
var accesControlControlle = require('../../app/controllers/access_control_controller');

accesControlRoute.route('/register')
  .post(accesControlControlle.signup)
  //.post(userControlle.addUsuarios);

accesControlRoute.route('/login')
  .post(accesControlControlle.login)
  //.put(userControlle.updateUsuarios)
  //.delete(userControlle.deleteUsuarios);

accesControlRoute.route('/logout')
  .post(accesControlControlle.logout)

module.exports = accesControlRoute;
