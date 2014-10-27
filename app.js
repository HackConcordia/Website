var express = require('express'),
    app     = module.exports = express(),
    path    = require('path'),
    routes  = require('./routes'),
    server  = module.exports.server = require('http').Server(app);

// App Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('node_modules', path.join(__dirname, 'node_modules'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', routes.index);
app.get('/css/normalize.css', routes.normalizecss);
app.get('*', routes.fileNotFound); // 404 page should always be last

// Events
var events = require('./events');

// Start server listening
server.listen(app.get('port'), function () {
  console.log('Server listening on port ' + this.address().port);
});