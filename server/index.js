const io = require('socket.io')();
const userList = [];

io.on('connection', (client) => {
  client.on('sendMessage', function(message, user) {
    console.log('I received a message', message, user);
    if (userList.find(oldUser => oldUser.id === client.id) === undefined) {
      console.log('User reconnected:', user.username);
      userList.push(user);
      console.log('Connected users:', userList);
      io.emit('getUserList', userList);
    }
    client.broadcast.emit('receiveMessage', { message, user });
  });

  client.on('addUser', function(username) {
    console.log('New user connected:', username);
    const user = { id: client.id, username };
    userList.push(user);
    client.emit('thisIsYou', user);
    console.log('Connected users:', userList);
    io.emit('getUserList', userList);
  });

  client.on('disconnect', function(reason) {
    user = userList.find(user => user.id === client.id);
    if (user) {
      /* Gidder ikke at serveren skal krasje fordi "Can't read username of undefined" */
      console.log(`${user.username} disconnected because of ${reason}`);
    } else {
      console.log(`Someone disconnected because of ${reason}`);
    }
    idx = userList.indexOf(user);
    if (idx > -1) console.log('Ur deleted:', userList.splice(idx, 1));
    console.log('Users left:', userList);
    io.emit('getUserList', userList);
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
