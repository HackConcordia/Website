var app = require('../app'),
    io  = require('socket.io')(app.server);

// Sample socket.io events
io.on('connection', function (socket) {

});
