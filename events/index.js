var app = require('../app'),
    io  = require('socket.io')(app.server);

// Sample socket.io events
io.on('connection', function (socket) {
  socket.emit('news', { "Hello": "World!" , "socket.io": "works!"});
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
