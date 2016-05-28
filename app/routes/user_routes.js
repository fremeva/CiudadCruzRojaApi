'use strict';

var express = require('express');
var userRoute = express.Router();
var userControlle = require('../../app/controllers/users_controller');

userRoute.route('/usuarios')
  .get(userControlle.getUsuarios)
  .post(userControlle.addUsuarios);

userRoute.route('/usuarios/:id')
  .get(userControlle.findById)
  //.put(userControlle.updateUsuarios)
  //.delete(userControlle.deleteUsuarios);

module.exports = userRoute;
