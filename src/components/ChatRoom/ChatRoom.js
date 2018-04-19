/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import { Messages } from '../Messages';
import { WriteMessage } from '../WriteMessage';
import { UserList } from '../UserList';

const ChatRoom = ({ sendMessage, messages, users, currentUser }) => (
  <div id="container">
    <aside id="users">
      <UserList users={users} currentUser={currentUser} />
    </aside>
    <section id="main">
      <Messages messages={messages} currentUser={currentUser} />
      <WriteMessage sendMessage={sendMessage} currentUser={currentUser} />
    </section>
  </div>
);

ChatRoom.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  sendMessage: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatRoom;
