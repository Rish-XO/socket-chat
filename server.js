const cors = require('cors')

const io = require('socket.io')(3000, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });
  
  
io.on('connection' ,socket => {
    socket.emit('chat-message' , 'Hello World')
})