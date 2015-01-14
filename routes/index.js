var app = require('../app');

var routes = {};

// GET home page
routes.index = function (req, res) {
    res.render('index.ejs', require("../data/data.json"));
};

// GET normalize.css
routes.normalizecss = function (req, res) {
    res.sendFile(app.get('node_modules') + '/normalize.css/normalize.css');
};

// GET 404 page
routes.fileNotFound = function (req, res) {
    res.render('status/404.ejs');
};

module.exports = routes;