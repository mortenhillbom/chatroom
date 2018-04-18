import openSocket from 'socket.io-client';

const socket = openSocket('http://10.0.0.43:8000');

function apiSendMessage(message, user) {
  socket.emit('sendMessage', message, user);
}

function apiReceiveMessage(func) {
  socket.on('receiveMessage', payload => func(payload));
}

function apiAddUser(username) {
  socket.emit('addUser', username);
}

function apiWhoAmI(func) {
  socket.on('thisIsYou', payload => func(payload));
}

function apiGetUserList(func) {
  socket.on('getUserList', payload => {
    func(payload);
  });
}

export {
  apiSendMessage,
  apiReceiveMessage,
  apiAddUser,
  apiWhoAmI,
  apiGetUserList,
};
