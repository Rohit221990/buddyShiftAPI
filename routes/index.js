var routes = require('express').Router();
var signup_1 = require("../src/signup");
routes.post('/users', signup_1.signUp);
module.exports = routes;
