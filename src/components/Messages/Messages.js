import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message';

const Messages = ({ messages, currentUser }) => (
  <section id="messages-parent">
    <div id="messages">
      <ul>
        {messages.map(message => (
          <Message
            key={message.id}
            user={message.user}
            message={message.message}
            currentUser={currentUser}
          />
        ))}
      </ul>
    </div>
  </section>
);

Messages.propTypes = {
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
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Messages;
