import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = ({ user, message, currentUser }) => {
  const MessagePlacement = styled.p`
    text-align: ${user === currentUser ? 'right' : 'left'};
  `;
  return (
    <section id="messages">
      <MessagePlacement>
        <b>{user.username}</b>: {message}
      </MessagePlacement>
    </section>
  );
};

Message.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
