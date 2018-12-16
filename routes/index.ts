const routes = require('express').Router();

import {signUp} from "../src/signup"


routes.post('/users', signUp)
    

module.exports = routes;