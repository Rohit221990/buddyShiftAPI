var debug = require('debug');
var path = require('path');
var mongoose = require('mongoose');
var envalid = require('envalid');
var express = require('express');
var hostname = '127.0.0.1';
var config = require('./config.json');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();
var env = envalid.cleanEnv(process.env, {
    virtualDirPath: envalid.str({
        default: ''
    })
});
var virtualDirPath = env.virtualDirPath;
console.log('************************', config.url);
mongoose.connect(config.url);
var db = mongoose.connection;
console.log('************************', db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(virtualDirPath + '/', routes);
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
var envPort = process.env.port || 3000;
var server = app.listen(envPort, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + server.address().port + "/");
    debug('Express server listning on port' + server.address().port);
});
