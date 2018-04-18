const io = require('socket.io')();
const userList = [];
const clientToUserMap = {};

io.on('connection', (client) => {
  client.on('sendMessage', function(message, user) {
    console.log('I received a message', message, user);
    if (clientToUserMap[client.id] && userList.indexOf(clientToUserMap[client.id]) === -1) {
      console.log('User reconnected:', user.username);
      userList.push(user);
      console.log(userList);
      io.emit('getUserList', userList);
    }
    client.broadcast.emit('receiveMessage', { message, user });
  });

  client.on('addUser', function(username) {
    console.log('New user connected:', username);
    const user = { username, id: client.id };
    userList.push(user);
    clientToUserMap[client.id] = user;
    client.emit('thisIsYou', user);
    console.log(userList);
    io.emit('getUserList', userList);
  });

  client.on('disconnect', function(reason) {
    if (clientToUserMap[client.id]) {
      console.log(`${clientToUserMap[client.id].username} disconnected because of ${reason}`);
    } else {
      console.log(`Someone disconnected because of ${reason}`);
    }
    userList.splice(userList.indexOf(clientToUserMap[client.id]));
    if (reason !== 'ping timeout') {
      console.log('The user probably left on purpose');
      delete clientToUserMap[client.id];
    }
    io.emit('getUserList', userList);
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
